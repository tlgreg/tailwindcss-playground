const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./public/**/*.html'],
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
})

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nested'),
    require('postcss-font-magician'),
    require('postcss-preset-env'),
    ...(process.env.NODE_ENV === 'production'
      ? [purgecss, require('cssnano')]
      : []),
  ],
}
