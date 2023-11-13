"use client"
import Navbar from "../components/Navbar";
import Line from "../components/LineH";
import ProfileNav from './ProfileNav'
import SearchBar from "../components/SearchBar";

export default function DashboardLayout({ children }) {
    return <section >
        <div className='mx-5 md:mx-10 lg:mx-16'>
                <Navbar />
                <SearchBar />
            </div>
            <Line />
            <div className='mx-5 md:mx-10 lg:mx-16'>
                <ProfileNav/>
                {children}
            </div>
                
        
    </section>
}