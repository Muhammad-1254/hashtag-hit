/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        Raleway:["Raleway"],
        signature:["Great Vibes"]
        
      },
      colors:{
        grayText:'#C5C6C7',
        cyanLight:'#66FCF1',
        cyanDark:'#45A29E',
        dark:'#1F2833',
        customBlack:'#0B0C10'
      },
      
     
    },
  },
  plugins: [

  ],
}
