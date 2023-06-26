/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.ts', './src/**/*.tsx'],
  plugins: [require('@tailwindcss/container-queries')],
  theme: {
    fontFamily: {
      body: ['system-ui'],
    },
  },
}
