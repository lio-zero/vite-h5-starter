const px2viewport = require('postcss-px-to-viewport')
const autoprefixer = require('autoprefixer')

module.exports = () => {
  return {
    plugins: [
      autoprefixer({ overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8'] }),
      /**
       * vant 使用 375 尺寸，而开发时设计稿有可能是 750 或其他尺寸，这时 postcss-px-to-viewport 不好处理。
       * 可参考：
       * https://github.com/vitejs/vite/issues/4653
       * https://blog.csdn.net/weixin_42998707/article/details/124150578
       */
      px2viewport({
        viewportWidth: 375,
        minPixelValue: 1,
        unitPrecision: 5,
        mediaQuery: true,
      }),
    ],
  }
}
