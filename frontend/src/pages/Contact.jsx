import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div className="flex flex-col items-center text-[#262626] py-16">
      
      {/* Title Section */}
      <h1 className="text-3xl font-bold text-primary mb-8">Contact Us</h1>

      {/* Contact Information */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
        
        {/* Image Section (Further Reduced Size) */}
        <img 
          className="w-2/3 md:w-1/4 max-w-[400px] rounded-lg shadow-md" 
          src={assets.contact_image} 
          alt="Contact GlowNepal" 
        />

        {/* Info Section */}
        <div className="flex flex-col gap-5 text-left md:w-3/4">
          
          {/* Office Info */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Our Office</h2>
            <p className="text-gray-500 mt-2">GlowNepal Beauty & Salon <br /> 123 Main Street, Kathmandu, Nepal</p>
            <p className="text-gray-500 mt-1">📞 +977 9812345678</p>
            <p className="text-gray-500">✉️ support@glownepal.com</p>
          </div>

          {/* Careers Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Careers at GlowNepal</h2>
            <p className="text-gray-500 mt-2">Join our team and help redefine beauty and wellness.</p>
            <button 
              className="bg-primary text-white px-6 py-2 rounded-full font-medium mt-3 hover:bg-opacity-90 transition-all"
            >
              Explore Jobs
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
