/*
  清除 字符串内 的 数字
*/

function removeNum(str){
  var re=/\d+/g;
  var str1=str.replace(re,"");
  return str1;
}

export default removeNum

//console.log(removeNum('2asd30fs6df')) //'asdfsdf'