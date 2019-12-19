const production = [
  require('cssnano')({
    preset: ['default', {
      discardComments: {removeAll: true},
    }]
  })
];


module.exports = {
  plugins: [
    require('postcss-import'),
    require("tailwindcss"),
    require('postcss-nested'),
    require('postcss-custom-properties'),
    require('autoprefixer'),

   ...(process.env.NODE_ENV === "production" ? production : [])
  ]
};
