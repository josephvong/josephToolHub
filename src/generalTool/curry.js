/*
curry 目的：
让一个多参数的函数 转化成 一系列 使用一个参数的函数（一些函数在传入不同个数的参数，可以执行不同的功能）
或者 让 一个参数 事先传入部分参数（但先不执行）来作为 某种特殊意义的 另一个函数，例如：
  // 示意ajax函数
  function ajax(type, url, data) {}
  ajax('POST', 'www.test.com', "name=kevin") // 调用
  // 利用 curry 封装 ajax
  var ajaxCurry = curry(ajax);
  // 以 POST 类型请求数据
  var post = ajaxCurry('POST');
  post('www.test.com', "name=kevin");

curry(fn,args) 逻辑:
1 . 第一个参数fn为需要 处理的 函数， 后面的参数为 后续添加的 参数
2 . 事先要获取fn 的 所需参数 个数 （fn.length属性可获得）
3 . curry() 返回一个函数‘function’ 在function 中 获取 fn 已经 传入的参数 以及curry() 所接受的args
4 . 拼接fn的传参 和 curry 的 传参(args) 并且 将拼接后的传参数 与 fn 的所需传参数比较
5 . 未达到 fn的 所需参数个数，function 继续返回 一个 curry，接收 fn 和当前 的拼接参数， 
6 . 已达到参数个数， 执行 fn
*/

function curry(fn,args){
  var length = fn.length // 获取传入参数 fn 的 （需要）传参个数（func.length 获得的是需要传参，不是已经传参）
  var args = args || []

  // curry 返回一个参数
  return function(){
    var _args = args.slice(0), // _args 为 传入 curry() 中的所有args（排除第一个fn参数）
        arg, i

    // 遍历 输出的 function 所接受的传参
    for (i = 0; i < arguments.length; i++) {
      arg = arguments[i]; // 当前遍历的参数
      _args.push(arg) // 将 新return的function 所接受的每个参数 拼接到原 fn(curry第一个参数)的参数里面
    }

    // _args是原fn的参数 和 后来输出function 接受的参数 ， 与 fn(curry第一个参数) 的所需参数长度 比较
    if(_args.length<length){ // （通过function）新接受的参数 未达到 fn 的 要求传参数量
      
      return curry.call(this,fn,_args) // 返回的function 继续 返回 curry()函数 ， 并且 把已经接收到的 _args 传入curry()  
    
    }else{ // _args 达到 fn 的所需参数个数后

      return fn.apply(this,_args) // 执行 fn
    
    }    
  }
}

export default curry