import React from 'react';

// import footer data
import { footer } from '../data';

const currentYear = new Date().getFullYear();

const Footer = () => {
  //estrutura footer data
  const { logo, copyrightText } = footer;
  return (
    <footer className='bg-neutral-500 h-[130px] px-[20px]'>
      <div className='container mx-auto h-full flex justify-between items-center md:items-center'
        data-aos='fade-up'
        data-aos-delay='200'
      >
        {/* logo */}
        <a href='#'>
          <img className='h-[60px] min-w-[60px] lg:h-[90px] ' src={logo} alt=''/>
        </a>
        {/* texto footer */}
        <p className='text-neutral-300 text-sm mx-6'>{copyrightText + currentYear + '.'}</p>
      </div>
    </footer>
  );
};

export default Footer;
