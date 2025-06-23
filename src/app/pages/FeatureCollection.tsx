import { Button } from '@/components/ui/button'
import React from 'react'
import featureImage from '@/assets/summer collection.jpeg'

function FeatureCollection() {
    return (
        <section className='relative bg-white py-20 md:py-32 px-6 lg:px-16'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
                {/* Left Column */}
                <div className='col-span-1'>
                    <span className='inline-block px-4 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium mb-4'>
                        Feature Collections
                    </span>
                    <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                        Summer Essentials
                    </h2>
                    <p className='text-gray-600 mb-6'>
                        Discover our collection of summer essentials. Shop now and get ready for the warm weather.
                    </p>
                    <ul className='space-y-4'>
                        {[
                            "Premium Quality",
                            "Exclusive Designs",
                            "Fast Shipping",
                            "30-Day Returns",
                        ].map((feature, index) => (
                            <li key={index} className='flex items-center gap-2 font-semibold'>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <Button className='!rounded-button whitespace-nowrap bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 px-8 py-6 text-lg mt-6'>
                        Shop Collection
                    </Button>
                </div>

                {/* Right Column */}
                <div className='relative mt-6 col-span-1'>
                    <img
                        src={featureImage.src}
                        alt='Feature Collection'
                        className='w-full rounded-lg shadow-xl'
                    />
                    <div className='absolute -bottom-6 left-6 bg-white rounded-lg shadow-lg p-4 max-w-xs'>
                        <div className='flex items-center gap-4 mb-2'>
                            <div className='bg-indigo-100 rounded-full p-2'></div>
                            <h4 className='font-bold'>Free Shipping</h4>
                        </div>
                        <p className='text-gray-600 text-sm'>
                            Free shipping on all orders over $100
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeatureCollection
