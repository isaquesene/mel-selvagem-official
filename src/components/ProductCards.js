import React from 'react';

const ProductCards = ({plans}) => {
    return (    
        <div className='container mx-auto' data-aos='fade-up' data-aos-dalay='200' data-aos-offset='200'>
            <div className='flex justify-center items-center flex-wrap'>
                {plans.map((plan) => {
                    return (
                        <div className="max-w-sm rounded overflow-hidden shadow-md card border-2 m-2 p-3 h-[500px] w-[290px] lg:w-300 max-w-[200px] text-center box-border" id={plan.id}>

                                <div className='relative w-full flex items-center overflow-hidden card-image'>
                                    <img className="relative w-full" src={plan.image} alt={plan.name}/>
                                </div>

                                <div className="font-bold h5 mt-6">{plan.name}</div>

                            {/*Hidden part*/}
                            <div className="p-2 pt-4">    
                                <p className="h3 center">
                                    <span className='text-primary-400 h5'>R$ </span>{plan.price}
                                </p>
                                <div className ="p-1 pt-4">
                                    {plan.tags.map((tag) => {
                                        return (
                                            <span className="inline-block bg-neutral-200 rounded-full px-3 py-1 text-xs md:text-sm font-semibold text-gray-700 mr-2 mb-2">
                                                {tag}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    );    
                })}
            </div>
        </div>
    );
}

export default ProductCards;