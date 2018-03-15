
/*
在使用 js 定义 style 的属性 值 时， 自动 添加对应 浏览器商家前缀的 函数
prefixStyle('transform') => 输出 webkitTransform  （由于输出在js里面使用，因此使用驼峰法）
*/

let elementStyle = document.createElement('div').style 

var vendor = (()=>{
  var transformNames = {  // 定义一个 需要各个 浏览器前缀 的 css 属性 集合
    webkit:'webkitTransform',
    Moz:'MozTransform',
    O:'OTransform',
    ms:'msTransform',
    standard:'transform'
  }
  for(var key in transformNames){ // 遍历上面的json
    if(elementStyle[transformNames[key]]!==undefined){
      return key
    }
  }
  return false 
})() 

function prefixStyle(style){
  if(vendor === false){
    return false
  }
  if(vendor==='standar'){
    return style
  }
  return vendor + style.charAt(0).toUpperCase() + style.substr(1)
}

export default prefixStyle
