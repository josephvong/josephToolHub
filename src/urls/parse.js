/*
@ 字符串参数转换为对象 如： xxx.php?a=1&b=2 转换为 {a: 1, b: 2}
  @param str 需要转换的字符串
  @param sep 连接符 默认 &
  @param eq 键值连接符 默认 =
  @return {object}

*/

function parse (url, sep, eq) {
  let obj = {}
  str = (url || location.search).replace(/^[^]*\?/,'') // 将‘？’前的 url 清除
  sep = sep || '&'
  eq = eq ||　'='
  let arr,
  reg = new RegExp('(?:^|\\' + sep + ')([^\\' + eq + '\\' + sep + ']+)(?:\\' + eq + '([^\\' + sep + ']*))?', 'g')
  while ((arr = reg.exec(str)) !== null) {
    if (arr[1] !== str) {
      obj[decodeURIComponent(arr[1])] = decodeURIComponent(arr[2] || '')
    }
  }  
  return obj
}

export default parse
/*let link = 'https://h5.9kacha.com/index.php/Wine/detail?wine_id=904831411&year=2004&sign=24d983242d45c43180d1d3bb7d0370cfFDA9688AE996D6BD23E811FD1071A49B&source=wordSearch&signVar=28c16a2511ab716c484f4707fa98c4eae12aef82'
let link2 ='?wine_id=904831411&year=2004&sign=24d983242d45c43180d1d3bb7d0370cfFDA9688AE996D6BD23E811FD1071A49B&source=wordSearch&signVar=28c16a2511ab716c484f4707fa98c4eae12aef82'

console.log(parse(link))*/
