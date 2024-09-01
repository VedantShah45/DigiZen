import React, { useEffect } from 'react'
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import Description from '../components/Description.jsx';
import Footer from '../components/Footer.jsx';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/sidebar.jsx';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IconContext } from 'react-icons/lib';

const HomePage = () => {
    const { user } = useSelector(store => store.auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) navigate('/login');
    }, []);
    const [open,setOpen]=React.useState(false)
    return (
        <>
        <div className='m-0 p-3' style={{backgroundImage: "linear-gradient(to bottom, #0D2149, #F9EBE0)"}}>
            <IconContext.Provider value={{size:'30px'}}>
            {!open && <IoIosArrowDroprightCircle  className='fixed top-1/2 left-1 cursor-pointer' onClick={()=>{setOpen(true)}}/> }
            </IconContext.Provider>
            {open && <Sidebar />}
            <IconContext.Provider value={{size:'30px'}}>
            {open && <IoIosArrowDropleftCircle  className='fixed top-1/2 left-48 cursor-pointer' onClick={()=>{setOpen(false)}}/> }
            </IconContext.Provider>
            <Navbar />
            <Hero />
            <Description />
            {/* <Footer /> */}
        </div>
        </>
    )
}

export default HomePage
