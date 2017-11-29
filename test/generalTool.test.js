describe('GeneralTool API:',()=>{
    // 测试 getIndex函数
    describe('#equal()',()=>{ 
        
        it(`0 0 对比 true`,()=>{ 
            //console.log(josephfn.equal(0, 0))
            assert( josephfn.equal(0, 0) ) // true
        })

        it(`0 -0 对比 false`,()=>{ 
            assert( !josephfn.equal(0, -0) ) // false
        })

        it(`0 0 对比 true`,()=>{ 
            assert( josephfn.equal(0, 0) ) // true
        })

        it(`NaN 对比 true`,()=>{ 
            assert( josephfn.equal(NaN, NaN) ) // true
        })

        it(`number(NaN) 对比 true`,()=>{ 
            assert( josephfn.equal(Number(NaN), Number(NaN)) ) // true
        })

        it(`'Curly' 和 new String('Curly') 对比 true`,()=>{ 
            assert( josephfn.equal('Curly', new String('Curly')) ) // true
        })
 
        it(`数组 对比 true`,()=>{ 
            assert( josephfn.equal([1], [1]) ) // true
        })
        it(`对象对比 true`,()=>{ 
            assert( josephfn.equal({ value: 1 }, { value: 1 }) ) // true
        })

        var a, b; 
        a = { foo: { b: { foo: { c: { foo: null } } } } };
        b = { foo: { b: { foo: { c: { foo: null } } } } };
        a.foo.b.foo.c.foo = a;
        b.foo.b.foo.c.foo = b;
        
        // true 
        it(`循环引用 true`,()=>{ 
            assert( josephfn.equal(a, b) ) // true
        }) 
    })
})