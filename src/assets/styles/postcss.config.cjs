module.exports = {
  plugins: [
    require('postcss-import')(),
    require('autoprefixer'),
    require('postcss-custom-media')({
      importFrom: ['src/assets/styles/__customMedia.css'],
      disableDeprecationNotice: true /* voir https://github.com/csstools/postcss-plugins/discussions/192 */,
    }),
    require('postcss-custom-properties')({
      exportTo: ['src/lib/assets/customProperties.json'],
      importFrom: ['src/lib/assets/colors.css', 'src/assets/styles/__vars.css'],
      disableDeprecationNotice: true,
    }),
    require('postcss-nested')(),
    require('cssnano'),
  ],
};
