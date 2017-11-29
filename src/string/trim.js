//trim(str)：自动检测字符串首尾空格，并删除首尾空格
function trim(str){
  var re1=/^\s+/g;  //以多个空格开头
  var re2=/\s+$/g;  //以多个空格结尾
  return str.replace(re1,"").replace(re2,"");
}
export default trim
/*
trim(' abv d ') == 'abv d'
*/