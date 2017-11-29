const joseph = require('./josephfn.min.js')
//import joseph from './josephfn.min.js'
let str = "abcdefgabcdefg"
let search = 'def'
console.log(joseph.getIndex(str,search)) 
// [3,10]表示第一次出现def的地方为3，第二次出现def的地方为10

//console.log(getIndex(str,search,5))
//[10] 表示从index为5开始搜索，第一次出现def的位置为 10

var obj1 = {
    a: 1,
    b: {
        c: 2
    }
} 
var obj2 = {
    b: {
        c: [5], 
    }
} 
var d = joseph.extend(obj1, obj2)
console.log(d) 