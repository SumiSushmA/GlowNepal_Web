import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className='px-6 md:px-12 lg:px-20 py-10'>

      {/* Title Section */}
      <div className='text-center text-3xl font-semibold text-primary mb-12'>
        <p>ABOUT <span className='text-primary'>US</span></p>
      </div>

      {/* About Section */}
      <div className='flex flex-col md:flex-row items-center gap-12'>
        <img 
          className='w-full md:w-[320px] lg:w-[280px] rounded-lg shadow-md' 
          src={assets.about_image} 
          alt="About GlowNepal" 
        />
        <div className='flex flex-col gap-6 text-gray-600 text-[15px] md:w-3/5 leading-relaxed'>
          <p>Welcome to <b>GlowNepal</b>, your trusted beauty and salon appointment booking platform. We bring together top stylists, beauty experts, and wellness professionals to provide a seamless booking experience.</p>
          <p>At GlowNepal, we believe that self-care and beauty services should be accessible and hassle-free. Our platform is designed to connect you with professional stylists who specialize in hair, makeup, skincare, and wellness services, all at your convenience.</p>
          <b className='text-gray-800 text-lg'>Our Vision</b>
          <p>Our vision at <b>GlowNepal</b> is to revolutionize the beauty and wellness industry by making expert services more accessible. Whether you're looking for a stunning makeover, a relaxing spa session, or professional styling for an event, we ensure a smooth and effortless booking experience.</p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className='text-center text-2xl font-semibold text-primary mt-16 mb-6'>
        <p>WHY <span className='text-primary'>CHOOSE US</span></p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700'>
        <div className='border px-8 py-10 rounded-lg text-center hover:bg-primary hover:text-white transition-all duration-300 shadow-md'>
          <b className='block text-lg mb-2'>EFFICIENCY:</b>
          <p>Seamless online booking with instant appointment confirmation.</p>
        </div>
        <div className='border px-8 py-10 rounded-lg text-center hover:bg-primary hover:text-white transition-all duration-300 shadow-md'>
          <b className='block text-lg mb-2'>CONVENIENCE:</b>
          <p>Find top-rated beauty professionals near you and book appointments at your preferred time.</p>
        </div>
        <div className='border px-8 py-10 rounded-lg text-center hover:bg-primary hover:text-white transition-all duration-300 shadow-md'>
          <b className='block text-lg mb-2'>PERSONALIZATION:</b>
          <p>Receive tailored beauty service recommendations based on your preferences.</p>
        </div>
      </div>

    </div>
  );
};

export default About;

