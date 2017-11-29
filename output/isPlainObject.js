/*
所谓"纯粹的对象"，就是该对象是通过 "{}" 或 "new Object" 创建的，
该对象含有零个或者多个键值对
一个没有原型的对象也是一个纯粹的对象
以上标准是参考jquery的 标准设置
*/

var class2type = {} // 创建一个 {}
// 把Object.prototype.toString() 静态函数 付给 'toString'变量
var toString = class2type.toString
// 把Object.prototype.hasOwnProperty() 静态函数 付给 'hasOwn'变量
var hasOwn = class2type.hasOwnProperty

function isPlainObject(obj){ 
  var proto, Ctor;

  // 排除 null 和 一些typeof()会输出为object 的数据类型（如array, Date等）
  if(!obj || toString.call(obj)!=='[object Object]'){
    return false
  }

  // 根据Object.getPrototypeOf(obj)静态方法 获取 obj的原型
  proto = Object.getPrototypeOf(obj)

  // 没有原型的对象是纯粹的，Object.create(null) 就在这里返回 true
  if(!proto){ // 若 obj.__proto__ === Object.prototype===null ，表示纯粹对象
    return true
  }

  //判断proto里面是否有‘constructor’(构造函数)属性，并将 proto 的 ‘constructor’(构造函数)赋值给'Ctor'变量
  Ctor = hasOwn.call(proto,"constructor") && proto.constructor
  return typeof(Ctor) === 'function' && hasOwn.toString.call(Ctor)===hasOwn.toString.call(Object)
  //上面的代码：先判断 Ctor(obj原型上的构造函数)是否为函数
  //再判断是否自定义构造函数（通过与 Object类的构造函数进行比较）,若不是Object类的构造函数，则不是plainObject
  //上面 ‘hasOwn.toString.call(Object)’ 输出的是 “function Object() { [native code] }” 表示 Object类的构造函数
}

module.exports = isPlainObject
//export default isPlainObject

/* 使用方式
function Person(name) {
    this.name = name;
}

console.log(isPlainObject({})) // true

console.log(isPlainObject(new Object)) // true

console.log(isPlainObject(Object.create(null))); // true

console.log(isPlainObject(Object.assign({a: 1}, {b: 2}))); // true

console.log(isPlainObject(new Person('yayu'))); // false

console.log(isPlainObject(Object.create({}))); // false
*/

