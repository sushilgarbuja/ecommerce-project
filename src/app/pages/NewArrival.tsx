'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'; // Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


//images
import image1 from "@/assets/image 1.jpeg"
import image2 from "@/assets/image 2.jpeg"
import image3 from "@/assets/image 3.jpg"
import image4 from "@/assets/image 4.jpeg"

import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button';
import { Badge } from 'lucide-react';

function NewArrival() {
    return (
        <section className='py-16 bg-gray-50'>
            <div className='container mx-auto px-4'>
                <div className='flex justify-between items-center mb-12'>
                    <div>
                        <h2 className='text-3xl font-bold '>New Arrivals</h2>
                        <p className='text-gray-600'>Discover the latest additions to our collection</p>
                    </div>
                </div>
                <Swiper modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={24}
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 2
                        },
                        768: {
                            slidesPerView: 3
                        },
                        1024: {
                            slidesPerView: 4
                        }
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    navigation
                    className="pb-12"                    >
                    {[
                        {
                            name: "Iphone 16 Pro Max",
                            price: "$999.99",
                            image: image1,
                        },
                        {
                            name: "Macbook Pro",
                            price: "$999.99",
                            image: image2,
                        },
                        {
                            name: "Acer Nitro 5",
                            price: "$999.99",
                            image: image3,
                        },
                        {
                            name: "Redmi Note 13 Pro",
                            price: "$199.99",
                            image: image4,
                        }
                    ].map((product, index) => (
                        <SwiperSlide key={index}>
                            <Card className='h-full group overflow-hidden'>
                                <div className='relative overflow-hidden pt-[100%]'>
                                    <img src={product.image.src} alt={product.name} className='absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105' />
                                    <div className='absolute top-4 right-4'>
                                        <Badge className='bg-blue-500 text-white dark:bg-blue-600'>
                                            New
                                        </Badge>
                                    </div>
                                    <div className='absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100'>
                                        <Button className="!rounded-button whitespace-nowrap bg-white text-indigo-600 hover:bg-gray-100 cursor-pointer">
                                            Add to Cart
                                        </Button>
                                    </div>

                                </div>
                                <CardContent className='pt-4'>

                                    <CardTitle className='text-lg font-semibold'>{product.name}</CardTitle>
                                    <CardDescription className='text-muted-foreground text-sm'>{product.price}</CardDescription>
                                </CardContent>

                            </Card>
                        </SwiperSlide>

                    ))
                    }

                </Swiper>


            </div>

        </section >
    )
}

export default NewArrival
