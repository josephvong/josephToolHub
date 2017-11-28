/** 
 * @desc getIndex(str,search,i)
    返回字符串str 内 某个字符“search” 的位置。
    可以控制从字符串的第i个字符开始搜索。
    返回结果为“search”出现位置组成的数组、
 * @param {string} str  要搜索的字符串 
 * @param {string} search  目标字符
 * @param {number} i  数组的第i位 可选
 * @return {Array} arr “search”出现位置组成的数组
 */

function getIndex(str,search,i=0){
  var arr = [];

  // indexOf(str, startIndex) startIndex 指定 从str的第几个位置开始
  while(str.indexOf(search,i)!=-1){// 若 search 在 str字符串中存在（!=-1）,进入while循环
    //将search 在arr中出现的第一个位置
    arr.push(str.indexOf(search,i)); 
    // 将i设置为 当前出现位置 + search的长度，表示从 当前search的结尾开始继续搜索
    i= str.indexOf(search,i) + search.length
  }
  return arr
}
//module.exports = getIndex;

//使用：
/*let str = "abcdefgabcdefg"
let search = 'def'
console.log(getIndex(str,search)) 
// [3,10]表示第一次出现def的地方为3，第二次出现def的地方为10

console.log(getIndex(str,search,5))
//[10] 表示从index为5开始搜索，第一次出现def的位置为 10
*/