/*
  判断 dom 对象里面 是否 存在 某个类名
  参数 ele：dom对象， cls：检测类名
  输出 boolean 
*/
function hasClass(ele,cls){
  return (new RegExp('(\\s|^)' + cls + '(\\s|$)')).test(ele.className);
}

export default hasClass