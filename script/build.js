const path = require('path')
const fs = require('fs')
const ora = require('ora') // nodejs 控制台 loading 插件（loading旋转器）
const rm = require('rimraf') // nodejs 删除指令 插件
const copy = require('copy') // 拷贝控件
const chalk = require('chalk') // 文字颜色的控制插件
const webpack = require('webpack') 

const config = require('./webpack.conf') // webpack配置
const pkg = require('../package.json')  // package信息
const rootPath = path.resolve(__dirname,'../') // 根路径

new Promise((resolve,reject)=>{
  // 创建一个命令行 loading提示器 ， 命名为building
  let building = ora('building...') 
  building.start()  // 开始building 的 loading （开始等待下面的操作执行完成）

  // 删除 dist 文件夹里面以前的打包文件， 并执行回调函数
  rm(path.resolve(rootPath,'dist',`${pkg.name}.min.js`), (err)=>{
    // 若有 err 抛出错误
    if(err) throw (err)
    // 使用webpack 进行打包（以config配置进行），并执行打包完成后的回调函数 
    webpack(config,function(err,status){
      if(err) throw (err) // 打包过程有报错，抛出

      building.stop() // loading 停止（打包完成了）

      // process (进程) 是nodejs的全局变量，stdout 表示进程的输出
      process.stdout.write(status.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
      }) + '\n\n')
      resolve()
      console.log(chalk.cyan('  Build complete.\n'))
    })  
  })
}).then(()=>{ // 以下为 将src 里面的函数 拷贝到根目录，方便在单个函数来引入
  let copying = ora('copying...')
  copying.start()

  rm('*.js',(err)=>{
    if(err) throw (err) // 有错抛出

    // （同步）读取'src'文件夹里面的所有子目录 
    let folderList = fs.readdirSync(path.resolve(rootPath,'src'))
    //
    folderList.forEach((item,index)=>{
      // 复制src里面各个项目下面的所有js文件到根目录 
      copy(`src/${item}/*.js`, path.resolve(rootPath,'output'), function(err,files){
        if(err) throw (err) // 有错抛出
        // index 遍历到最后一个folder  
        if(index === folderList.length - 1){
          console.log(chalk.cyan('  Copy complete.\n')) // 输出拷贝完成提示
          copying.stop() // 加载过程 结束
        }  
      })
    })
  })
}).catch((err)=>{
  throw err
})
