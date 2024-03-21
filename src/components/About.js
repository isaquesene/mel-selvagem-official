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
      <div className='container mx-auto px-[20px] lg:px-[135px]'>
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

        {/* subtitle 1 */}
        <p 
          className='md:text-body-md mb-12'
          data-aos='fade-up'
          data-aos-delay='200'
        >
          <b>Bem-vindo ao Mundo Dourado da Apicultura!</b>
          {/*subtitle1*/}
        </p>

        {/* subtitle 2 */}
        <p 
          className='md:text-body-md mb-8'
          data-aos='fade-up'
          data-aos-delay='200'
        >
          Seja bem-vindo ao nosso fascinante universo, onde a natureza se une à tradição e à paixão pela apicultura. No nosso site, você encontrará uma seleção exclusiva dos mais puros e deliciosos méis, colhidos cuidadosamente em nossas colmeias, localizadas em paisagens idílicas.
          {/*subtitle2*/}
        </p>

        {/* subtitle 3*/}
        <p 
          className='md:text-body-md mb-8'
          data-aos='fade-up'
          data-aos-delay='200'
        >
          <b>Nossa missão</b> é trazer para a sua mesa não apenas um mel de alta qualidade, mas uma experiência sensorial única, que resgata o verdadeiro sabor da natureza. Cada gota de mel que produzimos é um tributo ao trabalho árduo das nossas abelhas e ao amor que dedicamos a cada colmeia.
          {/*subtitle 3*/}
        </p>

        {/* subtitle 4 */}
        <p 
          className='md:text-body-md mb-8'
          data-aos='fade-up'
          data-aos-delay='200'
        >
          Explore nossa variedade de méis artesanais, cada um com suas notas distintas e aromas irresistíveis. Do suave e floral ao intenso e robusto, temos algo para todos os paladares. Além disso, nossa linha de produtos inclui não apenas méis puros, mas também cremes, geleias e produtos de cuidados com a pele, todos feitos com o mesmo padrão de excelência.
          {/*subtitle 4*/}
        </p>

        {/* subtitle 5 */}
        <p 
          className='md:text-body-md mb-8'
          data-aos='fade-up'
          data-aos-delay='200'
        >
          Comprar conosco não é apenas adquirir um produto, é se conectar a uma história de dedicação e respeito pela natureza. Nossas abelhas são nossas parceiras e cuidamos delas com o maior carinho, garantindo que cada colheita seja sustentável e benéfica para o meio ambiente.
          {/*subtitle 5*/}
        </p>

        {/* subtitle 6 */}
        <p 
          className='md:text-body-md mb-8'
          data-aos='fade-up'
          data-aos-delay='200'
        >
          Junte-se a nós nesta jornada doce e gratificante. <b className='text-primary-400'>Experimente a verdadeira essência do mel</b> e descubra por que somos apaixonados por apicultura. Seja bem-vindo ao mundo dourado da apicultura - sua jornada sensorial começa aqui!
          {/*subtitle 6*/}
        </p>

        {/* link */}
        <div
          data-aos='fade-up'
          data-aos-delay='200'
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
