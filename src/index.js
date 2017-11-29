//require('babel-polyfill')

const arrayEqual = require('./array/arrayEqual').default
//import arrayEqual from './array/arrayEqual'
//-----------string------------
const getIndex = require('./string/getIndex').default 
const detectNum = require('./string/detectNum').default
const firstLetterUpper = require('./string/firstLetterUpper').default
const trim = require('./string/trim').default
const toCamelStyle = require('./string/toCamelStyle').default
const removeNum = require('./string/removeNum').default 
const strReverse = require('./string/strReverse').default

//--------------Object--------------------------
const isPlainObject = require('./object/isPlainObject').default 
const extend = require('./object/extend').default 

// ---------------generalTool------------------- 
const equal = require('./generalTool/equal').default

module.exports = {
  arrayEqual,

  //----------string字符串方法----------- 
  getIndex, //返回字符串str 内 某个字符“search” 的位置。
  detectNum,   // 检测字符串是不是全部由数字组成
  firstLetterUpper, // 首字母大写函数
  trim,   // 去除头尾空格
  toCamelStyle, // 字符串驼峰格式化
  removeNum,  // 去除字符串数字函数
  strReverse, // 字符串翻转输出 函数

  //-----------object 对象方法---------------
  isPlainObject, // 判断对象是否是个 纯粹对象
  extend,   // 仿 jquery 的 对象深克隆函数

  // ---------------通用工具函数-------------
  equal,  // 全类型 数据相等 判断函数 
}