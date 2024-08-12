/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
      },
      screens: {
        'custom-sm': '520px', 
        'custom-md': '900px', 
        'custom-lg': '1280px',
        'custom-z': {'raw': '(min-width: 540px) and (max-width: 640px)'},
      },
    },
  },
  plugins: [],
}

