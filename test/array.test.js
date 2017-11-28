/*describe('Array API:', function () {
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
*/
describe('Array API',function(){
    describe('#arrayEqual()', function () {
        it('should return false',()=>{
            assert.notEqual(josephfn.arrayEqual([0, 2, 3], [1, 2, 3]))
        })
        it('should return true',()=>{
            assert(josephfn.arrayEqual([1, 2, 3], [1, 2, 3]))
        })
    })
})