//firstLetterUpper(str)： 首字母大写函数，参数为字符串对象“str”
function firstLetterUpper(str){
  var res="";
  if (typeof str=="string")
  {
    res=str.charAt(0).toUpperCase()+str.substring(1);
  }else{  //substring(1)一个参数，表示返回截取该参数前的所有字符内容后的字符串
    res=str;
  }
  return res;
}

export default firstLetterUpper

/*
console.log(firstLetterUpper('abcd'))  // Abcd 
*/