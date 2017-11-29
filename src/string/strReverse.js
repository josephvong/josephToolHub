/*
字符串翻转输出
*/
function strReverse(str){
  var arr1=str.split("");
  var arr2=[];
  for (var i=arr1.length-1;i>=0 ;i-- )
  {
    arr2.push(arr1[i]);
  }
  var str2=arr2.join("");
  return str2;
}

export default strReverse

//console.log(strReverse('abcdefgh')) // hgfedcba