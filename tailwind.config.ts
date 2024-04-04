
/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: 'selector',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'whiteBg' : '#F4F5F7',
        'whiteHeader' : '#FFFFFF',
        'whiteNav' : '#D0D4DC',
        'searchBox' : '#ECEEEF',
        'svg' : '#eceeef7f',
        'dbg' : '#24374a;'
       
      },
    }
  },
}