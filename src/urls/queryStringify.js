/*
  @queryStringify (query) 将一个 json/对象({a:1,b:2}) 转化成 a=1&b=2
  @param query object 对象
  @return string query字符串
*/
function queryStringify (query) {
  let arr = [];

  for (let key in query) {
    if (query.hasOwnProperty(key)) { // 严格控制 将 query 中可枚举的 属性 进行 字符串的转化
      arr.push([key,encodeURIComponent(query[key])].join('='))
    }
  }
  return arr.join('&')
}

export default queryStringify

/*let obj = {
  a: 1,
  b: '我们', 
  c: 3,
}
console.log(queryStringify(obj))
*/
/*var buz = {
  fog: 'stack'
}

for (var name in buz) {
  if(buz.hasOwnProperty(name)){
    console.log("this is fog (" + name + ") for sure. Value: " + buz[name])
  }else{
    console.log(name)
  }
}*/