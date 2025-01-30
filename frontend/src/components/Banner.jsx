import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Banner = () => {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col md:flex-row items-center bg-primary rounded-lg px-6 sm:px-10 md:px-16 lg:px-24 py-8 md:py-12 lg:py-14 mt-12 md:mt-16'>
            
            {/* Left Side */}
            <div className='md:w-3/5 flex flex-col gap-5 text-white text-center md:text-left'>
                <h1 className='text-3xl md:text-4xl font-bold leading-tight md:leading-snug'>
                    Book Your Beauty Session <br /> With 100+ Professional Stylists
                </h1>
                <button 
                    onClick={() => { navigate('/login'); scrollTo(0, 0); }} 
                    className='bg-white text-lg text-[#595959] px-6 py-3 rounded-full font-medium mt-2 hover:scale-105 transition-all'
                >
                    Create Account
                </button>
            </div>

            {/* Right Side - Adjusted Image Size & Spacing */}
            <div className='md:w-2/5 flex justify-center md:justify-end'>
                <img className='w-3/4 max-w-[250px] md:max-w-[280px] lg:max-w-[300px] rounded-lg' 
                     src={assets.appointment_img} 
                     alt="Appointment Booking Illustration" />
            </div>
        </div>
    );
};

export default Banner;


