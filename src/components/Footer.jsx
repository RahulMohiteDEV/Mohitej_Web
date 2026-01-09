import React from 'react';
import { FaInstagram, FaFacebookF, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-b from-amber-50 to-orange-50 text-gray-800 border-t border-amber-200 overflow-hidden">

            {/* Main Content */}
            <div className="container mx-auto px-4 py-5">

                {/* 3-Column Layout - Centered */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-5 pb-5 border-b border-amber-200 justify-items-center">

                    {/* LEFT SIDE - Logo, Address, Social */}
                    <div className="space-y-4 text-center md:text-left">
                        {/* Logo */}
                        <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mx-auto md:mx-0">
                            <img
                                src='./images/LogoEng.png'
                                alt="Mohites Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>

                        {/* Address */}
                        <div className="space-y-2">
                            <p className="text-sm md:text-base text-amber-900 font-medium">
                                Shop No. 12, Sweet Lane
                            </p>
                            <p className="text-xs md:text-sm text-amber-800">
                                Mumbai, Maharashtra<br />
                                India - 400001
                            </p>
                        </div>

                        {/* Social Media */}
                        <div className="flex gap-3 justify-center md:justify-start">
                            <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-white hover:bg-orange-50 rounded-full flex items-center justify-center text-orange-700 hover:text-orange-900 transition-all hover:scale-110 border border-amber-200">
                                <FaInstagram size={16} />
                            </a>
                            <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-white hover:bg-orange-50 rounded-full flex items-center justify-center text-orange-700 hover:text-orange-900 transition-all hover:scale-110 border border-amber-200">
                                <FaFacebookF size={16} />
                            </a>
                            <a href="tel:+911234567890" className="w-8 h-8 md:w-10 md:h-10 bg-white hover:bg-orange-50 rounded-full flex items-center justify-center text-orange-700 hover:text-orange-900 transition-all hover:scale-110 border border-amber-200">
                                <FaPhone size={14} />
                            </a>
                            <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-white hover:bg-orange-50 rounded-full flex items-center justify-center text-orange-700 hover:text-orange-900 transition-all hover:scale-110 border border-amber-200">
                                <FaMapMarkerAlt size={14} />
                            </a>
                        </div>
                    </div>

                    {/* MIDDLE - Quick Links */}
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-semibold text-amber-800 mb-4">Quick Links</h3>
                        {/* Horizontal Line Below Quick Links */}
                        <div className="border-t border-amber-200 mt-6 pt-4">
                        </div>
                        <div className="space-y-2">
                            {['Home', 'Menu', 'About', 'Contact'].map((link) => (
                                <a
                                    key={link}
                                    href={`#${link.toLowerCase()}`}
                                    className="block text-base text-amber-900 hover:text-orange-700 transition-colors"
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT - Information */}
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-semibold text-amber-800 mb-4">Information</h3>
                        {/* Horizontal Line Below Quick Links */}
                        <div className="border-t border-amber-200 mt-6 pt-4">
                        </div>
                        <div className="space-y-2">
                            {['Privacy Policy', 'Terms/condition'].map((link) => (
                                <a
                                    key={link}
                                    href={`#${link.toLowerCase().replace('/', '-')}`}
                                    className="block text-base text-amber-900 hover:text-orange-700 transition-colors"
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Centered */}
                <div className="text-center space-y-4">

                    {/* Copyright */}
                    <div>
                        <p className="text-base md:text-lg text-amber-900 font-medium">
                            © MOHITES FARSAN & SWEETS {currentYear}
                        </p>
                        <p className="text-sm text-amber-800 mt-1">
                            Serving authentic taste since 1985
                        </p>
                    </div>

                    {/* Back to Top */}
                    <div>
                        {/* Back to Top Floating Button */}
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="fixed bottom-5 right-5 w-11 h-11 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-lg hover:bg-orange-600 transition-all z-50"
                        >
                            ↑
                        </button>


                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-orange-100 py-1 border-t border-amber-200 m-0">
                <div className="container mx-auto px-4">
                    <p className="text-center text-sm text-amber-900">
                        Made with ❤️ in India | FSSAI Certified
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;