import React, { useState } from 'react';
// import data 
import { faq } from '../data';

// import components
import Accordion from '../components/Accordion';

const Faq = () => {
  // destrucuture faq data
  const { icon, title, accordions } = faq;

  const [openAccordionId, setOpenAccordionId] = useState(null);

  return (
    <section className='section mt-[120px] lg:mt-[100px] lg:pb-0' id='faq'>
      <div className='max-w-[768px] mx-auto lg:bg-faq bg-no-repeat lg:bg-auto-height bg-custom bg-center lg:h-[1100px] lg:pt-6 flex items-center flex-col'>
        {/* section title */}
        <div className='section-title-group justify-start lg:justify-center -space-x-4 lg:max-w-[540px] mx-auto px-4 lg:px-0'
          data-aos='fade-up'
          data-aos-offset='200'
          data-aos-delay='200'
        >
          <img className='lg:hidden' src={icon} alt=''/>
          <h2 className='h2 section-title lg:mt-[100px]'>
            {title}
            <span className='text-primary-400'>!</span>
          </h2>
        </div>
        {/* accordion list */}
        <div className='flex flex-col gap-y-4 px-4'
          data-aos='fade-up'
          data-aos-offset='300'
          data-aos-delay='200'
        >
          {accordions.map((accordion, index) => (
            <Accordion 
              key={index}
              id={index}
              accordion={accordion} 
              isOpen={openAccordionId === index}
              setOpenAccordionId={setOpenAccordionId}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
