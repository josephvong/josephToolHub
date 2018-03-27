/*
  @getHost(url) 获取 url 的 主域名：'https://127.0.0.1/123//user' 获取 ‘https://127.0.0.1’
  @param url 字符串 url
  @return domain 字符串
*/ 
function getHost (url) {
  let hostRegex = /^(http|https):\/\/[\w.:]*\//  // 选择从‘http/https://’开始，出现任意字符和‘.’和':'([\w.:]*) 后面添加 ‘/’的字符串   
  let matches = url.match(hostRegex) // 此正则 匹配的 生成数组 第一项
  return matches[0]  
}

//module.exports = getHost (本地测试时的输出写法)
export default getHost
//console.log(getHost('https://127.0.0.1/123'))
//console.log(getHost('https://h5.9kacha.com/index.php/Wine/detail?wine_id=904831411&year=2004&sign=24d983242d45c43180d1d3bb7d0370cfFDA9688AE996D6BD23E811FD1071A49B&source=wordSearch&signVar=28c16a2511ab716c484f4707fa98c4eae12aef82'))