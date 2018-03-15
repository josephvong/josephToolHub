/**
 * 
 * @desc 数组去重（任意数据类型： 对象,函数,基本类型 ）
 * @param {Array}  
 */
function arrayUnique(arr){
    var temp,arrVal
    var array = arr
    var arrClone = arr.concat() // 复制一份数组

    var typeArr = {
        'obj' : '[object Object]',
        'fun' : '[object Function]',
        'arr' : '[object Array]',
        'num' : '[object Number]'  // Object.prototype.toString.call(NaN) 的输出
    }

    var ent = /(\u3000|\s|\t)*(\n)+(\u3000|\s|\t)*/gi;//空白字符正则 (用于将function 转化为字符串时使用)

    for (var i = arrClone.length ; i >= 0; i--) {
        arrVal = arrClone[i];
        temp = Object.prototype.toString.call(arrVal); //得出当前元素的 类型字符串

        if(temp == typeArr['num'] && arrVal.toString() == 'NaN'){ // 若元素为NaN
            arrClone[i] = arrVal.toString() // 将 当前元素 转化为 字符串
        }
        if(temp == typeArr['obj']){  // 若 元素类型为 object
            arrClone[i] = JSON.stringify(arrVal) // 将当前元素（obj）转化为字符串
        }
        if(temp == typeArr['fun']){ // 若元素类型为 函数
            arrCline[i] = arrVal.toString().replace(ent,'')// 将当前元素(fn)转为字符串，并去除换行和空格
        }
    }

    // 遍历去重
    for (var i = arrClone.length; i >= 0; i--) {
    // 此时 arrClone 中的 元素，只有 arr类型 和 其他基本类型（没有 fn/obj等其他类型了）
        arrVal = arrClone[i];
        temp = Object.prototype.toString.call(arrVal); //得出当前元素的 类型字符串

        if(temp == typeArr['arr']){ // 元素 是个数组，递归调用去重函数
            arrayUnique(arrVal)
        } 

        // 判断当前元素的 首次出现位置 与 最后出现的位置 是否相等
        if(arrClone.indexOf(arrVal) !== arrClone.lastIndexOf(arrVal) ){ // 若不相等，表示 arrVal 有重复
            array.splice(i,1);     // 在原数组中 将当前 元素i 删除
        arrClone.splice(i, 1); // 同时删除 复制的 数组
        }else{ // 如果 当前元素 是唯一（没有其他重复）

            // 判断原数组中的当前index 元素 的类型，如果与temp(克隆数组当前元素的类型)不一样
            if(Object.prototype.toString.call(array[i]) != temp ){ // 表示克隆数组中的当前元素曾经被转化过为字符串
                arrClone[i] = array[i] // 用原来的 数组中的 当前元素 对其重新覆盖
            }
        }       
    }
    return arrClone;
}

export default arrayUnique 
//console.log(arrayUnique(objArr))
