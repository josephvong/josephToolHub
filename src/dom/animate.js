//时间控制板运动框架---------------------------------------------------------------------------------
//startMove(obj,json,times,fx,fn): 时间控制型运动框架函数（对应Move()为“速度控制型”运动框架），根据时间的长短来完成指定的运动过程。
//startMove()的参数：obj和json为必要参数，times(运动时间,默认400),fx(运动模式,默认为"linear"匀速),fn(回调函数)为非必要参数。
//fx参数解释：参数值以“字符串”形式输入 参数值为“Tween算法”json中的函数名， 调用不同的算法函数达到不同的运动效果
function startMove(obj,json,times,fx,fn){
  //判断参数(times、fx和fn)的取值，这三个参数为非必要参数，函数内设定默认值
  if (typeof times=='undefined') {
    times=400;        //无参数“times、fx和fn”的情况下，默认时间400微秒，匀速
    fx='linear';
  }
  if (typeof times=='string'){    //如果函数内无times参数值，但有fx参数值 时
    if (typeof fx=="function"){   //在此情况下，加入还有 fn 参数，让原来在“fx”位置上的那个参数值变为‘fn’的参数值
      fn=fx;
    }
    fx=times;       //原来times参数位置上的参数值变为fx的参数值
    times=400;        //times的参数值默认400
  }

  else if (typeof times=='function'){  //既无times参数值，也无fx参数值，只有fn参数值时：
    fn=times;       //将原来times参数位置上的参数值指向参数“fn”
    times=400;        //times默认400，fx默认 linear（匀速）
    fx='linear';
  }
  else if (typeof times=='number'){ //若只有时间，但没有fx的参数值
    if (typeof fx=="function")
    {
      fn=fx;          //fx参数的位置是个函数时，将这个位置的值指向fn参数
      fx='linear';      //默认fx为‘linear’
    }else if (typeof fx=='undefined')
    {
      fx='linear'; //若fx参数位置的值不存在，fx的值默认为'linear'
    }
  }

  var iCur={}; //创建一个空json变量，用于存放参数json中的各个属性的当前值
  for (var attr in json )// 轮询参数json获取运动对象中的运动属性的当前值
  {
    iCur[attr]=0;
    if (attr=="opacity")
    {
      iCur[attr]=parseInt(parseFloat(getStyle(obj, attr))*100);
    }else{
      iCur[attr]=parseInt(getStyle(obj, attr));
    }
  }

  var startTime=now(); //获取开始运动前的当前时间点

  clearInterval(obj.timer);
  obj.timer=setInterval(function(){
    var changeTime=now(); //运动过程中计算当前的时间点
    var t=times-Math.max(0,startTime-changeTime+times); //计算当前时间在总运动时长中的的时间点

    for (var attr in json )
    {
      var value=Tween[fx](t,iCur[attr],json[attr]-iCur[attr],times);

      if (attr=='opacity')
      {
        obj.style.opacity=value/100;
        obj.style.filter='alpha(opacity='+value+')';
      }else{
        obj.style[attr]=value+'px';
      }
    }

    if (t==times)
    {
      clearInterval(obj.timer);
      if (fn){
        fn.call(obj);
      }
    }
  },13)//13微秒循环一次定时器（预设值）

  /*function getStyle(obj,attr){
    if(obj.currentStyle){
      return obj.currentStyle[attr];
    }
    else{
      return getComputedStyle(obj,false)[attr];
    }
  }*/
  //获取当前时间点的函数：从1970年到当前系统时间的总微秒数。
  function now(){
    return (new Date()).getTime();
  }

}

/* Tween算法的运动效果参数列表：
普通运动类：
1. "linear": 匀速运动； 2. "easeIn": 加速运动； 3. "easeOut"： 减速运动
明显加减速运动：
1. "easeInStrong"：双倍加速运动，更明显前慢后快
2. "easeOutStrong"：双倍加速运动，更明显前快后慢
3. "easeBothStrong"：明显的两头慢中间快
低速弹性运动
1. "elasticIn" ：运动开始前慢速震动后在运动（弹动渐入）
2. "elasticOut" ：弹性效果结束运动（结束时缓慢来回震动）
3. "elasticBoth"：运动开头与结束有缓慢弹性效果
高速弹性（震动）运动
1. "bounceIn"：以快速震动来开始运动（高速弹性开始）
2. "bounceOut"：以快速震动来结束运动（高速弹性结束）
3. "bounceBoth"：开始于结束运动时都有快速的震动
缩进及拉回式运动
1. "backIn")：运动开始前先向反方向缩进一段小距离（类似弹弓式的弹出）
2. "backOut")：到达目标后超过少部分后拉回（结束运动仅被拉回，无弹性效果）
3. "backBoth")：运动开始前先反方向缩进，到达目标后越过目标值然后被拉回
*/

