import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import useShowToast from '../hooks/useShowToast';
import axios from 'axios';
import BASE_URL from '../utils/baseurl.js';
import { setUser } from '../redux/authSlice';
import Navbar from '../components/Navbar.jsx';

const HomePage = () => {
    const navigate = useNavigate();
    const { user } = useSelector(store => store.auth);
    const showToast = useShowToast();
    const dispatch = useDispatch();
    useEffect(() => {
        if (!user) navigate('/login');
    }, []);
    const handleLogout = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/user/logout`, { withCredentials: true });
            if (response.data.success) {
                dispatch(setUser(null));
                showToast("Logged out", response.data.message, "success");
                navigate('/login');
            }
        } catch (error) {
            console.log(error);
            showToast("Error", error.response.data.message, "error");
        }
    }
    return (
        <>
            <Navbar />
            <div className='min-h-screen bg-teal-300 flex flex-col items-center justify-center'>
                WELCOME TO HOME PAGE!
                <button onClick={handleLogout} className='bg-teal-500 hover:bg-teal-700 text-white p-2 rounded-lg mt-2 font-bold'>LOGOUT!</button>
            </div>
        </>
    )
}

export default HomePage
