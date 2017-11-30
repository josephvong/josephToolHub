// 判断 是否闰年 的函数 参数 year（数字）
function isLeapYear(year){
  if (year%4==0 && year%100!=0) // 能够被4 整除 且不是 千年
  {
    return true;
  }else{        
    if (year%400==0)  // 或者能够被 400 整除 的年份
    {
      return true;
    }else{
      return false;
    }
  }
}

export default isLeapYear



