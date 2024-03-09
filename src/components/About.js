import React from 'react';

// import data
import { about } from '../data';

// import icons
import { IoIosArrowDroprightCircle } from 'react-icons/io';

const About = () => {
  //estrutura about data
  const { title, subtitle1, subtitle2, subtitle3, subtitle21, icon, link, btnText } = about;

  return (
    <section className='pt-[80px] md:pt-[110px] lg:pt-[140px]' id='about'>
      <div className='container mx-auto px-[20px] lg:px-[135px]'>
        {/* section title */}
        <div 
          className='section-title-group justify-start'
          data-aos='fade-up'
          data-aos-delay='100'
        >
          <img src={icon} alt='' />
          <h2 className='h2 section-title'>
            {title} <span className='text-primary-400'>.</span>
          </h2>
        </div>
        {/* subtitle 1 */}
        <p 
          className='md:text-body-md mb-12'
          data-aos='fade-up'
          data-aos-delay='200'
        >
          <b>Nós, apicultores,</b> acreditamos que criar abelhas é a nossa nossa contribuição com o universo e um compromisso que ultrapassa a produção de mel. Se é verdade que somos o que comemos, produzir um alimento que gera <b>saúde e bem estar</b> faz toda a diferença.
          {/*subtitle1*/}
        </p>
        {/* subtitle 2.1 */}
        <p 
          className='md:text-body-md mb-8'
          data-aos='fade-up'
          data-aos-delay='300'
        >
          <b>Somos apicultores </b>
           por admirarmos este animal magnífico, de mais de 100 milhões de anos, socialmente organizado e fundamental agente de polinização, ao buscar pólen e nectar no vai e vem incansável de suas visitas às flores.
          {/*subtitle2*/}
        </p>
        {/* subtitle 2.2*/}
        <p 
          className='md:text-body-md mb-8'
          data-aos='fade-up'
          data-aos-delay='300'
        >
          <b>Somos responsáveis</b>
          , proporcionamos às abelhas as melhores condições de conforto e proteção, para que façam o que melhor sabem, aproveitando a exuberante natureza da <b>Serra Gaúcha brasileira</b>, criadas livres e protegidas.
          {/*subtitle21*/}
        </p>
        {/* subtitle 3 */}
        <p 
          className='md:text-body-md mb-8'
          data-aos='fade-up'
          data-aos-delay='300'
        >
          <b>Abelhas são seres únicos;</b> O ser humano, que ao longo do tempo, domesticou os mais diversos animais, mas jamais conseguiu fazer o mesmo com este singelo inseto. São seres livres e permaneceram <b>selvagens e indomáveis</b>. Aprendemos a lidar e aplicar as boas técnicas da apicultura, mas elas nunca abdicaram de seu instinto selvagem. Desta percepção, nasce o nosso nome, “O mel Selvagem”
          {/*subtitle3*/}
        </p>
        {/* link */}
        <div
          data-aos='fade-up'
          data-aos-delay='400'
        >
          <a
          className='link flex items-center gap-x-2 hover:gap-x-4 transition-all' 
          href={link}>
            {btnText}
            <IoIosArrowDroprightCircle className='text-2xl'/>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
