"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Truck } from "lucide-react"


function FreeShippingBanner() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className='border border-red-400 rounded-xl p-4 bg-white shadow-sm max-w-5xl mx-auto'
        >
            <div className='flex flex-col md:flex-row items-center jsutify-between gap-4'>
                {/*left section */}
                <div className='flex items-center gap-4'>
                    <Truck className='text-red-500 w-7 h-7' />
                    <span className='font-semibold text-lg text-gray-800'>FREE SHIPPING</span>
                </div>
            </div>
            {/*Center message*/}
            <p className='text-gray-600 text-sm md:text-base text-center md:text-left'>
                Enjoy free shipping on all orders over {""}
                <span className='font-semibold text-gray-800 '>$100</span>
            </p>

            {/*Right section*/}
            <p className='text-lg font-bold text-red-500 text-center md:text-right'>
                - Only <span>$100</span>
            </p>
        </motion.div>
    )
}

export default FreeShippingBanner
