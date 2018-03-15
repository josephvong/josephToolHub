// 判断 是否 PC端 
function isPC() {
  var userAgentInfo = navigator.userAgent;
  var Agents = ["Android", "iPhone", "BlackBerry",
              "SymbianOS", "Windows Phone",
              "iPad", "iPod"];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
          flag = false;
          break;
      }
  }
  return flag;
}
export default isPC
//isPC() // PC 为true
