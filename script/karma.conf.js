

module.exports = function (config) {
  config.set({
    // 主路径
    basePath: '../',

    // 测试用框架： 使用mocha 和 power-assert 
    // karma 可用测试框架 https://npmjs.org/browse/keyword/karma-adapter
    frameworks:['mocha','power-assert'], // power-assert 是个 断言库

    //  需要加载到浏览器的文件列表
    // 此处 只对 josephfn.min.js 进行全局测试，且使用test文件夹下所有的测试js进行测试，后期可以更改为单个模块的测试
    files:[  
      'dist/*.min.js',
      //'test/**/*.test.js'
      'test/nowtest/*.test.js' // 
    ],

    // 排除那些文件（如果有 明确的files 数组定义，而且 files定义的文件没有拍出必要，此处可以 不填）
    exclude:[],

    // 在浏览器使用之前处理匹配的文件
    preprocessors:{
      'dist/*.min.js': 'coverage'
    },

    //测试报告的 报告者（插件）此处使用 ‘mocha’ 和 'coverage'
    reporters: ['mocha', 'coverage'],

    //使用reporters为"coverage"时报告输出的类型和那目录 
    coverageReporter: {
      type: "html",
      dir: "karmaTest/coverage"
    },

    // reporter options 
    mochaReporter: {
      colors: {
        success: 'blue',
        info: 'bgGreen',
        warning: 'cyan',
        error: 'bgRed'
      },
      symbols: {
        success: '+',
        info: '#',
        warning: '!',
        error: 'x'
      }
    },

    port: 9876,

    color:true,

    /**
     * 日志等级
     * 可能的值：
     * config.LOG_DISABLE //不输出信息
     * config.LOG_ERROR    //只输出错误信息
     * config.LOG_WARN //只输出警告信息
     * config.LOG_INFO //输出全部信息
     * config.LOG_DEBUG //输出调试信息
     */
    logLevel: config.LOG_INFO,

    // 是否实时监听文本变化
    autoWatch: true,

    //测试打开的 浏览器
    browsers: ["Chrome"],

    customLaunchers: {
      Chrome: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },

    // 持续集成模式,设置为true, Karma将打开浏览器，执行测试并最后退出
    singleRun:false,

    //并发级别（启动的浏览器数）
    concurrency: Infinity
  })
}