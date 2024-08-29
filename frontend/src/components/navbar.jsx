import React, { useState } from "react";
import '../style.css'
import { DarkMode, Heading } from "@chakra-ui/react";
import { MdDarkMode } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
    const [mode, setMode] = React.useState('light')
    const light = { backgroundColor: 'white', color: 'black' }
    const dark = { backgroundColor: 'black', color: 'white' }
    const modeShift = () => {
        setMode((mode) => {
            if (mode == 'light')
                return 'dark'
            else
                return 'light'
        })
    }
    return (
        <>
            <nav className="h-16 p-2 flex justify-between items-center" style={mode === 'light' ? light : dark}>
                <Heading>DigiZen</Heading>
                <ul className="flex w-1/3 justify-between">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className="flex w-1/5 justify-center">
                    <button onClick={() => { navigate('/login') }}>Sign In</button>
                    <button className="p-2 mx-2 bg-slate-500 rounded-lg" onClick={() => { navigate('/signup') }}>Sign Up</button>
                </div>
                <MdDarkMode className=" hover:cursor-pointer" onClick={modeShift} />
            </nav>
        </>
    )
}