/** 
  @extend ( [isDeep], target, clone1, clone2,... )
  检测字符串是不是全部由数字组成，参数 str为待检测的字符串。 返回true/false
  @第一个参数 若为 “isDeep”（boolean）时, 若为true 表示 使用 深拷贝；由第二个参数为target
  @若isDeep为false或没有isDeep(第一个参数就是对象)， 表示 浅拷贝
  @extend 函数 ，需要 调用到 isPlainObject() 函数来判断
  
  参考： https://github.com/mqyqingfeng/Blog/issues/33
*/

const isPlainObject = require('./isPlainObject').default
 

function extend(){
  var deep = false // 是否进行深拷贝的判断值，默认为 false
  var name, options, src, copy, clone , copyIsArray;
  var length = arguments.length
  var i = 1 

  var target = arguments[0]||{} // 若args[0]是boolean且false时，自动创建{}（输出目标）

  if(typeof target  ==='boolean'){ // 如果target是布尔值（为true）时
    deep = target         // 并将 第二个参数 args[1] 作为输出的target
    target = arguments[i]||{}
    i++     // i+=1 从 args[2] 第三个参数 开始 进行遍历
  }

  // target若是 函数，同样可以添加键值，因此需要判断target是不是函数
  if(typeof target !=='object' && typeof target !=='function'){
    target = {}
  }

  // 遍历 每个 参数（要被克隆的 boj）
  for (; i<length; i++) {
    options = arguments[i]  // 当前 遍历 的 参数
    if(options != null){
      for(name in options){  //  遍历 当前参数里面的键值对
        src = target[name] // 目标属性值

        copy = options[name] // 要复制的对象的属性值

        if(target === copy){ // 解决循环引用
          continue
        }

        // 要递归的对象必须是 plainObject 或者数组
        if(deep && copy && (isPlainObject(copy) || (copyIsArray = Array.isArray(copy) ) ) ){
          if(copyIsArray){
            copyIsArray = false
            clone = src && Array.isArray(src)?src:[]; 
          }else{
            clone = src && isPlainObject(src) ? src:{}
          }
          target[name] = extend(deep,clone,copy)
        }else if(copy!==undefined){
          target[name] = copy  // 将copy 覆盖 target 里面对应的键值
        }
      }
    }
  }
  return target
}

//module.exports = extend
export default extend

/*
步骤：
1 . 判断第一个参数的类型（是 obj（作为target），还是boolean，判断深浅克隆的flag）
2 . 确保用于承载克隆内容的变量target是个 {}
3 . 在深克隆时，需要对 克隆到 的键值 的值 进行类型判断
    目的： 一个数组需要替换一个基础类型数据，需要将基础类型数据设置为空数组
          对象 覆盖 基础类型数据 同理
4 . 递归 进入深克隆
5 . 输出target
*/ 
 

/*使用方法
var obj1 = {
    a: 1,
    b: {
        c: 2
    }
} 
var obj2 = {
    b: {
        c: [5], 
    }
} 
var d = extend(true, obj1, obj2)
console.log(d);

var a = {name : b};
var b = {name : a}
var c = extend(a, b);
console.log(c);
*/