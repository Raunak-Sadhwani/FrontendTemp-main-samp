"use client"
import React, { useState, useEffect } from 'react'
import CustomSlider from './components/Slider';
import { FiThumbsUp, FiPhoneCall } from 'react-icons/fi';
import { AiFillHeart } from 'react-icons/ai';
import { BsSend } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaRegShareSquare } from 'react-icons/fa';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { AiOutlineArrowRight } from 'react-icons/ai';
import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";
import Link from 'next/link';
import { Separator } from "@/components/ui/separator"



const slides = ['./banner.png', './banner.png', './banner.png'];
const slideTitle = ['Connecting Business to Heart1', 'Connecting Business to Heart2', 'Connecting Business to Heart3'];

// const category = [
//   { imageUrl: '/homecat.png', title: 'Home Decor' },
//   { imageUrl: '/cunstructioncat.png', title: 'Construction Material' },
//   { imageUrl: 'cunsultantcat.png', title: 'Consultants services' },
//   { imageUrl: 'electronicscat.png', title: 'Electronics Electricals' },
//   { imageUrl: 'estateagentcat.png', title: 'Estate Agent' },
//   { imageUrl: 'hospitalcat.png', title: 'Hospital Medical' },
//   { imageUrl: '/homecat.png', title: 'Home Decor' },
//   { imageUrl: '/cunstructioncat.png', title: 'Construction Material' },
//   { imageUrl: 'cunsultantcat.png', title: 'Consultants services' },
//   { imageUrl: 'electronicscat.png', title: 'Electronics Electricals' },
//   { imageUrl: 'estateagentcat.png', title: 'Estate Agent' },
//   { imageUrl: 'hospitalcat.png', title: 'Hospital Medical' },
//   { imageUrl: '/homecat.png', title: 'Home Decor' },
//   { imageUrl: '/cunstructioncat.png', title: 'Construction Material' },
//   { imageUrl: 'cunsultantcat.png', title: 'Consultants services' },
//   { imageUrl: 'electronicscat.png', title: 'Electronics Electricals' },
//   { imageUrl: 'estateagentcat.png', title: 'Estate Agent' },
//   { imageUrl: 'hospitalcat.png', title: 'Hospital Medical' },
// ];

const sponserdAdd = ['./addbanner.png', './addbanner.png', './addbanner.png'];

