//getDis(obj1,obj2)：获取两个对象中心点之间的距离（获取一个数）参数为两个对象
function getDis(obj1,obj2){ //获取两个对象之间的距离函数
  var a=(obj1.offsetLeft+obj1.offsetWidth/2)-(obj2.offsetLeft+obj2.offsetWidth/2);
  var b=(obj1.offsetTop+obj1.offsetHeight/2)-(obj2.offsetTop+obj2.offsetHeight/2);
  return Math.sqrt(a*a+b*b);
}

export default getDis


