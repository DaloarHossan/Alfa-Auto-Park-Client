module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",'./node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      colors:{
        primarycolor:"#ff7900",
      }
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
}
