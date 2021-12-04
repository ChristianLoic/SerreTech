module.exports = {
  purge: {
    ///enabled: process.env.WEBPACK_DEV_SERVER === 'true' && process.argv.join(' ').indexOf('build') !== -1,
    content: [
  "./src/**/*.{html,ts}",
  "./projects/**/*.{html,ts}"]},
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: { colors: {
        'brown':'#795d44',
        'darkbrown':'#5c4734',
        'lightblack':'#1d1b1b',
        'vertBill': '#015C5B',
      }},
  },
  plugins: [],
}
