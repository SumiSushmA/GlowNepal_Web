import React from 'react';
import { Link } from 'react-router-dom';
import { serviceData } from '../assets/assets';

const ServicesMenu = () => {
    return (
        <div id='services' className='flex flex-col items-center gap-6 py-16 text-[#262626]'>
            <h1 className='text-3xl font-bold'>Find by Service</h1>
            <p className='w-full sm:w-2/3 text-center text-base text-gray-600'>
                Browse through our extensive list of professional beauty and salon services, and book your appointment hassle-free.
            </p>
            <div className='flex justify-center flex-wrap gap-8 mt-6'>
                {serviceData.map((item, index) => (
                    <Link 
                        to={`/stylists/${item.service}`} 
                        className='flex flex-col items-center text-sm cursor-pointer hover:scale-105 transition-all' 
                        key={index}
                    >
                        <img className='w-20 sm:w-24' src={item.image} alt={item.service} />
                        <p className='mt-2 font-medium'>{item.service}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ServicesMenu;