//Tween算法的json集合：存放各类Tween运动的算法函数。不同json值对应不同的的运动模式的算法，供运动框架函数调用
var Tween = {
  linear: function (t, b, c, d){  //匀速
    return c*t/d + b;
  },
  easeIn: function(t, b, c, d){  //加速曲线
    return c*(t/=d)*t + b;
  },
  easeOut: function(t, b, c, d){  //减速曲线
    return -c *(t/=d)*(t-2) + b;
  },
  easeBoth: function(t, b, c, d){  //加速减速曲线
    if ((t/=d/2) < 1) {
      return c/2*t*t + b;
    }
    return -c/2 * ((--t)*(t-2) - 1) + b;
  },
  easeInStrong: function(t, b, c, d){  //加加速曲线
    return c*(t/=d)*t*t*t + b;
  },
  easeOutStrong: function(t, b, c, d){  //减减速曲线
    return -c * ((t=t/d-1)*t*t*t - 1) + b;
  },
  easeBothStrong: function(t, b, c, d){  //加加速减减速曲线
    if ((t/=d/2) < 1) {
      return c/2*t*t*t*t + b;
    }
    return -c/2 * ((t-=2)*t*t*t - 2) + b;
  },
  elasticIn: function(t, b, c, d, a, p){  //正弦衰减曲线（弹动渐入）
    if (t === 0) {
      return b;
    }
    if ( (t /= d) == 1 ) {
      return b+c;
    }
    if (!p) {
      p=d*0.3;
    }
    if (!a || a < Math.abs(c)) {
      a = c;
      var s = p/4;
    } else {
      var s = p/(2*Math.PI) * Math.asin (c/a);
    }
    return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
  },
  elasticOut: function(t, b, c, d, a, p){    //正弦增强曲线（弹动渐出）
    if (t === 0) {
      return b;
    }
    if ( (t /= d) == 1 ) {
      return b+c;
    }
    if (!p) {
      p=d*0.3;
    }
    if (!a || a < Math.abs(c)) {
      a = c;
      var s = p / 4;
    } else {
      var s = p/(2*Math.PI) * Math.asin (c/a);
    }
    return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
  },
  elasticBoth: function(t, b, c, d, a, p){
    if (t === 0) {
      return b;
    }
    if ( (t /= d/2) == 2 ) {
      return b+c;
    }
    if (!p) {
      p = d*(0.3*1.5);
    }
    if ( !a || a < Math.abs(c) ) {
      a = c;
      var s = p/4;
    }
    else {
      var s = p/(2*Math.PI) * Math.asin (c/a);
    }
    if (t < 1) {
      return - 0.5*(a*Math.pow(2,10*(t-=1)) *
          Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    }
    return a*Math.pow(2,-10*(t-=1)) *
        Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
  },
  backIn: function(t, b, c, d, s){     //回退加速（回退渐入）
    if (typeof s == 'undefined') {
       s = 1.70158;
    }
    return c*(t/=d)*t*((s+1)*t - s) + b;
  },
  backOut: function(t, b, c, d, s){
    if (typeof s == 'undefined') {
      s = 3.70158;  //回缩的距离
    }
    return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
  },
  backBoth: function(t, b, c, d, s){
    if (typeof s == 'undefined') {
      s = 1.70158;
    }
    if ((t /= d/2 ) < 1) {
      return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
    }
    return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
  },
  bounceIn: function(t, b, c, d){    //弹球减振（弹球渐出）
    return c - Tween['bounceOut'](d-t, 0, c, d) + b;
  },
  bounceOut: function(t, b, c, d){
    if ((t/=d) < (1/2.75)) {
      return c*(7.5625*t*t) + b;
    } else if (t < (2/2.75)) {
      return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
    } else if (t < (2.5/2.75)) {
      return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
    }
    return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
  },
  bounceBoth: function(t, b, c, d){
    if (t < d/2) {
      return Tween['bounceIn'](t*2, 0, c, d) * 0.5 + b;
    }
    return Tween['bounceOut'](t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
  }
}

