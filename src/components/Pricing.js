import React from 'react';

// import data
import { pricing } from '../data';

// import components
import ProductCards from './ProductCards';

const Pricing = () => {
  //destructure pricing data
  const {icon, title, plans} = pricing;
  return (
    <section className='section py-[120px] pb-0' id='pricing'>
      {/* section title */}
      <div className='section-title-group max-w-[540px] mx-auto px-4 lg:px-0' 
          data-aos='fade-right'
          data-aos-delay='200' 
      >
        <img src={icon} alt=''/>
        <h2 className='h2'>
          {title}<span className='text-primary-400'>.</span>
        </h2>
      </div>
      {/* plan pricing */}
      <ProductCards plans={plans}/>
    </section>
  );
};

export default Pricing;
