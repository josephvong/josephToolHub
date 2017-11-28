describe('String API:',()=>{
    // 测试 getIndex函数
    describe('#getIndex()',()=>{
        const str = "abcdefgabcdefg" // str 
        const search = 'def' // target
        const result_a = [3,10] 
        const result_b = [10]  
        it(`josephfn.getIndex(str,search)===[3,10]`,()=>{
            // js的数组不能直接用 === 来判断全等, 通过josephfn.arrayEqual函数来判断
            assert( josephfn.arrayEqual(josephfn.getIndex(str,search),result_a) )
        })
        it(`josephfn.getIndex(str,search,4)===[10]`,()=>{ 
            assert(josephfn.arrayEqual(josephfn.getIndex(str,search,4),result_b) )
        })
    })

    //
})