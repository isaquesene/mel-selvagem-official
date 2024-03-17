import React from 'react';

// import data
import { banner } from '../data';
 
const Banner = () => {
  // estrutura banner
  const { titlePart1, titlePart2, subtitle, social_media, textBtn, link} = banner;
  
  var icon_apear = 700;
  
  return (
    <section className='bg-neutral-500 h-screen md:h-[720px]' id='banner'> {/*Diminuição da alturado baner para poder puxar o conteúdo mais pra cima e ma*/}
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full relative -space-x-48 lg:-space-x-24'>
          {/* text */}
          <div className='text-white flex-1 z-10 pl-6 lg:pl-0'>
            <h1 className='h1 text-white mb-8' data-aos='fade-down' data-aos-delay='500'>
              {titlePart1} <br/> 
              <span className='text-primary-400'>{titlePart2}</span>
            </h1>
            <p className='max-w-[415px] text-body-md lg:text-body-lg mb-8' data-aos='fade-down' data-aos-delay='600'>{subtitle}</p>
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
            <button className='btn btn-sm lg:btn-lg btn-secondary' data-aos='fade-down' data-aos-delay='700'>
              <a href={link}/>
              {textBtn}
            </button>
          </div>
          {/* imagem */}
          <div 
            className='w-full h-full bg-banner br-cover br-right lg:bg-center bg-no-repeat flex-1 bg-left'
            data-aos='fade-left' 
            data-aos-delay='900'
          >
            {/* imagem colheita */}
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default Banner;
