"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Line from "../components/LineH";
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaRegShareSquare } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { BsClockHistory } from 'react-icons/bs';
import { LiaHandHoldingHeartSolid } from 'react-icons/lia';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { ImHeart } from 'react-icons/im';
import { MdKeyboardArrowDown } from 'react-icons/md';
import ReactStars from 'react-rating-star-with-type'

const ProfileNav = () => {

  const [vendorInfo, setVendorInfo] = useState([]);
  const [search, setsearch] = useState('');
  const handleChange = (e) => {
    if (e.target.name == 'email') {
      setemail(e.target.value)
    }
    else if (e.target.name == 'password') {
      setpassword(e.target.value)
    }
  }

  useEffect(() => {
    // Fetch data from the API when the component mounts
    const fetchVendorInfo = async () => {
      try {
        // Get the TMtoken from local storage
        const Token = localStorage.getItem('TMtoken');


        const response = await fetch('http://13.234.240.153:3002/api/vendorinfo/get', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setVendorInfo(data);
        } else {
          console.error('Failed to fetch data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchVendorInfo();

  }, []);
  let companyName = vendorInfo.companyName
  if (vendorInfo.companyName) {
    companyName = vendorInfo.companyName.toUpperCase();
  }


  return (
    <div>
      <nav className='flex justify-between items-center'>
        <div className='flex items-center'>
          <div className="logo border w-[10vw]">
            <Image
              src="/vendorlogo.png"
              width={100}
              height={100}
              alt="Picture of the author"
              className='object-cover w-full'
            />
          </div>
          <div className='mx-4'>
            <div className="flex items-center text-gray-600">
              <div >
                <h2 className='text-3xl font-bold md:whitespace-nowrap'>{companyName}</h2>
                <h3 className='text-xl'>Category: {`${vendorInfo.category} `}</h3>
              </div>
              <div className="mx-6 flex flex-col">
                <LiaHandHoldingHeartSolid className='text-2xl text-sky-500 ' />
                <p className='font-bold text-xs flex-1'>Conected to  55 hearts Recently</p>
              </div>
            </div>
            <Line />
            <div className="flex justify-between">
              <div className="ratings flex justify-center items-center text-gray-600 flex-1 whitespace-nowrap mr-2">
                <div className='flex items-center text-xl'>
                  <span className='text-xl'>4.0</span>
                  <ReactStars
                    value={4.5}
                    size={24}
                    isEdit={false}
                    activeColor={"#FFCE00"}
                  />
                  <span className='text-xs'>(1029 Ratings)</span>
                </div>
              </div>
              <button className='flex-1  bg-sky-500 text-white rounded-md px-2 py-1  whitespace-nowrap'><FiPhoneCall className='inline' />+91 {vendorInfo.phone}</button>
              <button className='flex-1 border border-gray-300 rounded-lg px-2 py-1 mx-2'><IoLogoWhatsapp className='inline text-green-600' />Chat</button>
              <button className='flex-1 border border-gray-300 rounded-lg px-2 py-1'><FaRegShareSquare className='inline text-sky-500' />Share</button>
            </div>
          </div>
        </div>
        <div className='mx-4 text-sm font-bold text-gray-500 flex flex-col'>
          <div className="flex items-center ">
            <BsClockHistory className='text-2xl text-sky-500 mx-1 font-bold' />
            <h2 className='flex-1'>{vendorInfo.workingHour}</h2>
          </div>
          <div className="flex items-center my-4">
            <ImHeart className='text-2xl text-sky-500 mx-1' />
            <h2 className='flex-1'>{vendorInfo.address}</h2>
          </div>
          <button className=' bg-amber-500 hover:bg-orange-400 text-white rounded-md px-6  whitespace-nowrap text-xl py-2'>ENQUIRE NOW</button>
        </div>
      </nav>
      <nav className=' text-sm text-gray-500 font-bold my-4 '>
        <ul className="flex justify-between items-center">
          <li className="item cursor-pointer hover:after:h-1 hover:after:bg-sky-400 ">HOME</li>
          <li className="item cursor-pointer ">ABOUT</li>
          <li className="item cursor-pointer ">PRODUCT/SERVICES</li>
          <li className="item cursor-pointer ">WHY US</li>
          <li className="item cursor-pointer ">CONTACT US</li>
          <li className="item">
            <div className='flex justify-between w-full border border-gray-300 rounded-md'>
              <div className=' flex'>
                <input value={search} onChange={handleChange} id="search" name="search" type="text" className="  relative block w-full appearance-none text-gray-900 placeholder-gray-500 focus:z-10  focus:outline-none outline-none sm:text-sm mx-2 " placeholder="Search Products" />
              </div>
              <span className='border bg-sky-400 m-1 rounded-md'>
                <MdKeyboardArrowDown className='text-white' />
              </span>
            </div></li>
        </ul>
      </nav>
    </div>
  )
}

export default ProfileNav
