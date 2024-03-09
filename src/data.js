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
import CommunityImg1 from '../src/assets/img/community/saladamel.jpeg';
import CommunityImg2 from '../src/assets/img/community/17-bolacha-de-mel.jpg';
import CommunityImg3 from '../src/assets/img/community/Costelinha-de-porco-assada-com-mel.jpg';
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
  btnLoginText: 'Fale Conosco',
  link:'https://api.whatsapp.com/send?phone=555481420633&text=Ola+Tudo+Bem?',
  btnSignupText: 'Sign Up',
};

export const nav = [
  { name: 'Home', href: 'banner'},
  { name: 'Nossa missão', href: 'about' },
  { name: 'Nosso trabalho', href: 'workouts' },
  { name: 'Receitas', href: 'community' },
  { name: 'Perguntas', href: 'faq' },
  { name: 'Produto', href: 'join' },
];

export const banner = {
  titlePart1: 'Do produtor do campo',
  titlePart2: '– para sua mesa.',
  subtitle:
    ' Mel puro, natural e saudável',
  textBtn: 'Garanta aqui',
  link:'https://api.whatsapp.com/send?phone=555481420633&text=Ola+Tudo+Bem?',
  img: '',
  social_media: [
    {
      logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMTkyIiBoZWlnaHQ9IjE5MiIgdmlld0JveD0iMCwwLDI1NiwyNTYiCnN0eWxlPSJmaWxsOiMwMDAwMDA7Ij4KPGcgZmlsbD0iI2IyODQwNSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PGcgdHJhbnNmb3JtPSJzY2FsZSg1LjMzMzMzLDUuMzMzMzMpIj48cGF0aCBkPSJNMTEuNSw2Yy0zLjAxOTc3LDAgLTUuNSwyLjQ4MDIzIC01LjUsNS41djIuNTY0NDVjLTAuMDA3NjUsMC41NDA5NSAwLjI3NjU2LDEuMDQ0MTIgMC43NDM4MSwxLjMxNjgzYzAuNDY3MjUsMC4yNzI3MSAxLjA0NTE0LDAuMjcyNzEgMS41MTIzOCwwYzAuNDY3MjUsLTAuMjcyNzEgMC43NTE0NiwtMC43NzU4OCAwLjc0MzgxLC0xLjMxNjgzdi0yLjU2NDQ1YzAsLTEuMzk4MjMgMS4xMDE3NywtMi41IDIuNSwtMi41aDI1YzEuMzk4MjMsMCAyLjUsMS4xMDE3NyAyLjUsMi41djE0LjQ3ODUyYy0wLjAwNzY1LDAuNTQwOTUgMC4yNzY1NiwxLjA0NDEyIDAuNzQzODEsMS4zMTY4M2MwLjQ2NzI1LDAuMjcyNzEgMS4wNDUxNCwwLjI3MjcxIDEuNTEyMzgsMGMwLjQ2NzI1LC0wLjI3MjcxIDAuNzUxNDYsLTAuNzc1ODggMC43NDM4MSwtMS4zMTY4M3YtMTQuNDc4NTJjMCwtMy4wMTk3NyAtMi40ODAyMywtNS41IC01LjUsLTUuNXpNMzAuODMzOTgsMTNjLTQuNDA3LDAgLTYuODMzOTgsMi42MTYxOSAtNi44MzM5OCw3LjM2NzE5djMuNjMyODFoLTRjLTAuNTUyLDAgLTEsMC40NDcgLTEsMXYzYzAsMC41NTMgMC40NDgsMSAxLDFoNHYxMGgtMTIuNWMtMS4zOTgyMywwIC0yLjUsLTEuMTAxNzcgLTIuNSwtMi41di0xNS42Njk5MmMwLjAwNTgyLC0wLjQwNTYyIC0wLjE1Mjg4LC0wLjc5NjMgLTAuNDM5OTEsLTEuMDgyOTZjLTAuMjg3MDMsLTAuMjg2NjYgLTAuNjc3OTIsLTAuNDQ0ODYgLTEuMDgzNTMsLTAuNDM4NTJjLTAuODI3NjYsMC4wMTI5MyAtMS40ODg0NCwwLjY5MzgxIC0xLjQ3NjU2LDEuNTIxNDh2MTUuNjY5OTJjMCwzLjAxOTc3IDIuNDgwMjMsNS41IDUuNSw1LjVoMjVjMy4wMTk3NywwIDUuNSwtMi40ODAyMyA1LjUsLTUuNXYtNC45MDQzYzAuMDA3NjUsLTAuNTQwOTUgLTAuMjc2NTYsLTEuMDQ0MTIgLTAuNzQzODEsLTEuMzE2ODNjLTAuNDY3MjUsLTAuMjcyNzEgLTEuMDQ1MTQsLTAuMjcyNzEgLTEuNTEyMzgsMGMtMC40NjcyNSwwLjI3MjcxIC0wLjc1MTQ2LDAuNzc1ODggLTAuNzQzODEsMS4zMTY4M3Y0LjkwNDNjMCwxLjM5ODIzIC0xLjEwMTc3LDIuNSAtMi41LDIuNWgtNi41di0xMGgzLjYyNWMwLjUwNCwwIDAuOTMwMTksLTAuMzc2OTUgMC45OTIxOSwtMC44NzY5NWwwLjM3NSwtM2MwLjAzNiwtMC4yODQgLTAuMDU0MTQsLTAuNTY5MTYgLTAuMjQ0MTQsLTAuNzg1MTZjLTAuMTg5LC0wLjIxNSAtMC40NjEwNSwtMC4zMzc4OSAtMC43NDgwNSwtMC4zMzc4OWgtNHYtMy41YzAsLTEuMTAzIDAuODk3LC0yIDIsLTJoMmMwLjU1MiwwIDEsLTAuNDQ3IDEsLTF2LTMuMzc1YzAsLTAuNTE4IC0wLjM5NTE2LC0wLjk1MDA5IC0wLjkxMDE2LC0wLjk5NjA5Yy0wLjA1OSwtMC4wMDUgLTEuNDY5ODYsLTAuMTI4OTEgLTMuMjU1ODYsLTAuMTI4OTF6Ij48L3BhdGg+PC9nPjwvZz4KPC9zdmc+',
      alt: 'Facebook',
      link: '',
    },
    {
      logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMTkyIiBoZWlnaHQ9IjE5MiIgdmlld0JveD0iMCwwLDI1NiwyNTYiCnN0eWxlPSJmaWxsOiMwMDAwMDA7Ij4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9Im5vbmUiIHN0cm9rZS1saW5lam9pbj0ibm9uZSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48ZyB0cmFuc2Zvcm09InNjYWxlKDUuMzMzMzMsNS4zMzMzMykiPjxwYXRoIGQ9Ik00MS41LDIxLjF2LTQuNmMwLC01LjUgLTQuNSwtMTAgLTEwLC0xMGgtMTVjLTUuNSwwIC0xMCw0LjUgLTEwLDEwdjMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2IyODQwNSIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNNi41LDI1LjZ2NS45YzAsNS41IDQuNSwxMCAxMCwxMGgxNWM1LjUsMCAxMCwtNC41IDEwLC0xMHYtNC42IiBmaWxsPSJub25lIiBzdHJva2U9IiNiMjg0MDUiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L3BhdGg+PHBhdGggZD0iTTI0LDE1LjVjLTQuNywwIC04LjUsMy44IC04LjUsOC41YzAsNC43IDMuOCw4LjUgOC41LDguNWM0LjcsMCA4LjUsLTMuOCA4LjUsLTguNWMwLC00LjcgLTMuOCwtOC41IC04LjUsLTguNXoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2IyODQwNSIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciI+PC9wYXRoPjxwYXRoIGQ9Ik0zNCwxMmMtMS4xLDAgLTIsMC45IC0yLDJjMCwxLjEgMC45LDIgMiwyYzEuMSwwIDIsLTAuOSAyLC0yYzAsLTEuMSAtMC45LC0yIC0yLC0yeiIgZmlsbD0iI2IyODQwNSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIj48L3BhdGg+PC9nPjwvZz4KPC9zdmc+',
      alt: 'Instagram',
      link: '',
    },
    {
      logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMTkyIiBoZWlnaHQ9IjE5MiIgdmlld0JveD0iMCwwLDI1NiwyNTYiCnN0eWxlPSJmaWxsOiMwMDAwMDA7Ij4KPGcgZmlsbD0iI2IyODQwNSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PGcgdHJhbnNmb3JtPSJzY2FsZSg1LjMzMzMzLDUuMzMzMzMpIj48cGF0aCBkPSJNMjQsMy45OTgwNWMtMTEuMDI3NzEsMCAtMjAsOC45NzIyOSAtMjAsMjBjMCwwLjc1NTcxIDAuMDQyODUsMS41MDMyNiAwLjEyNSwyLjIzODI4YzAuMDQ1NTgsMC41NDQwNyAwLjM4MzE1LDEuMDIwNDEgMC44ODEzNywxLjI0MzcxYzAuNDk4MjIsMC4yMjMzIDEuMDc4NDIsMC4xNTgyOCAxLjUxNDg2LC0wLjE2OTc1YzAuNDM2NDQsLTAuMzI4MDMgMC42NjAyMSwtMC44NjcyOCAwLjU4NDIzLC0xLjQwNzk0Yy0wLjA2OTg1LC0wLjYyNDk4IC0wLjEwNTQ3LC0xLjI2MDAxIC0wLjEwNTQ3LC0xLjkwNDNjMCwtOS40MDYyOSA3LjU5MzcxLC0xNyAxNywtMTdjNi4yNzYxNSwwIDExLjczODkzLDMuMzkwMDcgMTQuNjg3NSw4LjQzMzU5YzAuMjY0ODcsMC40NzM3OSAwLjc2NTAyLDAuNzY3NTUgMS4zMDc4MiwwLjc2ODEzYzAuNTQyOCwwLjAwMDU4IDEuMDQzNTgsLTAuMjkyMTEgMS4zMDk0NiwtMC43NjUzM2MwLjI2NTg4LC0wLjQ3MzIzIDAuMjU1MzksLTEuMDUzMTcgLTAuMDI3NDQsLTEuNTE2NDdjLTMuNDY5NDMsLTUuOTM0NDcgLTkuOTE5NDksLTkuOTE5OTIgLTE3LjI3NzM0LC05LjkxOTkyek0xNy4yNDAyMywxNWMtMC4zMTksMCAtMC44MzQ0NCwwLjExOTY2IC0xLjI3MzQ0LDAuNTk3NjZjLTAuNDM4LDAuNDc2IC0xLjY3MTg3LDEuNjMwNDcgLTEuNjcxODcsMy45ODA0N2MwLDIuMzUgMS43MTAyMiw0LjYxOTQ1IDEuOTQ5MjIsNC45Mzk0NWMwLjIzOCwwLjMxNyAzLjMwMzIsNS4yOTQ5OCA4LjE1ODIsNy4yMDg5OGM0LjAzNCwxLjU5IDQuODU0NDcsMS4yNzMzNiA1LjczMDQ3LDEuMTkzMzZjMC44NzYsLTAuMDc4IDIuODI2NjEsLTEuMTUzNTMgMy4yMjQ2MSwtMi4yNjk1M2MwLjM5OCwtMS4xMTYgMC4zOTgyNSwtMi4wNzA1OCAwLjI4MTI1LC0yLjI2NzU4Yy0wLjExOSwtMC4xOTkgLTAuNDM4MDIsLTAuMzE5NTkgLTAuOTE2MDIsLTAuNTU4NTljLTAuNDc3LC0wLjIzOSAtMi44MjM3MiwtMS4zOTM3MyAtMy4yNjE3MiwtMS41NTI3M2MtMC40MzgsLTAuMTU5IC0wLjc1ODE3LC0wLjIzOTcyIC0xLjA3NjE3LDAuMjM4MjhjLTAuMzE4LDAuNDc4IC0xLjIzMjcyLDEuNTUzMDkgLTEuNTExNzIsMS44NzEwOWMtMC4yNzksMC4zMiAtMC41NTcxNiwwLjM2MDA5IC0xLjAzNTE2LDAuMTIxMDljLTAuNDc5LC0wLjI0MSAtMi4wMTU4LC0wLjc0NDA5IC0zLjg0MTgsLTIuMzcxMDljLTEuNDIsLTEuMjY1IC0yLjM3NTMsLTIuODI4NjQgLTIuNjU0MywtMy4zMDY2NGMtMC4yNzgsLTAuNDc2IC0wLjAzMDAyLC0wLjczNzYxIDAuMjA4OTgsLTAuOTc0NjFjMC4yMTUsLTAuMjE0IDAuNDc3OCwtMC41NTY5NCAwLjcxNjgsLTAuODM1OTRjMC4yMzcsLTAuMjc5IDAuMzE1NjEsLTAuNDc2OTIgMC40NzQ2MSwtMC43OTQ5MmMwLjE1OSwtMC4zMTcgMC4wNzk5NCwtMC41OTY5NCAtMC4wMzkwNiwtMC44MzU5NGMtMC4xMTksLTAuMjM5IC0xLjA0NzY2LC0yLjYwMTg3IC0xLjQ3MjY2LC0zLjU0Njg3Yy0wLjM1NywtMC43OTQgLTAuNzMzMjIsLTAuODExMjIgLTEuMDc0MjIsLTAuODI0MjJjLTAuMjc4LC0wLjAxMSAtMC41OTgwMiwtMC4wMTE3MiAtMC45MTYwMiwtMC4wMTE3MnpNNDIuNDc4NTIsMjEuMjA4OThjLTAuNDIzNDksLTAuMDA2MzkgLTAuODI5OTUsMC4xNjY1MyAtMS4xMTkwMywwLjQ3NjA3Yy0wLjI4OTA4LDAuMzA5NTQgLTAuNDMzODQsMC43MjY4NiAtMC4zOTg1NSwxLjE0ODkzYzAuMDI2NDksMC4zODI4IDAuMDM5MDYsMC43Njk4NSAwLjAzOTA2LDEuMTY0MDZjMCw5LjQwNjI5IC03LjU5MzcxLDE3IC0xNywxN2MtMy4wMDE1OCwwIC01LjgwOTQsLTAuNzgwNTIgLTguMjU3ODEsLTIuMTQ0NTNjLTAuMzQ1MTIsLTAuMTkyMzUgLTAuNzUyMiwtMC4yNDA3OCAtMS4xMzI4MSwtMC4xMzQ3N2wtNy4zODY3MiwyLjA2MDU1bDIuMDYyNSwtNy4zODI4MWMwLjE0NDI0LC0wLjUxNjQxIDAuMDAxOTgsLTEuMDcwNTQgLTAuMzczMTgsLTEuNDUzNjFjLTAuMzc1MTcsLTAuMzgzMDYgLTAuOTI2MjIsLTAuNTM2ODMgLTEuNDQ1NTIsLTAuNDAzMzhjLTAuNTE5MywwLjEzMzQ2IC0wLjkyNzkzLDAuNTMzODYgLTEuMDcxOTIsMS4wNTAzNGwtMi4zMDA3OCw4LjIzNjMzYy0wLjUwNDk1LDEuODAzNCAxLjI3ODE4LDMuNTg2NDQgMy4wODIwMywzLjA4MjAzbDcuNzY3NTgsLTIuMTY3OTdjMi43MjczOCwxLjM5NjA4IDUuNzg0MzksMi4yNTc4MSA5LjA1NjY0LDIuMjU3ODFjMTEuMDI3NzEsMCAyMCwtOC45NzIyOSAyMCwtMjBjMCwtMC40NTk3OSAtMC4wMTUzNywtMC45MTU4OSAtMC4wNDY4NywtMS4zNzEwOWMtMC4wNDMwNSwtMC43ODY0OSAtMC42ODcwNCwtMS40MDU3NCAtMS40NzQ2MSwtMS40MTc5N3oiPjwvcGF0aD48L2c+PC9nPgo8L3N2Zz4=',
      alt: 'Whatsapp',
      link: '',
    }
  ]
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
  
  btnText: 'Garanta aqui',
  link:'https://api.whatsapp.com/send?phone=555481420633&text=Ola+Tudo+Bem?',
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
      name: 'Molho de mel para salada',
      message:
        '“Ingredientes: 1 colher de sopa de mel, 3 colheres de sopa de azeite e 2 colheres de sopa de mostarda.”',
      descricao:
        'Preparo: Misture todos os ingredientes.',
    },
    {
      image: CommunityImg2,
      name: 'Bolachinha de Mel',
      message:
        '“Ingredientes: Farinha de trigo, mel, açúcar, ovos, canela,  noz moscada, cravo, casca de limão ralada, bicarbonato de sódio e chocolate em pó.”',
      descricao:
        '',
      link: 'https://www.receiteria.com.br/receita/bolacha-de-mel/',
    },
    {
      image: CommunityImg3,
      name: 'Costelinha de porco com mel e laranja',
      message:
        '“Ingredientes: mel, laranja, shoyou, sal, mostarda, colorífico, pimenta do reino, cebola, alho e costelinha de porco.”',
      descricao:
        '',
      link: 'https://panelaterapia.com/costelinha-com-laranja-e-me/',
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
        '• É um produto utilizado deste a antiguidade para o tratamento de doenças respiratórias e cicatrizantes;  Funciona como um poderoso agente biológico, capaz de dar eliminar microrganismos, como bactérias, fungos, leveduras, vírus, etc. O principal agente bactericida contido no mel é o peróxido de hidrogênio;',
    },
    {
      question: 'Outros produtos apícolas (Própolis)',
      answer:
        '• Própolis: É um dos mais poderosos agentes antimicrobianos do mundo. As abelhas coletam o própolis, como uma resina no tronco e nos brotos dos vegetais, formando uma espécie de liga. Nas colmeias, será utilizada para vedar as frestas.',
    },
    {
      question: 'Outros produtos apícolas (Cera das abelhas)',
      answer:
        '• Cera das abelhas: Sua finalidade mais conhecida é a cosmética, fazendo parte da constituição de produtos como batons, cremes, loções, cera depilatória e óleos.',
    },
    {
      question: 'Outros produtos apícolas (Geléia real)',
      answer:
        '• Geléia real: Do ponto de vista nutricional, é o alimento mais completo que existe. Todos os 23 aminoácidos existentes na natureza estão na geleia real. Todos os 84 sais minerais, estão presentes na geleia real. Na apiterapia a geleia real é utilizada para nutrir pessoas com problemas relacionados a rins, pâncreas, disfunções ligadas á diabetes. Também é utilizada no tratamento de  fertilidade, impotência sexual, cansaço e stress. ',
    },
  ],
};

export const join = {
  image: JoinImg,
  title: '30',
  subtitle:
    'Frasco de 500ml.',
    pix: JoinImgPix,
    btnText: 'Garanta aqui',
    link:'https://api.whatsapp.com/send?phone=555481420633&text=Ola+Tudo+Bem?',
};

export const footer = {
  logo: Logo,
  copyrightText: 'Todos Direitos Reservados. Mel Selvagem © ',
};
