module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      title: '农业面源污染治理公共服务平台',
    },
  },
  // pluginOptions: {
  //   moment: {
  //     locales: ['zh-cn'],
  //   },
  // },
  // transpileDependencies: ['vue-echarts', 'resize-detector'],
  publicPath: './',
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.module
      .rule('less')
      .test(/\.less$/)
      .oneOf('vue')
      .use('px2rem-loader')
      .loader('px2rem-loader')
      .before('postcss-loader') // this makes it work.
      .options({ remUnit: 192, remPrecision: 8 })
      .end()
  },
}
