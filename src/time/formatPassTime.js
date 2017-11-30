/**
* @desc   格式化${startTime}距现在的已过时间
* @param  {Date} startTime  startTime 可以是 是毫秒数 new Date(1512036000000)类型，也可以是'2017-11-30 18:00'
* @return {String}
*/

function formatPassTime(startTime){
  var currentTime = Date.parse(new Date()) // 将当前时间转化为累计毫秒数 （Date.parse(dateString) 分析一个包含日期的字符串，获取累计毫秒数）
  var start = typeof(startTime)!=="string"?startTime:new Date(startTime)
  var time = currentTime - start;
  if (time<0){
    return '未开始'
  } 
  var day = parseInt(time / (1000 * 60 * 60 * 24)),
      hour = parseInt(time / (1000 * 60 * 60)),
      min = parseInt(time / (1000 * 60)),
      month = parseInt(day / 30),
      year = parseInt(month / 12);
  if (year) return year + "年前"
  if (month) return month + "个月前"
  if (day) return day + "天前"
  if (hour) return hour + "小时前"
  if (min) return min + "分钟前"
  else return '刚刚'
}
export default formatPassTime
//console.log(new Date('2017-11-30 18:00').getTime())
//console.log(formatPassTime(new Date(1512036000000)))
