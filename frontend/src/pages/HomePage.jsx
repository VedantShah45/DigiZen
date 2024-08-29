import React, { useEffect } from 'react'
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import Description from '../components/Description.jsx';
import Footer from '../components/Footer.jsx';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const { user } = useSelector(store => store.auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) navigate('/login');
    }, []);
    return (
        <>
            <Navbar />
            <Hero />
            <Description />
            <Footer />
        </>
    )
}

export default HomePage
