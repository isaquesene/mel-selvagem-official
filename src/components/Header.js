import React, { useState, useEffect} from 'react';

//import header data
import { header } from '../data';

//import components
import Nav from '../components/Nav';
import NavMobile from '../components/NavMobile';

//import icons
import { Ri24HoursFill, RiCloseFill, RiMenu4Fill } from 'react-icons/ri';

const Header = () => {
  //header state
  const [isActive, setIsActive] = useState(false);

  //nav mobile state
  const [navMobile, setNavMobile] = useState(false);

  //scroll evento
  useEffect(() => {
    window.addEventListener('scroll', () =>{
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false);
    });
  });

  //estrutura header
  const { logo, btnLoginText, btnSignupText, link } = header;

  return (
    <header className={`${isActive ? 'bg-neutral-500 py-[16px]' : 'bg-transparent py-[20px]'} fixed z-30 left-0 right-0 mx-auto flex justify-between items-center px-[20px] lg:px-[80px] transition-all duration-300`}>
      {/* logo */}
      <a href=''>
        <img className='h-[70px]' src={logo} alt=''/>
        {/*<p className='text-white h-[30px]'>Mel selvagem</p>*/}
      </a>
      {/* nav inicial hidden*/}
      <Nav />
      {/* btn inicializa hidden */}
      <div className='hidden lg:flex space-x-4'>
        <a href={link} className='btn btn-sm btn-primary'>{btnLoginText}</a>
        {/*<button>{btnSignupText}</button>*/}
      </div>
      {/* nav menu btn - hidden */}
      <div
        onClick={() => setNavMobile(!navMobile)} 
        className='lg:hidden absolute right-4'>
          {
            navMobile ? ( <RiCloseFill className='text-primary-400 text-3xl cursor-pointer' /> ) :
            ( 
              <RiMenu4Fill className='text-primary-400 text-3xl cursor-pointer'/>
            )}
      </div>
      {/* nav mobile - hidden */}
      <NavMobile navMobile={navMobile} setNavMobile={setNavMobile}/>
    </header>
  );
};

export default Header;
