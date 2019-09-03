module.exports = {
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'violet': '#C08FD0',
        'violet-dark': '#191023'
      },
    }
  },
  variants: {},
  plugins: [
    require('tailwindcss-aspect-ratio')({
      ratios: {
        'square': [1, 1],
        '16/9': [16, 9],
        '4/3': [4, 3],
        '21/9': [21, 9],
      }
    })
  ]
}
