import React, {useState, useEffect} from 'react';

// import data
import { banner } from '../data';
import { autoScroll } from '../tools';

const Banner = () => {
  // estrutura banner
  const { titlePart1, titlePart2, subtitle, subtitle1, social_media, textBtn, link} = banner;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  var icon_apear = 700;

  return (
    <section className='bg-banner bg-cover bg-no-repeat h-screen' id='banner'> {/*Diminuição da alturado baner para poder puxar o conteúdo mais pra cima e ma*/}
      <div className='md:container md:mx-auto h-full'>
        <div className={'flex items-center h-full relative lg:-space-x-24 w-full px-[10%] md:p-0'}>
          {/* text */}
          <div className='text-white z-10  lg:pl-0 flex-3 md:flex-1'>
            <h1 className='h1 text-white mb-8' data-aos='fade-down' data-aos-delay='500'>
              {titlePart1} <br/> 
              <span className='text-primary-400'>{titlePart2}</span>
            </h1>
            {/*<p className='max-w-[415px] text-body-md lg:text-body-lg mb-8' data-aos='fade-down' data-aos-delay='600'>
              {subtitle}
            </p>*/}
            <p className='max-w-[415px] mb-8' data-aos='fade-down' data-aos-delay='600'>
              {subtitle1}
            </p>
            {/* redes sociais */} 
            <ul className='flex gap-x-8 mb-8'>
            {social_media.map((item, index) => {
                return <li key={index} className='hover:scale-110'>
                  <a
                    href={item.link}
                    target="_blank"
                  >
                    <img src={item.logo} alt={item.alt} width="40px"
                    data-aos='fade-down' data-aos-delay={icon_apear += 250}/> {/*Efeito de aparecer um por vez*/} 
                  </a>
                </li>
              })
            }
            </ul>
            {/* botão */}
            <a onClick={() => autoScroll('pricing', 0)} className='btn btn-sm lg:btn-lg btn-secondary max-w-[200px] cursor-pointer' data-aos='fade-down' data-aos-delay='700' target="_blank">
              {textBtn}
            </a>
          </div>
          {/* imagem */}
          <div 
            className={'bg-banner bg-cover bg-no-repeat bg-left bg-center ' + (windowWidth <= 769 ? 
              'absolute top-0 left-0 w-screen h-screen':
              'w-full h-full flex-1')}
            data-aos='fade-left' 
            data-aos-delay='900'
          >
            <div className={(windowWidth <= 769 ? "absolute inset-0 bg-black opacity-65" : "")}></div>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default Banner;
