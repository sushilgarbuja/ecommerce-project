"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Menu, ShoppingCart, Search, X } from "lucide-react"


function Navbar() {
    const [mobileMenu, setMobileMenu] = useState(false)

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" }
    ]

    return (
        <header className='w-full bg-white shadow-md sticky top-0 z-50'>
            <div className='max-w-7xl mx-auto px-4 py-4 flex justify-between items-center relative z-50'>
                {/* Logo */}
                <Link href={"/"} className='text-2xl font-bold text-primary z-50'>SushilStore</Link>

                {/* Desktop Nav */}
                <nav className='hidden md:flex items-center space-x-6'>
                    {navLinks.map((link) => (
                        <Link
                            href={link.href}
                            key={link.name}
                            className='text-gray-700 hover:text-primary transition'
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Search, Cart & Login - Desktop only */}
                <div className='hidden md:flex items-center space-x-4'>
                    <div className='relative'>
                        <Input type='text' placeholder='Search' className='pl-10' />
                        <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground' />
                    </div>
                    <Button variant='outline' size='icon'>
                        <ShoppingCart className='h-6 w-6' />
                    </Button>
                    <Button variant='outline' className='cursor-pointer'>
                        Login
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden z-50">
                    <Button variant="ghost" size="icon" onClick={() => setMobileMenu(!mobileMenu)}>
                        {mobileMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenu && (
                <div className='fixed inset-0 w-full h-screen bg-white pt-20 px-4 pb-4 z-40 md:hidden'>
                    <Link
                        href="/"
                        className='block text-gray-700 py-2 border-b'
                        onClick={() => setMobileMenu(false)}
                    >
                        Shop
                    </Link>
                    {navLinks.map((link) => (
                        <Link
                            href={link.href}
                            key={link.name}
                            className='block text-gray-700 py-2 border-b'
                            onClick={() => setMobileMenu(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className='flex items-center space-x-2 pt-2'>
                        <Input type='text' placeholder='Search' className='w-full' />
                        <Button variant='outline' size='icon'>
                            <Search className='h-6 w-6' />
                        </Button>
                        <Button variant='outline' size='icon'>
                            <ShoppingCart className='h-6 w-6' />
                        </Button>
                        <Button variant='outline' className='cursor-pointer'>
                            Login
                        </Button>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Navbar
