import React from 'react';

//import data
import {nav} from '../data';

const NavMobile = ({navMobile}) => {
  return (
    <div className={`${navMobile ? 'min-h-screen' : 'min-h-0'} lg:hidden w-full bg-neutral-500 fixed top-0 left-0 right-0 -bottom-12 -z-10 overflow-hidden transition-all h-0`}>
      <ul className='w-full h-full flex flex-col justify-center items-center gap-y-8'>
        {nav.map((item, idx) => {
          return (
            <li key={idx} >
              <a
                className='text-white text-body-md' 
                href={item.href}
              >
              {item.name}
              </a>
            </li>
          );
        })}
        <li>
          {/* buttons */}
          {/*<div className='-mt-44 flex justify-center gap-x-8'>*/}
            <a href='https://api.whatsapp.com/send?phone=555481420633&text=Ola+Tudo+Bem?' className='btn btn-lg btn-primary'>Fale Conosco</a>
            {/*<button>Sign up</button>*/}
        </li>
      </ul>
    </div>
  );
};

export default NavMobile;
