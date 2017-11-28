/** 
 * @desc getIndex(str,search,i)
    检测字符串是不是全部由数字组成，参数 str为待检测的字符串。 返回true/false
 * @param {string} str  检测字符串
 * @return {Boolean} true/false
 */

function detectNum(str){
  var n = 0;

  for (var i = 0; i < str.length; i++) {
    n = str.charCodeAt(i);
    if(n<48 || n>57){return false}
    // 数字的 chartCode 范围 48 -57
    //console.log(n)
  }
  return true
}
module.exports = detectNum
/*
//用法
console.log(detectNum('01239')) // 全数字 true
console.log(detectNum('$01239')) // 非全数字 false
*/