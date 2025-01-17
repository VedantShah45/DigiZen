import React from "react";
import '../style.css'
import { background, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import useShowToast from "../hooks/useShowToast";
import axios from "axios";
import BASE_URL from "../utils/baseurl.js";
import { setUser } from "../redux/authSlice.js";

export default function Navbar() {
    const navigate = useNavigate();
    const showToast = useShowToast();
    const dispatch = useDispatch();
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
            <nav className="h-16 p-3 sticky top-2 flex justify-between items-center text-white rounded-3xl " style={{backgroundColor:"#212738"}}>
                <Heading>Scoutify</Heading>
                <ul className="flex w-1/2 md:w-1/3 lg:w-1/5 justify-between">
                    <li className="font-semibold cursor-pointer hover:text-slate-500 ">HOME</li>
                    <li className="font-semibold cursor-pointer hover:text-slate-500">ABOUT</li>
                    <li className="font-semibold cursor-pointer hover:text-slate-500">CONTACT</li>
                </ul>
                <button onClick={handleLogout} className='bg-gray-300 hover:bg-gray-400 text-black p-2 rounded-lg  font-bold'>LOGOUT</button>
            </nav>
        </>
    )
}