import React from 'react'
import { motion } from 'framer-motion'
import { MdSportsCricket } from "react-icons/md";
import { IoMdFootball } from "react-icons/io";
import { FaFootballBall } from "react-icons/fa";
import { FaBasketball } from "react-icons/fa6";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Description = () => {
    return (
        <div className='bg-green-300 w-screen py-10 flex flex-col justify-center items-center px-4'>
            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 0.8 }} className='mb-8'>
                <h3 className='text-3xl font-semibold text-gray-500'>What do we offer ?</h3>
            </motion.div>
            <div className='flex flex-col md:flex-row w-full px-4 py-4 gap-4'>
                <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 0.8 }} className='flex flex-1 px-8'>
                    <span className='text-gray-500 text-center'>
                        Our platform bridges the gap between athletes and opportunities by empowering players to showcase their skills, stats, and achievements in personalized profiles, while giving coaches and scouts powerful tools to discover and connect with top talent. Whether you're a player looking to elevate your career or a coach seeking the perfect fit for your team, our platform offers a seamless experience that fosters growth, development, and success in the world of sports.
                    </span>
                </motion.div>
                <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 0.8 }} className='flex flex-1 flex-col'>
                    <div className='flex justify-center items-center mb-8'>
                        <h3 className='text-2xl font-bold text-gray-500 text-center'>Sports we Support</h3>
                    </div>
                    <div className='flex flex-wrap items-center justify-center gap-4 mb-4'>
                        <motion.div variants={iconVariants(2.4)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                            <MdSportsCricket className='text-7xl text-orange-500' />
                        </motion.div>
                        <motion.div variants={iconVariants(1.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                            <IoMdFootball className='text-7xl text-black' />
                        </motion.div>
                        <motion.div variants={iconVariants(1.9)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                            <FaFootballBall className='text-7xl text-orange-900' />
                        </motion.div>
                        <motion.div variants={iconVariants(1.9)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                            <FaBasketball className='text-7xl text-orange-700' />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Description
