import React from 'react';

// import data 
import { faq } from '../data';

// import components
import Accordion from '../components/Accordion';

const Faq = () => {
  // destrucuture faq data
  const { icon, title, accordions } = faq;
  return (
    <section className='section pt-[480px] lb:pt-[280px]'>
      <div className='max-w-[768px] mx-auto lg:bg-faq bg-no-repeat bg-custom bg-center lg:h-[1160px] lg:pt-6 bg-pink-100'>
        {/* section title */}
        <div>
          <img className='lg:hidden' src={icon} alt=''/>
          <h2 className='h2 section-title lg:mt-[100px]'>
            {title}
            <span className='text-primary-400'>?</span>
          </h2>
        </div>
        {/* accordion list */}
        <div>
          {accordions.map((accordion, idx)=>{
            return <Accordion accordion={accordion} key={idx} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
