import React from 'react';

//import data
import { workouts } from '../data';

//import components
import WorkoutSlider from '../components/WorkoutSlider';

const Workouts = () => {
  //estrutura workout data
  const { title, icon, content} = workouts;

  return (
    <section className='section pt-[140px] pb-0' id='workouts'>
      <div className='container mx-auto px-[20px] lg:px-[135px]'>
        {/* section title */}
        <div className='section-title-group max-w-[540px] mx-auto px-4 lg:px-0'
          data-aos='fade-up' data-aos-delay="200"
        >
          <img src={icon} alt='' />
          <h2 className='px-5 h2 section-title'>
            {title} <span className='text-primary-400'>.</span>
          </h2>
        </div>
        <div data-aos='fade-up' data-aos-delay="300">
        {content.map((paragraph, index) => (
                <p
                className='md:text-body-md mb-8 text-justify'
                data-aos='fade-up'
                data-aos-delay='200'
                key={index}>
                  {paragraph}
                </p>
              ))}
        <p 
            className='md:text-body-md mb-8 text-justify'
            data-aos='fade-up'
            data-aos-delay='200'
          >
          </p>
        </div>
      </div>
    </section>
  );
};

export default Workouts;
