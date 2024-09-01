import React from 'react'
import { Heading } from "@chakra-ui/react";

const Footer = () => {
    return (
        <footer className="h-16 rounded-3xl p-4 flex justify-between items-center bg-black text-white">
            <Heading>Scoutify</Heading>
            <ul className="flex w-1/2 md:w-1/3 lg:w-1/5 justify-between">
                <li className="font-semibold">HOME</li>
                <li className="font-semibold">ABOUT</li>
                <li className="font-semibold">CONTACT</li>
            </ul>
        </footer>
    )
}

export default Footer
  