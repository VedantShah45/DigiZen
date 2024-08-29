import { Image } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <div className='w-screen bg-green-300 py-12'>
            <div className='flex flex-col md:flex-row justify-around items-center px-4'>
                <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, ease: 'easeOut' }} className='flex flex-1 flex-col px-4'>
                    <h1 className='text-5xl font-semibold text-gray-500'>Unleash Your Potential. <br />Own the Game.</h1>
                    <span className='text-xl font-semibold text-gray-500'>Join the ultimate platform where athletes connect, compete, and conquer. Whether you're a rising star or a seasoned pro, discover opportunities, track your progress, and elevate your game to new heights.</span>
                </motion.div>
                <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
                    <Image src='/hero-icon.png' />
                </motion.div>
            </div>
        </div>
    )
}

export default Hero