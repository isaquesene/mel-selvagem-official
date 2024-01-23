// images
//import Logo from '../src/assets/img/header/logo.svg';
import Logo from '../src/assets/img/header/logoMel.png';
import Manejo1 from '../src/assets/img/workouts/colheita.jpeg';
import Resgate from '../src/assets/img/workouts/colheita2.jpeg';
import Resgate2 from '../src/assets/img/workouts/resgate-2.jpeg';
import Manejo2 from '../src/assets/img/workouts/manejo3.jpeg';
import Manejo3 from '../src/assets/img/workouts/manejo4.jpeg';
import Manejo4 from '../src/assets/img/workouts/manejo5.jpeg';
import Manejo5 from '../src/assets/img/workouts/manejo6.jpeg';
import Manejo6 from '../src/assets/img/workouts/manejo7.jpeg';
import Manejo7 from '../src/assets/img/workouts/manejo8.jpeg';
import Manejo8 from '../src/assets/img/workouts/frascos2.png';
// images
import CommunityImg1 from '../src/assets/img/community/receitas.jpg';
import CommunityImg2 from '../src/assets/img/community/bolo-de-mel-com-frutas.jpg';
import CommunityImg3 from '../src/assets/img/community/biscoitos_de_mel.jpg';
import CommunityImg4 from '../src/assets/img/community/macamel.jpeg.jpg';
import JoinImg from '../src/assets/img/join/frascos2.png';
import JoinImgPix from '../src/assets/img/join/pix.png';
// icons
import UsersIcn from '../src/assets/img/about/icons/users-icn.svg';
import CalendarIcn from '../src/assets/img/workouts/icons/calendar.svg';
import PriceIcn from '../src/assets/img/pricing/icons/price.svg';
import CommunityIcn from '../src/assets/img/community/icons/community-icn.svg';
import QuestionMarkIcn from '../src/assets/img/faq/icons/question-mark.svg';

export const header = {
  logo: Logo,
  btnLoginText: 'Log in',
  btnSignupText: 'Sign Up',
};

export const nav = [
  { name: 'Home', href: '/'},
  { name: 'Sobre nós', href: '/banner' },
  { name: 'Nossa missão', href: '/about' },
  { name: 'Nosso trabalho', href: '/workouts' },
  { name: 'Receitas', href: '/community' },
  { name: 'Perguntas', href: '/faq' },
  { name: 'Produto', href: '/join' },
];

export const banner = {
  titlePart1: 'Do produtor do campo',
  titlePart2: '– para sua mesa.',
  subtitle:
    ' Mel puro, natural e saudável',
  textBtn: 'Garanta aqui',
  img: '',
};

export const about = {
  icon: UsersIcn,
  title: 'Sobre nosso ofício',
  subtitle1:
    ' <b>Nós, apicultores,</b> acreditamos que criar abelhas é a nossa nossa contribuição com o universo e um compromisso que ultrapassa a produção de mel. Se é verdade que somos o que comemos, produzir um alimento que gera <b>saúde e bem estar</b> faz toda a diferença. ',
  subtitle2:
    ' por admirarmos este animal magnífico, de mais de 100 milhões de anos, socialmente organizado e fundamental agente de polinização, ao buscar pólen e nectar no vai e vem incansável de suas visitas às flores.',
  subtitle21:
    ' , proporcionamos às abelhas as melhores condições de conforto e proteção, para que façam o que melhor sabem, aproveitando a exuberante natureza da <b>Serra Gaúcha brasileira</b>, criadas livres e protegidas.',
  subtitle3:
    '<b>Abelhas são seres únicos;</b> O ser humano, que ao longo do tempo, domesticou os mais diversos animais, mas jamais conseguiu fazer o mesmo com este singelo inseto. São seres livres e permaneceram <b>selvagens e indomáveis</b>. Aprendemos a lidar e aplicar as boas técnicas da apicultura, mas elas nunca abdicaram de seu instinto selvagem. Desta percepção, nasce o nosso nome, “O mel Selvagem”.',
  
  link: 'Garanta aqui',
};

