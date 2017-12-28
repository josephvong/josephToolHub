//getTop(obj) // 获取 obj离整个HTML文件顶端的offsetTop值（总高度），参数为要获取总offsetTop的对象。
function getTop(obj) {
  var iTop = 0;
  while(obj) {
    iTop += obj.offsetTop;  //obj的当前offsetTop值
    obj = obj.offsetParent; //循环让obj的父级取代obj，再计算其父级的offsetTop。
  }             //一路循环直到最顶层
  return iTop;
}
export default getTop