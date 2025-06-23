import React from 'react'
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import smartwatch from '@/assets/smart watch.jpg'

function Trending() {
    return (
        <section className='py-16 bg-gray-50'>
            <div className='container mx-auto px-4'>
                <div className='text-center mb-12'>
                    <h2 className='text-3xl font-bold mb-2'>Trending Now</h2>
                    <p className='text-gray-600 max-w-2xl mx-auto'>Discover the latest and most popular products</p>
                </div>
                <Tabs defaultValue='all' className='w-full'>
                    <div className='flex justify-center mb-8'>
                        <TabsList className='bg-white/80 backdrop:blur-sm'>
                            <TabsTrigger className='!rounded-button whitespace-nowrap' value='all'>All Products</TabsTrigger>
                            <TabsTrigger className='!rounded-button whitespace-nowrap' value='shoes'>Electronics</TabsTrigger>
                            <TabsTrigger className='!rounded-button whitespace-nowrap' value='clothing'>Fashion</TabsTrigger>
                            <TabsTrigger className='!rounded-button whitespace-nowrap' value='home'>Home @ Garden</TabsTrigger>
                        </TabsList>
                    </div>
                    <TabsContent value='all' className='mt-0'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                            {[
                                {
                                    name: "Smart fitnes watch",
                                    category: "Electronics",
                                    price: "$100",
                                    image: smartwatch
                                },
                                {
                                    name: "Smart fitnes watch",
                                    category: "Electronics",
                                    price: "$100",
                                    image: smartwatch
                                },
                                {
                                    name: "Smart fitnes watch",
                                    category: "Electronics",
                                    price: "$100",
                                    image: smartwatch
                                },
                                {
                                    name: "Smart fitnes watch",
                                    category: "Electronics",
                                    price: "$100",
                                    image: smartwatch
                                }
                            ].map((product, idx) => (
                                <Card key={idx} className='overflow-hidden group'>
                                    <div className='relative pt-[100%] overflow-hidden '>
                                        <img src={product.image.src} alt='product' className='w-full h-full object-cover absolute top-0 left-0 transition-transform duration-500 group-hover:scale-105' />

                                    </div>
                                    <CardContent className='p-4'>
                                        <div className='flex justify-between items-center mb-2'>
                                            <div>
                                                <p className='text-sm text-gray-500'>{product.category}</p>
                                                <h3 className='text-lg font-semibold'>{product.name}</h3>

                                            </div>
                                        </div>
                                        <div className='flex justify-between items-center gap-2 mb-3'>
                                            <p className='text-lg font-bold text-indigo-500'>
                                                {product.price}
                                            </p>
                                        </div>
                                        <Button className='w-full whitespace-nowrap bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer'>
                                            Continue
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>


        </section>
    )
}

export default Trending
