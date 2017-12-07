/*
  获取 dom 的 样式属性：
  参数;ele: dom 节点 ， attr 样式属性
  功能： 获取 dom的 单个 css 样式属性值（包括 行间样式、css文件设置的样式、浏览器默认样式）
  getStyle 不能获取 如 background flex-flow 这类 复合函数式 的 样式属性值
*/

function getStyle(ele,attr){ //解决兼容问题的样式提取（只能提取单一样式）
  if (ele.currentStyle)
  {
    return ele.currentStyle[attr]; //currentStyle：IE获取对象非行间样式
  }else{
    return getComputedStyle(ele,false).getPropertyValue(attr);//getComputedStyle：FF获取对象非行间样式
  } 
}

export default getStyle

/*getStyle() 使用要注意的问题：
1. 该函数仅获取单一样式，复合样式如background无效
2. 获取颜色属性值时，IE（currentStyle）会获取颜色名称，FF（getComputedStyle）会获取颜色的组成数据“（0,0,64）” 不能用来做判断。
3. getStyle中的attr参数字符串不能有空格
4. 尽量不要用getStyle去获取未用CSS自行设置的样式。（因为不同浏览器有不同的自定义样式）

测试：
css：
#test{
  width:100px;
  height:100px;
  background: red;
}
html:
<div id="test" style="border:1px solid blue"></div>
js:
var ele = document.querySelector('#test')
console.log(josephfn.getStyle(ele,'width')) // 100px 获取 css中设置的样式
console.log(josephfn.getStyle(ele,'background')) // 获取background 复合样式属性 无效（background 是个 函数式的 属性） 
console.log(josephfn.getStyle(ele,'border')) // 获取 dom的行间样式
console.log(josephfn.getStyle(ele,'font-size')) // 16px 获取默认样式 chrome浏览器  默认字体是 16px

*/