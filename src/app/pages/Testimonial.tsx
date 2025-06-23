"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react'
// from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import {
    Card,
    CardContent,
} from "@/components/ui/card"
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Avatar, AvatarFallback } from '@radix-ui/react-avatar';

function Testimonial() {
    return (
        <section className='py-16 bg-white'>
            <div className='container mx-auto px-4'>
                <div className='text-center mb-12'>
                    <h2 className='text-3xl font-bold mb-2'>What our customers say</h2>
                    <p className='text-gray-600 max-w-2xl mx-auto'>Here are some testimonials from our satisfied customers</p>
                </div>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={24}
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 2
                        },
                        1024: {
                            slidesPerView: 3
                        }
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    navigation
                    className="pb-12"
                >
                    {[
                        {
                            name: "John Doe",
                            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
                            title: "CEO at Company",
                            quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
                            avatar: "D"

                        },
                        {
                            name: "Ram",
                            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
                            title: "CEO at Company",
                            quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
                            avatar: "D"
                        },
                        {
                            name: "Ram",
                            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
                            title: "CEO at Company",
                            quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
                            avatar: "D"
                        },
                        {
                            name: "Ram",
                            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
                            title: "CEO at Company",
                            quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
                            avatar: "D"
                        },
                    ].map((testimonial, idx) => (
                        <SwiperSlide key={idx}>
                            <Card className='h-full'>
                                <CardContent className='p-6'>
                                    <div className='flex items-center gap-1 text-yellow-400 mb-4'>
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <i key={star} className='fa fa-star'></i>
                                        ))}

                                    </div>
                                    <p className='text-gray-600 mb-6 italic'>{testimonial.quote}</p>
                                    <div className='flex items-center gap-4'>
                                        <Avatar>
                                            <AvatarFallback className='bg-indigo-100 text-indigo-700 rounded-full'>
                                                {testimonial.avatar}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <h4 className='font-semibold'>{testimonial.name}</h4>
                                            <p className='text-sm text-gray-600'>
                                                {testimonial.title}
                                            </p>
                                        </div>
                                    </div>

                                </CardContent>
                            </Card>
                        </SwiperSlide>

                    ))}

                </Swiper>
            </div>
        </section>
    )
}

export default Testimonial
