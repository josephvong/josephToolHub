describe('Array API:', function () {
    describe('#arrayEqual()', function () {
        it(`joseph.arrayEqual([0, 2, 3], [1, 2, 3]) should return false`, function () {
            assert.notEqual(josephfn.arrayEqual([0, 2, 3], [1, 2, 3]))
        });
        it('joseph.arrayEqual([1, 2, 3], [1, 2, 3]) should return true', function () {
            assert(josephfn.arrayEqual([1, 2, 3], [1, 2, 3]))
        });
        let arr = [8, 2, 3, 4, 7, 8]
        it(`joseph.arrayEqual([${arr},${arr}]) should return true`, function () {
            assert(josephfn.arrayEqual(arr, arr))
        });
    });
});

describe('Array API',function(){
    describe('#arrayEqual()', function () {
        it('should return false',()=>{
            assert.notEqual(josephfn.equal([0, 2, 3], [1, 2, 3]))
        })
        it('should return true',()=>{
            assert(josephfn.equal([1, 2, 3], [1, 2, 3]))
        })
    })
    let mbArr = [1,2,3,4,3,1,'a','b','a']; // 有重复的常规数据数组
    let ubArr = [1,2,3,4,'a','b'];         // 无重复的常规数据数组
    let mdArr = [{a:'1'},{a:1},2,3,'c','c',2,{a:1},{b:1}] // 
    let udArr = [{a:'1'},{a:1},2,3,'c',{b:1}] //[{a:'1'},{a:1},2,3,'c','c',2,{a:1},{b:1}] //
    describe('#arrayUnique()',function(){
        it('常规数组去重成功',()=>{
            let fixArr = josephfn.arrayUnique(mbArr);
            assert(josephfn.equal(ubArr,fixArr))
        })

        it('引用型数组去重成功',()=>{
            let fixArr2 = josephfn.arrayUnique(mdArr);
            console.log(fixArr2)
            console.log(udArr)
            assert(josephfn.equal(udArr,fixArr2))
        })
    })
})

