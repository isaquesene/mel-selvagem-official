import React from 'react';

const ProductCards = ({plans}) => {
    return (    
        <div className='container mx-auto' data-aos='fade-up' data-aos-dalay='200' data-aos-offset='200'>
            <div className='flex justify-center items-center flex-wrap'>
                {plans.map((plan) => {
                    var preco = plan.price.toString().split('.');
                    return (
                        <div className="max-w-sm rounded overflow-hidden shadow card border-2 m-2 p-3 min-h-[400px] w-[300px] min text-center box-border sm:mt-12" 
                        id={plan.id}>

                                <div className='relative w-full flex items-center overflow-hidden card-image'>
                                    <img className="relative w-full" src={plan.image} alt={plan.name}/>
                                </div>

                                <div className="font-bold h5 mt-6">{plan.name}</div>

                            {/*Hidden part*/}
                            <div className="p-2 pt-4">    
                                {/*<p className="h3 center">
                                    <span className='text-primary-400 h5'>R$ </span>{preco[0]}<span className='h6'>{',' + (preco[1] === undefined ? '00' : preco[1])}</span>
                                </p>*/}
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
                            <a 
                            className='btn btn-primary mt-4 w-full md:h-0 h-[50px] buy-now-btn overflow-hidden max-w-[70%] mx-auto rounded'
                            href={`https://melselvagem.lojaintegrada.com.br/`}>Garanta já o produto</a>
                        </div>
                    );    
                })}
            </div>
        </div>
    );
}

export default ProductCards; 