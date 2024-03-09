import React from 'react';

// import footer data
import { footer } from '../data';

const currentYear = new Date().getFullYear();

const Footer = () => {
  //estrutura footer data
  const { logo, copyrightText } = footer;
  return (
    <footer className='bg-neutral-500 h-[125px] md:h-[195px] px-[20px]'>
      <div className='container mx-auto h-full flex justify-between items-center md:items-end md:pb-[50px]'
        data-aos='fade-up'
        data-aos-delay='200'
      >
        {/* logo */}
        <a href='#'>
          <img className='h-[70px]' src={logo} alt=''/>
        </a>
        {/* texto footer */}
        <p className='text-neutral-300 text-sm'>{copyrightText + currentYear + '.'}</p>
      </div>
    </footer>
  );
};

export default Footer;
