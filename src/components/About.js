import React from 'react';

// import data
import { about } from '../data';

// import icons
import { IoIosArrowDroprightCircle } from 'react-icons/io';

const About = () => {
  //estrutura about data
  const { title, icon, link, btnText } = about;

  return (
    <section className='section py-[120px]' id='about'>
      <div className='container mx-auto px-[20px] lg:px-[105px]'>
        {/* section title */}
        <div 
          className='section-title-group justify-start'
          data-aos='fade-up'
          data-aos-delay='100'
        >
          <img src={icon} alt='' />
          <h2 className='h2 section-title'>
            Sobre nosso ofício<span className='text-primary-400'>.</span>
          </h2>
        </div>

        {/* subtitle 2 */}
        <p 
          className='md:text-body-md mb-8 text-justify'
          data-aos='fade-up'
          data-aos-delay='200'
        >
          <b>Bem-vindo ao Apiário Mel Selvagem</b>, onde a apicultura é mais do que uma profissão, é uma missão de cuidado e respeito pela natureza. Como apicultores dedicados, enxergamos as abelhas não apenas como produtoras de mel, mas também como guardiãs vitais do ecossistema.
          {/*subtitle2*/}
        </p>

        {/* subtitle 3*/}
        <p 
          className='md:text-body-md mb-8 text-justify'
          data-aos='fade-up'
          data-aos-delay='200'
        >
          Somos movidos pela admiração por esses seres magníficos, que com sua organização social exemplar, desempenham um papel crucial na polinização das plantas, contribuindo diretamente para a preservação da vida em nosso planeta. Desde tempos imemoriais, as abelhas têm sido aliadas da natureza, e nós as honramos fornecendo-lhes um ambiente natural e próspero.
          {/*subtitle 3*/}
        </p>

        {/* subtitle 4 */}
        <p 
          className='md:text-body-md mb-8 text-justify'
          data-aos='fade-up'
          data-aos-delay='200'
        >
          No Apiário Mel Selvagem, nossas abelhas são criadas em liberdade, em meio ao exuberante bioma da Serra Gaúcha. Aqui, elas têm acesso às melhores condições de bem-estar, permitindo que expressem todo o seu potencial na produção de mel e própolis de qualidade excepcional.
          {/*subtitle 4*/}
        </p>

        {/* subtitle 5 */}
        <p 
          className='md:text-body-md mb-8 text-justify'
          data-aos='fade-up'
          data-aos-delay='200'
        >
          Reconhecemos que, ao longo da história, muitos animais foram domesticados pelo ser humano, mas as abelhas permaneceram selvagens, mantendo sua independência e liberdade. Deste reconhecimento, surge nosso batismo, “Apiário Mel Selvagem”.
          <br/>Nosso trabalho consiste em colaborar com elas, respeitando sua natureza e aprendendo com suas técnicas ancestrais.{/*subtitle 5*/}
        </p>

        {/* subtitle 6 */}
        <p 
          className='md:text-body-md mb-8'
          data-aos='fade-up'
          data-aos-delay='200'
        >
          Assim, convidamos você a compartilhar nossa paixão pela apicultura sustentável e pelos produtos naturais de alta qualidade que ela proporciona. No Apiário Mel Selvagem, cada frasco de mel é um testemunho do nosso compromisso com a natureza e com um mundo melhor.
          {/*subtitle 6*/}
        </p>

        {/* subtitle 7 */}
        <p 
          className='md:text-body-md mb-8'
          data-aos='fade-up'
          data-aos-delay='200'
        >
          Seja bem-vindo à nossa jornada!
        </p>

        {/* link */}
        <div
          data-aos='fade-up'
          data-aos-delay='200'
        >
          <a
          className='link flex items-center gap-x-2 hover:gap-x-4 transition-all' 
          href={link} target='_blank'>
            {btnText}
            <IoIosArrowDroprightCircle className='text-2xl'/>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
