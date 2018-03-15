/* 
  @ deepCopy(obj) 描述： json 数据格式 的 深拷贝
  @ 参数 传入一个 obj , deepCopy(obj) 返回 与 obj 完全一致的 另一个obj2
  @ obj2 可以 任意自行修改，并且不会 影响到 原obj
  @ deepCopy 在 arr 复制同样可以使用
*/

function deepCopy(obj){
  if(typeof(obj) !== 'object') return // 非 对象 
  
  // A instanceof B 表示 判断 B 是否 A的 构造函数 ，下面判断 obj的构造函数是否 Array() 类  
  var newObj = obj instanceof Array ? [] : {}  //判断obj 是否为数组，若是，newObj 定义为一个空数组，否则定义为一个{}

  for (var key in obj) {
    // obj.hasOwnProperty(key) 函数 为 object 类型数据的 函数， 用于判断 'key'是否 存在obj 里面
    if(obj.hasOwnProperty(key)){
      // 遍历obj，并且将 obj 每个键值 放置入 newObj的对应键值内
      // 如果 obj 当前 key 的值 是个 object，递归用 deepCopy(obj[key]) 输出 当前值的 克隆，   
      newObj[key] = typeof(obj[key]) === 'object' ? deepCopy(obj[key]) : obj[key]
    }
  }
  return newObj
}

export default deepCopy