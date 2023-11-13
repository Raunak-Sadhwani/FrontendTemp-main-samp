import React, { useState } from 'react';
import axios from 'axios';
import { AiFillHeart } from 'react-icons/ai';
import { MdLensBlur } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import { TypeAnimation } from 'react-type-animation';
import { useUser } from '../components/UserContext.js';

const SearchBar = () => {
    const [selectedLocation, setSelectedLocation] = useState("0");
    const [userLocation, setUserLocation] = useState("My Location");
    const [isCityCorrect, setIsCityCorrect] = useState(true);
    const [customCity, setCustomCity] = useState("");
    const [search, setsearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const { setUserIdFromResponse, userId } = useUser();

    const APIKEY = 'pk.e4ed71203ffbd8789321e3cd48f7571a';

    const handleLocationChange = (event) => {
        setSelectedLocation(event.target.value);
        setCustomCity("");

        if (event.target.value === "1") {
            requestGeolocationPermission();
        }
    };

    const requestGeolocationPermission = async () => {
        if ("geolocation" in navigator) {
            try {
                const position = await new Promise((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(resolve, reject);
                });

                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                const response = await axios.get(
                    `https://us1.locationiq.com/v1/reverse.php?key=${APIKEY}&lat=${latitude}&lon=${longitude}&format=json`
                );

                const locationData = response.data;
                const userCity = locationData.address.city;
                setUserLocation(userCity);
                setIsCityCorrect(true);
            } catch (error) {
                console.error("Error getting location data:", error);
                setUserLocation("My Location");
                setIsCityCorrect(false);
            }
        } else {
            alert("Geolocation is not available in your browser.");
        }
    };

    const handleCustomCityInputChange = (event) => {
        setCustomCity(event.target.value);
    };

    const handleSearch = async () => {
        try {
            let query;

            // Assuming you are searching by 'companyname'
            // You can use the state variable 'search' directly
            query = search;

            const response = await axios.get(`http://13.234.240.153:3002/api/search/?companyname=${query}`);
            setSearchResults(response.data);
            const { _id } = response.data[0];
            
            setUserIdFromResponse(_id);
            console.log(userId);

        } catch (error) {
            console.error("Error searching:", error);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'search') {
            setsearch(e.target.value);
        }
    };


    return (
        <div className='grid grid-cols-3 grid-rows-1 gap-4'>
            <div className="col-span-2 py-4">
                <div className='border border-gray-300 rounded-md flex align-middle'>
                    <AiFillHeart className='inline my-4 text-xl text-gray-600 ml-4' />
                    <select className='focus:outline-none mr-4' value={selectedLocation} onChange={handleLocationChange}>
                        <option className='text-sm' value="0">Select Location</option>
                        <option className='' value="1">{userLocation}</option>
                    </select>

                    {selectedLocation === "1" && !isCityCorrect && (
                        <div>
                            <input
                                type="text"
                                value={customCity}
                                onChange={handleCustomCityInputChange}
                            />
                        </div>
                    )}

                    <div className='flex justify-between w-full'>
                        <div className='border-l border-gray-500 my-3 flex'>
                            <MdLensBlur className='mx-4 text-gray-600 text-3xl inline' />
                            <label htmlFor="search" className="sr-only">Search</label>
                            <input
                                value={search}
                                onChange={handleChange}
                                id="search"
                                name="search"
                                type="text"
                                className="  relative block w-full appearance-none 0 py-1 text-gray-900 placeholder-gray-500 focus:z-10  focus:outline-none outline-none sm:text-sm"
                                placeholder="Your THIRST Ends Here"
                            />
                        </div>
                        <a href='/profile' className='border bg-sky-400 px-3 m-1 rounded-md'>
                            <BsSearch onClick={handleSearch} className='text-3xl my-2 text-white' />
                        </a>
                    </div>
                </div>

                <div className="text">
                    <ul className='flex justify-between my-3 font-bold text-sm text-gray-500'>
                        <li className="category px-3 text-center">Electronics</li>
                        <li className="category border-l-2 border-gray-500 px-3 text-center">Electricals</li>
                        <li className="category border-l-2 border-gray-500 px-3 text-center">Medical</li>
                        <li className="category border-l-2 border-gray-500 px-3 text-center">Hotels</li>
                        <li className="category border-l-2 border-gray-500 px-3 text-center">Travels</li>
                        <li className="category border-l-2 border-gray-500 px-3 text-center">Construction</li>
                        <li className="category border-l-2 border-gray-500 px-3 text-center">Marketing</li>
                    </ul>
                </div>
            </div>
            <div className="col-start-3 text border-l-2 border-gray-500 px-4 text-gray-500 py-4">
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        ' ',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        `Get Your heart connected to 1000's of trusted Businesses to deal with!`,
                        1000,
                        `Get Your heart connected to 1000's of trusted Businesses to deal with!`,
                        1000,
                        `Get Your heart connected to 1000's of trusted Businesses to deal with!`,
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '1.2rem', display: 'inline-block' }}
                    repeat={Infinity}
                />
            </div>
        </div>
    )
}

export default SearchBar;
