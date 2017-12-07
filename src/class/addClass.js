/*
  addClass(ele,cls): 给dom节点 添加 样式类
  参数 ele： 添加类的dom节点  cls： 样式类名
  没有返回值

  addClass() 执行需要 调用 hasClass() 函数 
*/

var hasClass = require('./hasClass').default;

function addClass(ele,cls){
  if(hasClass(ele,cls)){ return }// 如果ele没有 需要添加的类
  let newClass = ele.className.split(' ')
  newClass.push(cls)
  ele.className = newClass.join(' ') 
  
}

export default addClass