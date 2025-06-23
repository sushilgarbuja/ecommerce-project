"use client"
import React from "react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <div>
                        <h3 className="text-xl font-bold mb-4">LuxeMarket</h3>
                        <p className="text-gray-400 mb-4">
                            Your destination for premium products and exceptional shopping
                            experience.
                        </p>
                        <div className="flex gap-4">
                            {[
                                "fab fa-facebook",
                                "fab fa-twitter",
                                "fab fa-instagram",
                                "fab fa-pinterest",
                            ].map((icon, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors cursor-pointer"
                                >
                                    <i className={`${icon} text-white`}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Shop</h4>
                        <ul className="space-y-2">
                            {[
                                "New Arrivals",
                                "Best Sellers",
                                "Sale",
                                "Electronics",
                                "Fashion",
                                "Home & Garden",
                                "Beauty",
                            ].map((item, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Customer Service</h4>
                        <ul className="space-y-2">
                            {[
                                "Contact Us",
                                "FAQs",
                                "Shipping & Returns",
                                "Track Order",
                                "Privacy Policy",
                                "Terms & Conditions",
                            ].map((item, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Contact</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <i className="fas fa-map-marker-alt mt-1 text-indigo-400"></i>
                                <span className="text-gray-400">
                                    Myagdi,Beni, Nepal
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <i className="fas fa-phone text-indigo-400"></i>
                                <span className="text-gray-400">+977 9867682335</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <i className="fas fa-envelope text-indigo-400"></i>
                                <span className="text-gray-400">support@sushilstore.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <Separator className="bg-gray-800 mb-8" />

                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm mb-4 md:mb-0">
                        © 2025 SushilStore. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        {[
                            "fab fa-cc-visa",
                            "fab fa-cc-mastercard",
                            "fab fa-cc-amex",
                            "fab fa-cc-paypal",
                            "fab fa-cc-apple-pay",
                        ].map((icon, index) => (
                            <i key={index} className={`${icon} text-2xl text-gray-500`}></i>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;