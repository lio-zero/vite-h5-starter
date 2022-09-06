const px2viewport = require('postcss-px-to-viewport')
const autoprefixer = require('autoprefixer')

module.exports = () => {
  return {
    plugins: [
      autoprefixer({ overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8'] }),
      // https://github.com/vitejs/vite/issues/4653
      px2viewport({
        viewportWidth: 375,
        minPixelValue: 1,
        unitPrecision: 5,
        mediaQuery: true,
      }),
      px2viewport({
        viewportWidth: 750,
        minPixelValue: 1,
        unitPrecision: 5,
        mediaQuery: true,
      }),
    ],
  }
}
