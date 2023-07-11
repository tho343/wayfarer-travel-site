/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image' : "url('./assets/norway.jpg')"
      },
      colors:{
        'primary-blue': "#3D4FBD",
        'secondary-blue': "#C4C8DB",
        'secondary-text':'#363B5A',
        'ascent-blue': '#444D82',
        'gray-text-color': '#B6BBD7'
      }

    },
  },
  plugins: [],
}

