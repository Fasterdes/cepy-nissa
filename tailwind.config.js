const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: {
          DEFAULT: '#FFFFFE',
        },

        brown: {
          light: '#F9F4F0',
          DEFAULT: '#EFE6DC',
          dark: '#716040',
          500 : '#8C7851'
        },

        blue: {
          DEFAULT: '#020826',
        },

        yellow: {
          DEFAULT: '#FFBA37',
        },
      },

      spacing : { 
        10 : '10px',
        18 : '18px'
      },

      fontFamily : { 
          inter : ['Inter' , 'sans-serif'],
          lora : ['Lora' , 'serif'],
      },

      fontSize : { 
        'paragraph': ['14px', {
          lineHeight: '22.5px',
        }],
      }
    },
  },
  plugins: [],
}
