function type(obj){
  let class2type = {}
  //将 各个类型的字符串组成数组，并 拼接为‘Object.prototype.toString’ 的输出字符串，然后作为class2type的key  
  "Boolean Number String Function Array Date RegExp Object Error".split(" ").map((item,index)=>{
    class2type[`[object ${item}]`] = item.toLowerCase()
  })

  if(obj == null){  // 如果obj 为 null 时 输出 null 因为 Object.prototype.toString().call(null) 输出的是 [object Object]
    return obj
  } 
  // 如果 数据类型为引用类型，或 函数
  if(typeof(obj)==="object" || typeof(obj)==='function'){
    return class2type[Object.prototype.toString.call(obj)]||'object' // 使用 Object.prototype.toString().call() 来输出数据的真实类型
  }else{
    return typeof(obj) // 若为 基础数据类型，直接输出类型
  } 
}

export default type