/*
equal(a,b,aStack,bStack)  全类型数据 相等对比函数 （包含 数组 对象）
a b  两个参数为常规参数，对比 ab 是否全等，并return true/false
aStack 和 bStack 参数 是在 equal 处理 ab 之间 存在循环引用的过程中，递归调用时 传入的参数，平时使用不需传参

参考：https://github.com/mqyqingfeng/Blog/issues/41
*/

var toString = Object.prototype.toString;
function isFunction(obj){
  return toString.call(obj) === '[object Function]'
}

function equal(a,b,aStack,bStack){

  // === 结果为 true 的区别出 +0 和 -0
  if(a===b) return a!==0 || 1/a ===1/b
  
  // typeof null 的结果为 object ，这里做判断，是为了让有 null 的情况尽早退出函数
  if(a==null || b==null) return false

  // 判断 NaN  
  if(a!==a) return b!==b  

  // 判断参数 a 类型，如果是基本类型，在这里可以直接返回 false
  var type = typeof a;
  if (type !== 'function' && type !== 'object' && typeof b != 'object') return false;

  // 更复杂的对象使用 deepEq 函数进行深度比较
  return deepEq(a, b, aStack, bStack);   
}

function deepEq(a, b, aStack, bStack){
  // a 和 b 的内部属性 [[class]] (创建类型) 相同时 返回 true
  var className = toString.call(a);
  if (className !== toString.call(b)) return false;

  switch (className) {
    case '[object RegExp]':
    case '[object String]':
      //字符串类创建的字符串 通过前面添加 ''+ 的方式转化成 基本字符串类型
      return '' + a === '' + b;
    case '[object Number]':
      if (+a !== +a) return +b !== +b;
      return +a === 0 ? 1 / +a === 1 / b : +a === +b;
    case '[object Date]':
    case '[object Boolean]':
      // 布尔值 和 日期可以 在前面加 运算符 隐式转换为数字类型 
      return +a === +b;
  }

  //若 a b 不是数组时，判断ab是不是有两个不同的构造函数初始化而成-------------
  var areArrays = className === '[object Array]';
  // 若 （a） 非数组
  if(!areArrays){
    // 过滤掉 a 和 b 均为函数的情况
    if(typeof a !='object' || typeof b!='object') return false;

    // 获取a b 两个对象的构造函数
    var aCtor = a.constructor 
    var bCtor = b.constructor

    //instanceof 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上。
    // aCtor 和 bCtor 必须都存在并且都不是 Object 构造函数的情况下，aCtor 不等于 bCtor， 那这两个对象就真的不相等啦
    if (aCtor !== bCtor && !(isFunction(aCtor) && aCtor instanceof aCtor && isFunction(bCtor) && bCtor instanceof bCtor) && ('constructor' in a && 'constructor' in b)) {
      // 尽管 a 的构造函数 和 b的构造函数 有可能 初始化 出 a 和 b 有相同的键值对，但是由于 构造函数不同，a 和 b 不能认为相同
      return false;
    }
  }
  //------------------------------------------

  // a b 之间 存在循环引用的 情况

  aStack = aStack || []; // 
  bStack = bStack || [];
  var length = aStack.length;
  // 检查是否有循环引用的部分
  while (length--) {
    if (aStack[length] === a) {
        return bStack[length] === b;
    }
  }

  aStack.push(a);
  bStack.push(b);

  //-----------------------------------------

  // 数组判断-----------------------
  if (areArrays) { 
    length = a.length;
    if (length !== b.length) return false;

    while (length--) {
      if (!equal(a[length], b[length], aStack, bStack)) return false;
    }
  }else{//对象的判断----------------------------
    var keys = Object.keys(a),
        key;
    length = keys.length;

    if (Object.keys(b).length !== length) return false;
    while (length--) {
      key = keys[length];
      if (!(b.hasOwnProperty(key) && equal(a[key], b[key], aStack, bStack))) return false;
    }
  }
  
  aStack.pop();
  bStack.pop();
  return true;
}

export default equal
/*
console.log(equal(0, 0)) // true
console.log(equal(0, -0)) // false

console.log(equal(NaN, NaN)); // true
console.log(equal(Number(NaN), Number(NaN))); // true

console.log(equal('Curly', new String('Curly'))); // true

console.log(equal([1], [1])); // true
console.log(equal({ value: 1 }, { value: 1 })); // true

var a, b;

a = { foo: { b: { foo: { c: { foo: null } } } } };
b = { foo: { b: { foo: { c: { foo: null } } } } };
a.foo.b.foo.c.foo = a;
b.foo.b.foo.c.foo = b;

console.log(equal(a, b)) // true
*/












