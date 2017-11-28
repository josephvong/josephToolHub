const arrayEqual = require('./array/arrayEqual')

//-----------string------------
const getIndex = require('./string/getIndex')
const detectNum = require('./string/detectNum')
module.exports = {
  arrayEqual,

  //----------string字符串方法----------- 
  getIndex, //返回字符串str 内 某个字符“search” 的位置。
  detectNum,
}