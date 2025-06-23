"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

function HeroSection() {
    return (
        <section className='relative bg-white py-20 md:py-32 px-6 lg:px-16 overflow-hidden'>

            {/* Floating Blobs */}
            <div className="absolute top-[-80px] left-[-80px] w-72 h-72 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full blur-3xl opacity-50 animate-pulse z-0" />
            <div className="absolute bottom-[-100px] right-[-60px] w-80 h-80 bg-gradient-to-tr from-cyan-200 to-blue-200 rounded-full blur-3xl opacity-60 animate-spin-slow z-0" />

            {/* Grid Container */}
            <div className='relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center'>

                {/* Left Column - Text */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className='space-y-6'
                >
                    <h1 className='text-4xl md:text-6xl font-bold text-gray-800'>
                        Redefine Your <span>Online</span> <span className='text-primary'>Experience</span>
                    </h1>
                    <p className='text-lg md:text-xl text-gray-600'>
                        Step into the future with our cutting-edge web3 platform. Unlock a world of possibilities and revolutionize your online presence.
                    </p>
                    <div className='flex gap-4 flex-wrap'>
                        <Link href={"/"}>
                            <Button className='bg-primary hover:bg-primary/90'>Shop the Collection</Button>
                        </Link>
                        <Link href={"/"}>
                            <Button variant='outline' className='cursor-pointer'>Learn More</Button>
                        </Link>
                    </div>
                </motion.div>

                {/* Right Column - Image */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className='relative w-full h-96 md:h-[500px]'
                >
                    <Image
                        src="https://images.unsplash.com/photo-1611078489935-0cb964de46d6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wc3xlbnwwfHwwfHx8MA%3D%3D"
                        width={500}
                        height={500}
                        alt="Hero Image"
                        className='w-full h-full object-cover shadow-md rounded-xl'
                        priority
                    />
                </motion.div>

            </div>
        </section>
    )
}

export default HeroSection
