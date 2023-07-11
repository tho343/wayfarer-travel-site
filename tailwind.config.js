/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image' : "url('./assets/norway.jpg')"
      },
      colors:{
        'primary-blue': "#3D4FBD"
      }

    },
  },
  plugins: [],
}