export const workouts = {
  icon: CalendarIcn,
  title: 'Manejos no Apiário',
  programs: [
    {
      image: Manejo1,
      name: 'Manejo no Apiário',
    },
    {
      image: Resgate,
      name: 'Resgate de enxame',
    },
    {
      image: Resgate2,
      name: 'Resgate de enxame',
    },
    {
      image: Manejo2,
      name: 'Colheita do mel',
    },
    {
      image: Manejo3,
      name: 'Colheita do mel',
    },
    {
      image: Manejo4,
      name: 'Colheita do mel',
    },
    {
      image: Manejo5,
      name: 'Colheita do mel',
    },
    {
      image: Manejo6,
      name: 'Colheita do mel',
    },
    {
      image: Manejo7,
      name: 'Colheita do mel',
    },
    {
      image: Manejo8,
      name: 'Nossa produção',
    },
  ],
};

export const pricing = {
  icon: PriceIcn,
  title: 'Nosso produto',
  plans: [
    {
      name: 'Basic',
      price: '20',
      list: [
        { name: 'unlimited gym access' },
        { name: '1 training programs' },
        { name: 'free fitness consultation' },
      ],
      delay: 600,
    },
    {
      name: 'Premium',
      price: '35',
      list: [
        { name: 'unlimited gym access' },
        { name: '5 training programs' },
        { name: 'free fitness consultation' },
        { name: 'personal trainer' },
      ],
      delay: 800,
    },
    {
      name: 'Elite',
      price: '49',
      list: [
        { name: 'unlimited gym access' },
        { name: 'all training programs' },
        { name: 'free fitness consultation' },
        { name: 'personal trainer' },
        { name: '50% off drinks' },
      ],
      delay: 1000,
    },
  ],
};

export const community = {
  icon: CommunityIcn,
  title: 'Receitas',
  testimonials: [
    {
      image: CommunityImg1,
      name: 'Bolo integral de Mel.',
      message:
        '“Great location, great price and great, helpful people. What to want more?”',
    },
    {
      image: CommunityImg2,
      name: 'Pão caseiro de Mel.',
      message:
        '“Gymme changed my life. Not only physically but mentally as well. I’m a better mother, and all around better human being because of this gym.”',
    },
    {
      image: CommunityImg3,
      name: 'Biscoitos de Mel.',
      message:
        '“Love these workouts! Trainers are knowledgeable and motivating. Gymme is wonderful!”',
    },
    {
      image: CommunityImg4,
      name: 'Maça assada com Mel.',
      message:
        '“Love these workouts! Trainers are knowledgeable and motivating. Gymme is wonderful!”',
    },
  ],
};

export const faq = {
  icon: QuestionMarkIcn,
  title: 'Curiosidades',
  accordions: [
    {
      question: 'Por que o mel cristaliza?',
      answer:
        'O mel genuíno tem uma tendência À cristalização, causada pela reação do hidrogênio do ar com a frutose que esta presente no mel, produzindo hidreto de frutose, que é sólido.',
    },
    {
      question: 'Como faço para retornar o mel ao estado líquido?',
      answer:
        'Recomendamos a colocação em banho maria, todavia, a temperatura não pode passar de 45° C. Não se deve levar o mel em temperatura mais alta que isto, pois provoca a oxidação do mel (hidróxido metil furfural – HMF), tornando o alimento não adequado ao consumo humano.',
    },
    {
      question: 'Por que a cor do mel pode variar?',
      answer:
        'A cor varia porque s abelhas produzem o mel dependendo do que coletam na natureza. Espécies vegetais diferentes, produzem mel com diferentes cores. A cor do mel é determinada pela quantidade de sais minerais que contém. Quanto mais escuro, mais sais minerais. Por outro lado, quanto mais claro, mas saboroso o mel.',
    },
    {
      question: 'Curiosidades do mel',
      answer:
        '• É um produto utilizado deste a antiguidade para o tratamento de doenças respiratórias e cicatrizantes; \n•  Funciona como um poderoso agente biológico, capaz de dar eliminar microrganismos, como bactérias, fungos, leveduras, vírus, etc. O principal agente bactericida contido no mel é o peróxido de hidrogênio;',
    },
    {
      question: 'Tudo sobre mel selvagem?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'Curiosidades sobre o mel?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
  ],
};

export const join = {
  image: JoinImg,
  title: '30',
  subtitle:
    'Frasco de 500ml.',
    pix: JoinImgPix,
    btnText: 'Peça aqui',
};

export const footer = {
  logo: Logo,
  copyrightText: 'Todos Direitos Reservados. Mel Selvagem © 2024.',
};
