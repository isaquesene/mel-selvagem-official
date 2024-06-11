module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Inter',
      secondary: 'Open Sans',
    },
    container: {
      padding: {
        DEFAULT: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '769px',
      lg: '1026px',
      xl: '1282px',
    },
    extend: {
      colors: {
        primary: {
          100: '#a5ffce',
          200: '#4ae290',
          300: '#25c870',
          400: '#b28405',
          500: '#efb810',
        },
        neutral: {
          100: '#ffffff',
          200: '#dedee3',
          300: '#9797a1',
          400: '#595962',
          500: '#000000',
        },
        page: '#fcfcff',
      },
      backgroundImage: {
        banner: "url('/src/assets/img/banner/bg.jpeg')",
        rs: "url('/src/assets/img/rs/rs.png')",
        faq: "url('/src/assets/img/faq/bg.svg')",
        'auto-height': 'auto 100%',
      },
      backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
        custom: '95%',
        smaller: '40%', // Adicionando um tamanho menor
      },
      backgroundPosition: {
        bottom: 'bottom',
        center: 'center',
        left: 'left',
        'left-bottom': 'left bottom',
        'left-top': 'left top',
        'left-c-2': '2rem center',
        right: 'right',
        'right-bottom': 'right bottom',
        'right-top': 'right top',
        top: 'top',
        'top-left': 'top left', // Adicionando posição no topo esquerdo
      },
      opacity: {
        90: '0.9', // Definindo opacidade customizada
        80: '0.8',
        70: '0.7',
        60: '0.6',
        50: '0.5',
      },
      spacing: {
        '-20': '-5rem',
        '-16': '-4rem',
        '-12': '-3rem',
        '-8': '-2rem',
        '-4': '-1rem',
      },
      boxShadow: {
        custom: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        customDark: '0 10px 20px rgba(0, 0, 0, 0.25)',
        text: '0 2px 4px rgba(0, 0, 0, 0.1)', // Adicionando sombra para texto
      },
    },
  },
  plugins: [],
};
