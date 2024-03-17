import React from 'react';

//import data
import { community } from '../data';

// import components
import  CommunitySlider  from '../components/CommunitySlider';

const Community = () => {
  // destructure community data
  const { icon, title, testimonials } = community;
  return (
    <section className='section relative pt-[140px]' id='community'>
        <div className='flex lg:flex-row flex-col justify-around mx-10'>
          {/* section title */}
          <div className='section-title-group lg:min-w-[fit-content] px-4 lg:px-0 lg:ml-0 mx-auto lg:mx-12'
            data-aos='fade-up'
            data-aos-offset='200'
            data-aos-delay='200'
          >
            <img src={icon} alt='' />
            <h2 className='h2 section-title'>
              {title}
              <span className='text-primary-400'>.</span>
            </h2>
          </div>
          {/* slider */}
          <div className='relative lg:w-[70%] lg:top-0'
            data-aos='fade-left'
            data-aos-offset='200'
            data-aos-delay='300'
          >
            <CommunitySlider testimonials={testimonials} />
          </div>
        </div>
    </section>
  );
};

export default Community;
