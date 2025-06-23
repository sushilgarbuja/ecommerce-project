
import { Button } from '@/components/ui/button'
import React from 'react'

function Featured() {
    return (
        <section className='py-16 bg-white'>
            <div className='container mx-auto px-4'>
                <div className='text-center mb-12'>
                    <h2 className='text-3xl font-bold mb-4'>Shop By Category</h2>
                    <p className='text-gray-600 max-w-2xl mx-auto'>Explore our wide range of products. Discover the perfect fit for your lifestyle.</p>

                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 '>
                    {[
                        { title: "Electronics", image: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wc3xlbnwwfHwwfHx8MA%3D%3D" },
                        { title: "Electronics", image: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wc3xlbnwwfHwwfHx8MA%3D%3D" },
                        { title: "Electronics", image: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wc3xlbnwwfHwwfHx8MA%3D%3D" },
                        { title: "Electronics", image: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wc3xlbnwwfHwwfHx8MA%3D%3D" },
                    ].map((category, index) => (
                        <div key={index} className='group relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer'>
                            <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 ' />
                            <div className='absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/20 transition-all duration-300 z-10'>

                            </div>
                            <img src={category.image} alt={category.title} className='w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105' />
                            <div className='absolute bottom-0 left-0 right-0 p-6 z-20'>
                                <div className='flex items-center gap-3 mb-2'>
                                    <div className='w-10 h-10 rounded-full bg-white/90 flex items-center justify-center' />
                                    {/* <i>{category.title}</i> */}
                                </div>
                                <h3 className='text-lg font-semibold text-white'>{category.title}</h3>
                                <p className='text-sm text-white mb-4 hidden-group-hover:block transition-all duration-300'>
                                    Explore our wide range of  {" "}{category.title.toLocaleLowerCase()}   products.
                                </p>
                                <Button className='!rounded-button whitespace-nowrap bg-white text-indigo-600 hover:bg-gray-100 cursor-pointer'>
                                    Shop Now
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Featured
