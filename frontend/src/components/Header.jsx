import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row items-center bg-primary rounded-lg px-6 md:px-12 lg:px-20 py-10 md:py-16 lg:py-20'>

            {/* Left Side - Text Content */}
            <div className='md:w-1/2 flex flex-col items-start gap-6 text-white'>
                <h1 className='text-4xl md:text-5xl font-bold leading-tight'>
                    Book an Appointment <br /> With Professional Stylists
                </h1>
                <p className='text-base md:text-lg opacity-80'>
                    Browse through our list of expert stylists and book your beauty service hassle-free.
                </p>
                <a href='#services' className='flex items-center gap-2 bg-white px-6 py-3 rounded-full text-[#595959] font-medium text-lg hover:scale-105 transition-all'>
                    Book Appointment <img className='w-4' src={assets.arrow_icon} alt="Arrow Icon" />
                </a>
            </div>

            {/* Right Side - Image */}
            <div className='md:w-1/2 flex justify-end'>
                <img className='w-full max-w-md md:max-w-lg rounded-lg' src={assets.header_img} alt="GlowNepal Header Image" />
            </div>
        </div>
    );
};

export default Header;