const Page = ({ data }) => {

  const newDataValue = 'your_specific_value';

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);



  const handleClickTrack = async (product, buttonName) => {
    try {
      const requestData = {
        productId: product._id,
        buttonName: buttonName,
      };

      // Replace 'your-api-endpoint' with your actual API endpoint
      const response = await fetch('http://13.234.240.153:3002/api/analysis/track-click', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        const data = await response.json();
        // Handle the API response as needed
        console.log('API response:', data);
      } else {
        // Handle errors if necessary
        console.error('Failed to share product');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };



  const fetchCategory = async () => {
    try {
      const response = await fetch('http://13.234.240.153:3002/api/categories/trending');
      if (!response.ok) {
        throw new Error('Failed to fetch Category');
      }
      const categories = await response.json();
      setCategory(categories);
    } catch (error) {
      console.error('Error fetching category:', error);
    }
  };


  const fetchData = async () => {
    try {
      const response = await fetch('http://13.234.240.153:3002/api/products/list');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchCategory();
  }, []);



  const startIndex = 0;
  const endIndex = 6;

  const currentProducts = products.slice(startIndex, endIndex);

  const handleButtonClick = (vendor) => {

  };

  return (
    
    <div className='md:px-10 lg:px-10 xl:px-30 px-4'>

      <Navbar />
      <SearchBar />
      <div className='md:flex lg:flex md:py-10 lg:py-10'>
        <div className='md:w-1/2 lg:w-1/2 pt-5 md:px-2 lg:px-2 md:pt-0 lg:pt-0'>
          <CustomSlider slides={slides} slideTitle={slideTitle} />
        </div>
        <div className="grid grid-cols-3 grid-rows-3 md:grid-cols-6 md:grid-rows-3 lg:grid-cols-6 lg:grid-rows-3 gap-2 md:w-1/2 lg:w-1/2 pt-5 md:px-2 lg:px-2 md:pt-0 lg:pt-0 ">
          {/* {category.map((item, index) => (
            <div key={index} className="border pt-2  border-gray-300 flex flex-col items-center justify-center text-center px-4 py-1">
              <img src={item.categoryImage} alt={Image ${index + 1}} />
              <p className={` font-bold text-xs text-sky-500 overflow-hidden p-2 text-center`}>{item.categoryName}</p>
            </div>
          ))} */}
          <div className="border pt-2 px-4  border-gray-300 rounded-md flex flex-col items-center justify-center text-center ">
            <img className='' src='./homecat.png' alt="Category Image" />
            <p className={` font-bold text-xs text-sky-500 overflow-hidden p-2 text-center`}>Home   Decor</p>
          </div>
          <div className="border pt-2  border-gray-300 rounded-md flex flex-col items-center justify-center text-center px-4 py-1">
            <img src='./hospitalcat.png' alt="Category Image" />
            <p className={` font-bold text-xs text-sky-500 overflow-hidden p-2 text-center`}>Hospital Medical</p>
          </div>
          <div className="border pt-2  border-gray-300 rounded-md flex flex-col items-center justify-center text-center px-4 py-1">
            <img src='./estateagentcat.png' alt="Category Image" />
            <p className={` font-bold text-xs text-sky-500 overflow-hidden p-2 text-center`}>Estate Agent</p>
          </div>
          <div className="border pt-2  border-gray-300 rounded-md flex flex-col items-center justify-center text-center px-4 py-1">
            <img src='./cunstructioncat.png' alt="Category Image" />
            <p className={` font-bold text-xs text-sky-500 overflow-hidden p-2 text-center`}>Construction Material</p>
          </div>
          <div className="border pt-2  border-gray-300 rounded-md flex flex-col items-center justify-center text-center px-4 py-1">
            <img src='./electronicscat.png' alt="Category Image" />
            <p className={` font-bold text-xs text-sky-500 overflow-hidden p-2 text-center`}>Electronics Electricals</p>
          </div>
          <div className="border pt-2  border-gray-300 rounded-md flex flex-col items-center justify-center text-center px-4 py-1">
            <img src='./cunsultantcat.png' alt="Category Image" />
            <p className={` font-bold text-xs text-sky-500 overflow-hidden p-2 text-center`}>Consultants</p>
          </div>
          <div className="border pt-2  border-gray-300 rounded-md flex flex-col items-center justify-center text-center px-4 py-1">
            <img src='./homecat.png' alt="Category Image" />
            <p className={` font-bold text-xs text-sky-500 overflow-hidden p-2 text-center`}>Home Decor</p>
          </div>
          <div className="border pt-2  border-gray-300 rounded-md flex flex-col items-center justify-center text-center px-4 py-1">
            <img src='./hospitalcat.png' alt="Category Image" />
            <p className={` font-bold text-xs text-sky-500 overflow-hidden p-2 text-center`}>Hospital Medical</p>
          </div>
          <div className="border pt-2  border-gray-300 rounded-md flex flex-col items-center justify-center text-center px-4 py-1">
            <img src='./estateagentcat.png' alt="Category Image" />
            <p className={` font-bold text-xs text-sky-500 overflow-hidden p-2 text-center`}>Estate Agent</p>
          </div>
          <div className="border pt-2  border-gray-300 rounded-md flex flex-col items-center justify-center text-center px-4 py-1">
            <img src='./cunstructioncat.png' alt="Category Image" />
            <p className={` font-bold text-xs text-sky-500 overflow-hidden p-2 text-center`}>Construction Material</p>
          </div>
          <div className="border pt-2  border-gray-300 rounded-md flex flex-col items-center justify-center text-center px-4 py-1">
            <img src='./electronicscat.png' alt="Category Image" />
            <p className={` font-bold text-xs text-sky-500 overflow-hidden p-2 text-center`}>Electronics Electricals</p>
          </div>
          <div className="border pt-2  border-gray-300 rounded-md flex flex-col items-center justify-center text-center px-4 py-1">
            <img src='./cunsultantcat.png' alt="Category Image" />
            <p className={` font-bold text-xs text-sky-500 overflow-hidden p-2 text-center`}>Consultants</p>
          </div>
          <div className="border pt-2 border-gray-300 rounded-md flex flex-col items-center justify-center text-center px-4 py-1 ">
            <img src='./homecat.png' alt="Category Image" />
            <p className={` font-bold text-xs text-sky-500 overflow-hidden p-2 text-center`}>Home Decor</p>
          </div>
          <div className="border pt-2 border-gray-300 rounded-md flex flex-col items-center justify-center text-center px-4 py-1">
            <img src='./hospitalcat.png' alt="Category Image" />
            <p className={` font-bold text-xs text-sky-500 overflow-hidden p-2 text-center`}>Hospital Medical</p>
          </div>
          <div className="border pt-2 border-gray-300 rounded-md flex flex-col items-center justify-center text-center px-4 py-1">
            <img src='./estateagentcat.png' alt="Category Image" />
            <p className={` font-bold text-xs text-sky-500 overflow-hidden p-2 text-center`}>Estate Agent</p>
          </div>
          <div className="border pt-2 border-gray-300 rounded-md flex flex-col items-center justify-center text-center px-4 py-1">
            <img src='./cunstructioncat.png' alt="Category Image" />
            <p className={` font-bold text-xs text-sky-500 overflow-hidden p-2 text-center`}>Construction Material</p>
          </div>
          <div className="border pt-2 border-gray-300 rounded-md flex flex-col items-center justify-center text-center px-4 py-1">
            <img src='./electronicscat.png' alt="Category Image" />
            <p className={` font-bold text-xs text-sky-500 overflow-hidden p-2 text-center`}>Electronics Electricals</p>
          </div>
          <div className="border pt-2 border-gray-300 rounded-md flex flex-col items-center justify-center text-center px-4 py-1">
            <img src='./cunsultantcat.png' alt="Category Image" />
            <p className={` font-bold text-xs text-sky-500 overflow-hidden p-2 text-center`}>Consultants</p>
          </div>
        </div>
      </div>
      <div className="sponserdAdd p-5">
        <CustomSlider slides={sponserdAdd} slideTitle={" "} />
      </div>


      {/* <div className="topbusinesses my-5">
        <div className="flex justify-between">
          <div>
            <h2 className='text-3xl font-bold text-gray-500'>Top Rated Businesses</h2>
            <p className='text-sm text-gray-500 font-semibold'>They are THIRSTY to establish connections</p>
          </div>
          <div className='flex'>
            <FiThumbsUp className='text-4xl text-sky-400 mx-2 mt-1' />
            <p className='text-sm font-bold text-gray-500 flex align-middle'>Trusted by <br /> Thirsty Maart </p>
          </div>
        </div>
        <div className="">
          <ul className="grid md:grid-cols-7 grid-cols-2 my-5">
            <li className='text-sm text-gray-500 font-semibold w-full'><a className='hover:border-2 border-sky-400 lg:px-8 md:px-5 py-2 rounded-md' href='/'>category1</a></li>
            <li className='text-sm text-gray-500 font-semibold w-full'><a className='hover:border-2 border-sky-400 lg:px-8 md:px-5 py-2 rounded-md' href='/'>category2</a></li>
            <li className='text-sm text-gray-500 font-semibold w-full'><a className='hover:border-2 border-sky-400 lg:px-8 md:px-5 py-2 rounded-md' href='/'>category3</a></li>
            <li className='text-sm text-gray-500 font-semibold w-full'><a className='hover:border-2 border-sky-400 lg:px-8 md:px-5 py-2 rounded-md' href='/'>category4</a></li>
            <li className='text-sm text-gray-500 font-semibold w-full'><a className='hover:border-2 border-sky-400 lg:px-8 md:px-5 py-2 rounded-md' href='/'>category5</a></li>
            <li className='text-sm text-gray-500 font-semibold w-full'><a className='hover:border-2 border-sky-400 lg:px-8 md:px-5 py-2 rounded-md' href='/'>category6</a></li>
            <li className='text-sm text-gray-500 font-semibold w-full'><a className='hover:border-2 border-sky-400 lg:px-8 md:px-5 py-2 rounded-md' href='/'>category7</a></li>
          </ul>
        </div>
      </div> */}

      {/* <div className='products'>
        <section className="text-gray-600 body-font">
          <div className="py-10">
            <div className="grid gap-y-10 gap-x-4 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 grid-cols-1 grid-rows-3 ">
              {currentProducts.map((product) => (
                <div key={product._id} className="w-full border border-gray-200 rounded-lg p-2">
                  <a className="block relative rounded overflow-hidden">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                  </a>
                  <div className="mt-4 flex justify-between">
                    <h3 className="text-gray-500 text-xl tracking-widest title-font mb-1">{product.name}</h3>
                    <h2 className="text-gray-600 title-font text-sm font-medium">4.0 Rating</h2>
                  </div>

                  <div className='flex justify-between border-b border-gray-300 pb-4'>
                    <h2 className='text-xs'><AiFillHeart className='text-sky-500 inline mr-1 text-xl' />Rajarampuri Kolhapur</h2>
                    <h2 className='text-xs'>
                      1.3 km
                    </h2>
                  </div>

                  <div className="description py-2">
                    <p className='text-xs'>{product.description}</p>
                  </div>
                  <div className="buttons flex justify-between">
                    <div className="contacts flex justify-between">
                      <button onClick={() => handleClickTrack(product, 'call')} className=' bg-sky-500 text-white rounded-md px-2 py-1 whitespace-nowrap'><FiPhoneCall className='inline' />+91 00000 00000</button>
                      <button onClick={() => handleClickTrack(product, 'whatsapp')} className='border border-gray-300 rounded-lg px-2 py-1 mx-2'><IoLogoWhatsapp className='inline text-green-600' />Chat</button>
                    </div>
                    <div className="share">
                      <button onClick={() => handleClickTrack(product, 'share')} className=' border border-gray-300 rounded-lg px-2 py-1'><FaRegShareSquare className='inline' />Share</button>
                    </div>
                  </div>
                  <div className="more text-xs text-gray-500 flex justify-between py-4">
                    <Link href={/profile?data=${JSON.stringify(newDataValue)}} onClick={handleButtonClick(product._id)} className='text-sky-500 border-b-2 border-sky-300'>More from John Doe<MdKeyboardDoubleArrowRight className='inline text-xl' /></Link>
                    <p>responds in less than <span className='text-sky-400 font-bold'>5 min</span></p>
                  </div>
                </div>
              ))}


            </div>
            <div className="flex justify-center my-4">
              <a href='/category' className="inline-flex items-center bg-sky-500 border-0 focus:outline-none hover:bg-sky-400 rounded text-base p-5 md:mt-0 text-white">See More  <AiOutlineArrowRight className='ml-2' /></a>

            </div>

          </div>
        </section>
      </div> */}

      <Separator className='my-6' />

      <div className='text-gray-500'>
        <p className="text-xs footer text my-4">At Thirsty Maart, our story is not just about commerce; it&aposs a tale of compassion and purpose. We are a brand that thrives on the satisfaction of seeing others succeed and excel. We believe that our thirst (or hunger) to witness the triumph of our clients keeps growing with every new success story. </p>
        <p className="text-xs footer text my-4">Our brand is built on a profound foundation that combines the best of B2B, B2C, and B2B2C while infusing a genuine human touch. We go beyond the conventional approach to lead generation. ThirstyMaart is not just about quantity; it&aposs about the quality of connections we foster.</p>
        <p className="text-xs footer text my-4">Our emblematic use of &quotMaa&quot in our logo represents the nurturing love and care that a mother provides. Just as a mother looks after her children and adapts to their needs, ThirstyMaart is committed to being a constant support system for our clients. We play the roles of a friend, philosopher, and guide, just like a mother does.</p>
        <p className="text-xs footer text my-4">Thirsty Maart is where the intelligence of AI meets the empathy of humans. We combine cutting-edge technology with a human touch to provide services that are not only efficient but also deeply caring.</p>
        <p className="text-xs footer text my-4">We believe that every rupee invested by our subscribers should yield more than just leads; it should yield invaluable connections and success stories. We go above and beyond the ordinary to make sure our clients receive the best returns on their investments.</p>
        <p className="text-xs footer text my-4">Our brand ethos is rooted in the power of connections. We don&apost just do business; we do it with heart. We&aposre committed to fostering genuine relationships with our clients &helping them achieve their goals.</p>
        <p className="text-xs footer text my-4">ThirstyMaart is not just a business; it&aposs a mission to make the business world a better place by connecting hearts and minds. Join us on this journey, and together, we can reach new heights of success and make a difference in the world of commerce.</p>
      </div>
      <Separator className='my-6' />
      <div className='text-gray-500 text-xs'>
        <h2 className='text-sm font-semibold my-4'>Popular Categories:</h2>

        <p> B2B  |  B2C  |  B2G  |  Fashion  |  Events  |  Building Construction  |  Interior  |  Electrical Goods  |  Electrical Supplies   |  Pharmaceuticals  |  Hospitals  |  Agriculture  |  Food
          Cosmetics  |  Home Textile  |  Computer & IT Solutions  |  Herbal Ayurvedic Products  |  Security Services  |  Sports & Toys  |  Stationery  |  Bags & Belts  |  Advertisement
          Marble, Granite & Stones  |  Jewellery  |  Logistics  |  Product Rental & Leasing  |  Business & Audit Services  |  Legal & Finance Services  |  Travel & Tourism  |  Automobile
          HR Consultants  |  Housekeeping Services  |  Art and Entertainment  |  Gifting</p>
      </div>
      <Separator className='my-6' />



      <div className="grid grid-cols-5 grid-rows-1 gap-4 text-xs text-gray-500">
        <div >
          <h2 className="font-bold py-2">Quick Links</h2>
          <ul className=''>
            <li className="py-1">About Us</li>
            <li className="py-1">How We Work</li>
            <li className="py-1">Customer Care</li>
            <li className="py-1">Report a Problem</li>
          </ul>

        </div>
        <div >
          <h2 className="font-bold py-2">Quick Links</h2>
          <ul className=''>
            <li className="py-1">List Your Business</li>
            <li className="py-1">Advertise</li>
          </ul>

        </div>
        <div className="col-span-3">
          <div className='border border-gray-300 rounded-md flex align-middle'>

            <div className='flex justify-between w-full'>
              <div className='border flex items-center px-4'>
                <input
                  className='focus:outline-none'
                  type="text"
                  placeholder='Enter your mail address'
                />
              </div>
              <span className='border bg-sky-400 px-3 m-1 rounded-md '>
                <BsSend className='text-2xl my-2 text-white' />
              </span>
            </div>

          </div>
          <p className='p-4 '>Subscribe to our newsletter and get updated to latest trends in the market!</p>

        </div>
      </div>

    </div>
  )
}

export default Page


