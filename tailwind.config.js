/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      coverImage: "url('/bg-landscape.jpeg')",
    },
    extend: {
      colors: {
        customBlue: 'rgba(2,0,20,1)',
        customBlack: 'rgba(0, 0, 0, 1)',
        customBrown: 'rgba(28,0,0,1)',
      }
    },
  },
  plugins: [],
}

