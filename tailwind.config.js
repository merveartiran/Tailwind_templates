/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container:{
      center: true,
      padding: '16px',


    },
    extend: {
      colors: {
        'primary': '#c996a5',
      'secondary': '#f6e3ba',
      'tertiary': '#dcaf92',
      'background': '#93a59a',
      'fortis': '#e86060',
      },
      fontFamily:{
        
          miuul: ['Happy Monkey', 'system-ui'],
          open:['Open Sans', 'sans-serif']
          
        
        
      },
    },
  },
  plugins: [],
}

