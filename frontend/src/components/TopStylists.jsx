import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContextProvider';

const TopStylists = () => {
    const navigate = useNavigate();
    const { stylists } = useContext(AppContext);

    return (
        <div className='flex flex-col items-center gap-6 my-16 text-[#262626]'>
            <h1 className='text-3xl font-bold'>Top Stylists to Book</h1>
            <p className='w-full sm:w-2/3 text-center text-base text-gray-600'>
                Browse through our list of expert stylists for hair, makeup, and skincare services.
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6'>
                {stylists.slice(0, 8).map((item, index) => (
                    <div 
                        key={index}
                        onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0); }} 
                        className='border border-gray-300 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-all shadow-md'
                    >
                        <img className='w-full h-52 object-cover' src={item.image} alt={item.name} />
                        <div className='p-4 text-center'>
                            <p className='text-lg font-semibold'>{item.name}</p>
                            <p className='text-gray-500'>{item.category}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button 
                onClick={() => { navigate('/stylists'); scrollTo(0, 0); }} 
                className='bg-[#EAEFFF] text-gray-700 px-8 py-3 rounded-full font-medium mt-6 hover:bg-blue-100 transition-all'
            >
                View More
            </button>
        </div>
    );
};

export default TopStylists;

