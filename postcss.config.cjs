module.exports = {
  plugins: [
    require('postcss-import')(),
    require('autoprefixer'),
    // require('postcss-custom-media')({
    //   importFrom: ['src/assets/styles/__customMedia.css'],
    //   disableDeprecationNotice: true /* voir https://github.com/csstools/postcss-plugins/discussions/192 */,
    // }),
    require('postcss-custom-media')(),
    require('postcss-custom-properties')(),
    require('postcss-nested')(),
    require('cssnano'),
  ],
};
