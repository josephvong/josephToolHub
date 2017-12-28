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

//----------------Time/Date------------------------------
const chnDay = require('./time/chnDay').default 
const dateFormat = require('./time/dateFormat').default 
const formatPassTime = require('./time/formatPassTime').default 
const formatRemainTime = require('./time/formatRemainTime').default 
const isLeapYear = require('./time/isLeapYear').default 

//--------------------class / style----------------------------------
const hasClass = require('./class/hasClass').default
const addClass = require('./class/addClass').default
const getStyle = require('./class/getStyle').default

//----------------------dom-------------------------------
const getPos = require('./dom/getPos').default
const getTop = require('./dom/getTop').default

// ---------------generalTool------------------- 
const equal = require('./generalTool/equal').default
const pri_curry = require('./generalTool/pri_curry').default

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

  //----------时间 与 日期--------------------
  chnDay,  // 输出 中文 星期一 星期二 等等
  dateFormat,  //日期格式化
  formatPassTime, // 超过时间 格式化 输出 （超过）“xx日xx时xx分xx秒”
  formatRemainTime, //剩余时间 格式化 输出 （还剩）xx年xx月xx日xx时xx分
  isLeapYear,   // 闰年判断

  //----------------类名 与 样式-------------------------
  getStyle,  // 获取dom的单个样式属性
  hasClass,  // 判断 dom 是否有 某个类
  addClass,  // 给 dom 添加 某个类

  //---------------------dom 操作----------------------
  getPos,
  getTop,

  //-----------object 对象方法---------------
  isPlainObject, // 判断对象是否是个 纯粹对象
  extend,   // 仿 jquery 的 对象深克隆函数

  // ---------------通用工具函数-------------
  equal,  // 全类型 数据相等 判断函数
  pri_curry  // 函数柯粒化终极版（支持占位参数） (未通过调用测试)
}