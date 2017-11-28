const webpack = require('webpack')
const path = require('path')
const pkg = require('../package.json')
const rootPath = path.resolve(__dirname,'../')

const config ={
  entry: path.resolve(rootPath, 'src', 'index.js'),
  output:{
    filename: `${pkg.name}.min.js`, //根据package.json的 设置 输出 josephfn.min.js
    path: path.resolve(rootPath, 'dist'), // 输出到 dist 文件夹
    library: `${pkg.name}`,
    libraryTarget: "umd"
  },
  module: {
    rules:[
      {
        test:/\.js$/,
        loader:"babel-loader"
      }
    ]
  },
  plugins: [
    // 调用 js 压缩 插件
    new webpack.optimize.UglifyJsPlugin()
  ]
}
module.exports = config