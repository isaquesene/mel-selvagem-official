import React from 'react';

// import data
import { about } from '../data';

// import icons
import { IoIosArrowDroprightCircle } from 'react-icons/io';

const About = () => {
  //estrutura about data
  const { title, subtitle1, subtitle2, subtitle3, subtitle21, icon, link } = about;

  return (
    <section className='py-[80px] md:py-[110px] lg:pt-[140px] lg:pb-[180px]'>
      <div className='container mx-auto px-[20px] lg:px-[135px]'>
        {/* section title */}
        <div 
          className='section-title-group justify-start'
          data-aos='fade-up'
          data-aos-delay='100'
        >
          <img src={icon} alt='' />
          <h2 className='h2 section-title'>
            {title} <span className='text-primary-400'>.</span>
          </h2>
        </div>
        {/* subtitle 1 */}
        <p 
          className='md:text-body-md mb-12'
          data-aos='fade-up'
          data-aos-delay='200'
        >
          {subtitle1}
        </p>
        {/* subtitle 2.1 */}
        <p 
          className='md:text-body-md mb-8'
          data-aos='fade-up'
          data-aos-delay='300'
        >
          <span className='text-primary-400'>Somos</span>
          {subtitle2}
        </p>
        {/* subtitle 2.2*/}
        <p 
          className='md:text-body-md mb-8'
          data-aos='fade-up'
          data-aos-delay='300'
        >
          <span className='text-primary-400'>Somos</span>
          {subtitle21}
        </p>
        {/* subtitle 3 */}
        <p 
          className='md:text-body-md mb-8'
          data-aos='fade-up'
          data-aos-delay='300'
        >
          {subtitle3}
        </p>
        {/* link */}
        <div
          data-aos='fade-up'
          data-aos-delay='400'
        >
          <a
          className='link flex items-center gap-x-2 hover:gap-x-4 transition-all' 
          href='#'>
            {link}
            <IoIosArrowDroprightCircle className='text-2xl'/>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
