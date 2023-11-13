"use client"
import React, { useState, useEffect } from 'react'
import { LuLayoutDashboard } from 'react-icons/lu';
import { SiGoogleanalytics } from 'react-icons/si';
import { FaRegUser } from 'react-icons/fa';
import { IoMdAnalytics } from 'react-icons/io';
import { BsGear } from 'react-icons/bs';
import { PiChatsLight } from 'react-icons/pi';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressProvider from "./ProgressProvider";



import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const data = [
    { name: 'Mon', uv: 100, uz: 200, pv: 400, amt: 2400 },
    { name: 'Tue', uv: 200, uz: 100, pv: 2400, amt: 2400 },
    { name: 'Wed', uv: 100, uz: 40, pv: 2400, amt: 2400 },
    { name: 'Thu', uv: 300, uz: 200, pv: 2400, amt: 2400 },
    { name: 'Fri', uv: 220, uz: 260, pv: 2400, amt: 2400 },
    { name: 'Sat', uv: 260, uz: 290, pv: 2400, amt: 2400 },
    { name: 'Sun', uv: 320, uz: 340, pv: 2400, amt: 2400 },
];


const sw = 8;
const page = () => {

    const [valueEnd, setValueEnd] = UseState(66);
    const [selectedNavItem, setSelectedNavItem] = useState('dashboard');

    const handleNavItemClick = (item) => {
        setSelectedNavItem(item);
    };
    const renderContent = () => {
        switch (selectedNavItem) {
            case 'dashboard':
                return <DashboardContent />;
            case 'enquiries':
                return <EnquiriesContent />;
            case 'profile':
                return <ProfileContent />;
            case 'keywordAnalysis':
                return <KeywordAnalysisContent />;
            case 'settings':
                return <SettingsContent />;
            case 'support':
                return <SupportContent />;
            default:
                return null;
        }
    };

    const DashboardContent = () => (
        <div >
            <div className="flex">
                <div className=" border-2">
                    <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 30, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="uv" stroke="#38BDF8" />
                        <Line type="monotone" dataKey="uz" stroke="gray" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </div>
                <div>
                    <div className="border-2">
                        <ProgressProvider valueStart={0} valueEnd={valueEnd}>
                            {(value) => <CircularProgressbar
                                value={value}
                                text={`${value}%`}
                                strokeWidth={1}
                                styles={buildStyles({
                                    pathTransitionDuration: 2
                                })}

                            />}
                        </ProgressProvider>
                    </div>
                    <div className="border-2">

                    </div>
                </div>
            </div>
        </div>
    );

    const EnquiriesContent = () => (
        <div>Enquiries Content</div>
    );

    const ProfileContent = () => (
        <div>Profile Content</div>
    );

    const KeywordAnalysisContent = () => (
        <div>Keyword Analysis Content</div>
    );

    const SettingsContent = () => (
        <div>Settings Content</div>
    );

    const SupportContent = () => (
        <div>Support Content</div>
    );

    return (
        <div className='flex'>
            <div className="relative flex flex-col bg-clip-border  h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 bg-sky-400 text-white">
                <div className="mb-2 p-4">
                    <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-white">Main</h5>
                </div>
                <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-white">
                    <div onClick={() => handleNavItemClick('dashboard')} role="button" tabIndex="0" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                        <div className="grid place-items-center mr-4">
                            <LuLayoutDashboard />
                        </div>
                        Dashboard
                    </div>
                    <div onClick={() => handleNavItemClick('enquiries')} role="button" tabIndex="0" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                        <div className="grid place-items-center mr-4">
                            <SiGoogleanalytics />
                        </div>Enquiries
                    </div>
                    <div onClick={() => handleNavItemClick('profile')} role="button" tabIndex="0" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                        <div className="grid place-items-center mr-4">
                            <FaRegUser />
                        </div>Profile
                        <div className="grid place-items-center ml-auto justify-self-end">
                            {/* <div className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-blue-500/20 text-blue-900 py-1 px-2 text-xs rounded-full" style={{ opacity: 1 }}>
                                <span className="">14</span>
                            </div> */}
                        </div>
                    </div>
                    <div onClick={() => handleNavItemClick('keywordAnalysis')} role="button" tabIndex="0" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                        <div className="grid place-items-center mr-4">
                            <IoMdAnalytics />
                        </div>Keyword Analysis
                    </div>

                </nav>
                <div className="mb-2 p-4">
                    <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-white">Help</h5>
                </div>
                <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-white">
                    <div onClick={() => handleNavItemClick('settings')} role="button" tabIndex="0" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                        <div className="grid place-items-center mr-4">
                            <BsGear />
                        </div>
                        Settings
                    </div>
                    <div onClick={() => handleNavItemClick('support')} role="button" tabIndex="0" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                        <div className="grid place-items-center mr-4">
                            <PiChatsLight />
                        </div>Suport
                    </div>
                </nav>
            </div>

            <div className="content-right w-full border">
                {renderContent()}
            </div>

        </div>
    )
}


export default page
