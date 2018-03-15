// basic
/*var curry = function(fn){
  var args = [].slice.call(arguments,1) //复制一份参数数组（从第二位开始，因为第一个参数是fn）
  return function(){// 返回一个函数
    var newArgs = args.concat([].slice.call(arguments));//将这个函数调用时的传参（数组）复制 拼接到curry的参数后面
    return fn.apply(this, newArgs) // 用 fn(柯力化处理的函数) 调用 这些参数 执行
  }
}

function add(a,b){
  return a+b
}
var addCurry = curry(add,1,2)
console.log(addCurry())
var curryAdd = curry(add)
console.log(curryAdd(1,2))
*/

 

/* V2
function curry(fn,args){
  var length = fn.length; //function中length属性为获取为一个函数定义的参数数目
  var args = args || []; 

  return function(){ // 输出一个函数 
    var _args = args.slice(0),//复制curry的参数数组（去除第一个 fn ） 
        arg, i;

    // 遍历 输出函数 调用时 的传参数组
    for (var i = 0; i < arguments.length; i++) {
      arg = arguments[i]; 
      _args.push(arg)// 将每个传参 放入 _args 数组中（原curry函数的传参数数组）
    }

    // 如果 传参没有达到 fn 所定义的参数的 数目
    if(_args.length<length){
      return curry.call(this,fn,_args) // 继续返回 curry(fn)并且 把 已经添加新参数的_args 传入curry
    }else{ // 如果 传入的参数已经达到参数的数目
      return fn.apply(this,_args) // 执行fn，并且使用 最终传入的所有参数数组
    }
  }
}

var fn = curry(function(a, b, c) {
    console.log([a, b, c]);
});

fn("a", "b", "c") // ["a", "b", "c"]
fn("a", "b")("c") // ["a", "b", "c"]
fn("a")("b")("c") // ["a", "b", "c"]
fn("a")("b", "c") // ["a", "b", "c"]
*/

// 终极版 curry
var _ = {};
function pri_curry(fn,args,holes){
  var length = fn.length;
  args = args || [];
  holes = holes || [];

  return function(){
    var _args = args.slice(0),
        _holes = holes.slice(0),
        argsLen = args.length,
        holesLen = holes.length,
        arg,i,
        index = 0;

    for (i = 0; i < arguments.length; i++) {
      arg = arguments[i];
      // 处理类似 fn(1, _, _, 4)(_, 3) 这种情况，index 需要指向 holes 正确的下标
      if(arg === _ && holesLen){
        index++
        if(index>holesLen){
          _args.push(arg);
          _holes.push(argsLen-1+index-holesLen)
        }
      }
      // 处理类似 fn(1)(_) 这种情况
      else if(arg === _){
        _args.push(arg);
        _holes.push(argsLen + i);
      }
      // 处理类似 fn(_, 2)(1) 这种情况
      else if(holesLen){ 
        if(index>=holesLen){// fn(_, 2)(_, 3)
          _args.push(arg);
        }else{ // fn(_,2)(1) 用参数 1 替换占位符
          _args.splice(_holes[index],1,arg);
          _holes.splice(index,1)
        } 
      }
      else{
        _args.push(arg)
      }  
    }

    if(_holes.length || _args.length<length){
      return pri_curry.call(this,fn,_args,_holes)
    }else{
      return fn.apply(this,_args);
    } 
  } 
}

export default pri_curry

/* 
var _ = {}; // _ 可以是空对象 或者 null 反正意思是用于占位用

var fn = curry(function(a, b, c, d, e) {
    console.log([a, b, c, d, e]);
});


// 验证 输出全部都是 [1, 2, 3, 4, 5]
fn(1, 2, 3, 4, 5);
fn(_, 2, 3, 4, 5)(1);
fn(1, _, 3, 4, 5)(2);
fn(1, _, 3)(_, 4)(2)(5);
fn(1, _, _, 4)(_, 3)(2)(5);
fn(_, 2)(_, _, 4)(1)(3)(5)

*/