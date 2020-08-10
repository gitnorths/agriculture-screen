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
}
