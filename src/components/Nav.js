import React from 'react';

//import data
import {nav} from '../data';
import { RiWindowsFill } from 'react-icons/ri';

function autoScroll(id){
  const element = document.getElementById(id);
  window.scrollTo({
    top: element.offsetTop,
    behavior: 'smooth'
  });
}

const Nav = () => {
  return (
    <nav className='hidden lg:flex'>
      <ul className='flex text-white gap-x-8'>
        {nav.map((item, idx) => {
          return <li key={idx}>
            <a 
              className='hover:text-primary-500'
              // href={'#'+item.href}
              onClick={() => autoScroll(item.href)}
            >
              {item.name}
            </a>
          </li>
        })}
      </ul>
    </nav>
  );
};

export default Nav;
