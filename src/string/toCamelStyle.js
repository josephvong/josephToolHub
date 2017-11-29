//toCamelStyle(str)：字符串转为驼峰写法的函数。
//字符串中间 有 一个 或多个 _ 清除，并将后面的 字母设置大写
// 字符串开头 一个 或多于一个 _ ， 保留一个_ 
function toCamelStyle(str){
  var str2 = null

  var arr = str.split('') //将 字符串拆分为 数组

  var re1 = /[_]+/g;  // 判断字符串中间多于1个下划线
  var re2 = /^_+/g;   // 以 不定个 下划线开头

  for (var i = 0; i < arr.length; i++) { 
    if(arr[i]=="_" && i!=0){
      //如果当前 arr[i] 是 _ 且 i 不是第一个(!=0)
      arr[i+1] = arr[i+1].toUpperCase()// 将 _ 后面第一个 元素(字母)改为大写
    }  
  }
  str2 = arr.join('')
  str2 = str2.replace(re1,"")

  if(str.charAt(0)!='_'){
    str2 = str2
  }else if(str.charAt(0)=="_"){
    str2="_"+str2
  }
  return str2
}

export default toCamelStyle


/*
console.log(toCamelStyle('abee__cdd_efg')) // abeeCddEfg
console.log(toCamelStyle('__ab_cdd_efg')) // _AbCddEfg
console.log(toCamelStyle('_ab_cdd_efg'))  // _abCddEfg
*/
