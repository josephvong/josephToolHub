/**
* 
* @desc   格式化现在距${endTime}的剩余时间
* @param  {Date} endTime （）  
* @return {String}
*/
function formatRemainTime(endTime){
  var startDate = new Date(); // 当前时间 可以是 时间格式字符串 如 '2017-11-30 18:30'
 
  var endDate = new Date(endTime); // 设置的到期时间

  var t = endDate.getTime() - startDate.getTime();

  var d=0,h=0,m=0,s=0; // 日 时 分 秒

  if(t>0){ // 若剩余时间大于 0
    d = Math.floor(t/(24*3600*1000)); // 剩余天
    h = Math.floor((t/(60*60*100))%24); // 剩余小时
    m = Math.floor((t/(60*1000))%60);
    s = Math.floor((t/1000)%60);
  }
  return d + "天 " + h + "小时 " + m + "分钟 " + s + "秒";
}
export default formatRemainTime
//console.log(formatRemainTime('2017-11-30 18:30'))