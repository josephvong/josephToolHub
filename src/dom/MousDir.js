//MousDir(obj,e)：获取鼠标离某对象中心点之间的距离，参数obj为检测对象，e为事件onmousemove中的event对象。
function MousDir(obj,e){
  var a=(obj.offsetLeft+obj.offsetWidth/2)-e.clientX;
  var b=(obj.offsetTop+obj.offsetHeight/2)-e.clientY;
  return Math.sqrt(a*a+b*b);
}

export default MousDir