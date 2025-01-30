import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-100 px-6 md:px-12 lg:px-20 py-10 mt-20 text-gray-700'>
      
      {/* Main Flex Container */}
      <div className='flex flex-col md:flex-row justify-between items-start gap-8'>

        {/* Left Section - Logo & About */}
        <div className='flex-1'>
        <h3 className='text-lg font-semibold mb-3'>GlowNepal</h3>
        {/* <img className='mb-4 w-20' src={assets.logo} alt="GlowNepal Logo" /> */}
          <p className='text-sm leading-2 max-w-xs'>
            GlowNepal is your trusted beauty and salon appointment booking platform. 
            We connect you with professional stylists, makeup artists, 
            and beauty experts to bring you the best services with ease and convenience.
          </p>
        </div>

        {/* Middle Section - Company Links */}
        <div className='flex-1'>
          <h3 className='text-lg font-semibold mb-3'>Company</h3>
          <ul className='flex flex-col gap-2 text-sm'>
            <li className='hover:text-primary cursor-pointer'>Home</li>
            <li className='hover:text-primary cursor-pointer'>About Us</li>
            <li className='hover:text-primary cursor-pointer'>Services</li>
            <li className='hover:text-primary cursor-pointer'>Privacy Policy</li>
          </ul>
        </div>

        {/* Right Section - Contact Info */}
        <div className='flex-1'>
          <h3 className='text-lg font-semibold mb-3'>Get in Touch</h3>
          <ul className='flex flex-col gap-2 text-sm'>
            <li className='flex items-center gap-2'><span>📞</span> +977-9812345678</li>
            <li className='flex items-center gap-2'><span>📧</span> support@glownepal.com</li>
      
          </ul>
        </div>

      </div>

      {/* Bottom Section - Copyright */}
      <div className='mt-8 text-center text-sm'>
        <hr className='border-gray-300 mb-4' />
        <p>© 2025 GlowNepal.com - All Rights Reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;

