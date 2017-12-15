//getPos(obj): 该函数用于获取当前页面中某个元素离body的left和top距离。 无论这个元素外面有多少个有定位的父级元素，都可使用。参数为要检测的obj
//用法：如果要获得json内的值可以用“var L=getPos(obj).left / var T=getPos(obj).top” 来获取
function getPos(obj){
  var pos = {left:0,top:0}
  while (obj){
    pos.left += obj.offsetLeft;
    pos.top += obj.offsetTop;
    obj = obj.offsetParent
  }
  return pos
}

export default getPos