import React, { useState, useEffect } from 'react';
import { banner } from '../data';
import { autoScroll } from '../tools';

const Banner = () => {
  const { titlePart1, titlePart2, subtitle1, social_media, textBtn } = banner;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className='relative bg-neutral-500 h-screen' id='banner'>
      {/* Background div with bg-rs image */}
      <div 
        className={`absolute bg-rs bg-no-repeat bg-left-top bg-smaller bg-neutral-500 h-screen -mt-20 ${
          windowWidth <= 769 ? 'absolute top-0 left-0 w-screen h-screen' : 'w-full h-full flex-1'
        }`}
        data-aos='fade-right' 
        data-aos-delay='900'
      >
        {windowWidth <= 769 && <div className="absolute inset-0 bg-black opacity-65"></div>}
      </div>

      {/* Main content container */}
      <div className='md:container md:mx-auto h-full'>
        <div className='flex items-center h-full relative lg:-space-x-24 w-full px-[10%] md:p-0'>
          {/* Left side content */}
          <div className='text-white z-10 lg:pl-0 flex-3 md:flex-1'>
            {/* Title */}
            <h1 className='h1 text-white mb-8' data-aos='fade-down' data-aos-delay='500'>
              {titlePart1} <br /> 
              <span className='text-primary-400'>{titlePart2}</span>
            </h1>

            {/* Subtitle */}
            <p className='max-w-[415px] mb-8' data-aos='fade-down' data-aos-delay='600'>
              {subtitle1}
            </p>

            {/* Social media links */}
            <ul className='flex gap-x-8 mb-8'>
              {social_media.map((item, index) => (
                <li key={index} className='hover:scale-110'>
                  <a href={item.link} target='_blank' rel='noopener noreferrer'>
                    <img
                      src={item.logo}
                      alt={item.alt}
                      width='40px'
                      data-aos='fade-down'
                      data-aos-delay={700 + index * 250}
                    />
                  </a>
                </li>
              ))}
            </ul>

            {/* Button */}
            <a 
              onClick={() => autoScroll('pricing', 0)} 
              className='btn btn-sm lg:btn-lg btn-secondary max-w-[200px] cursor-pointer' 
              data-aos='fade-down' 
              data-aos-delay='700'
            >
              {textBtn}
            </a>
          </div>

          {/* Right side background image */}
          <div 
            className={` ${windowWidth <= 769 ? 'bgrs-bannerMob' : 'bg-bannerMob'} bg-cover bg-no-repeat bg-left bg-center ${
              windowWidth <= 769 ? 'absolute top-0 left-0 w-screen h-screen' : 'w-full h-full flex-1'
            }`}
            data-aos='fade-left' 
            data-aos-delay='900'
          >
            {windowWidth <= 769 && <div className="absolute inset-0 bg-black opacity-65"></div>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
