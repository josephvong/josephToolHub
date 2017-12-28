var elementStyle = document.createElement('div').style

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

function prefixStyle(style){  // 参数为 css 样式属性
  if(vendor === false){ // 没有 供应商前缀返回
    return false   // 返回
  }
  if(vendor === 'standar'){ //如果为基础 css 属性
    return style   // 直接返回 style
  }
  return vendor + style.charAt(0).toUpperCase() + style.substr(1)
  // 返回 前缀 和 style属性名 首字母大写 拼接后的 样式 属性名
}

// console.log(prefixStyle('transform')) // webkitTransform

export default prefixStyle



