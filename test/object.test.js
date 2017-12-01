describe('Object API:',()=>{
    // 测试 getIndex函数
    describe('#isPlainObject()',()=>{
        function Person(name) { this.name = name; } 
         
        it(`josephfn.getIndex({}) return true`,()=>{ 
            assert( josephfn.isPlainObject({})  )
        })

        it(`josephfn.getIndex(new Object) return true`,()=>{ 
            assert( josephfn.isPlainObject(new Object)  )
        })

        it(`josephfn.getIndex(Object.create(null)) return true`,()=>{ 
            assert( josephfn.isPlainObject(Object.create(null))  )
        })

        it(`josephfn.getIndex(Object.assign({a: 1}, {b: 2})) return true`,()=>{ 
            assert( josephfn.isPlainObject(Object.assign({a: 1}, {b: 2})) )
        })

        it(`josephfn.getIndex(new Person('yayu')) return false`,()=>{ 
            assert( !josephfn.isPlainObject(new Person('yayu'))  )
        })

        it(`josephfn.getIndex(Object.create({})) return false`,()=>{ 
            assert( !josephfn.isPlainObject(Object.create({})) )
        })
         
    })

    // 测试 detectNum 函数
    describe('#extend()',()=>{
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
        it(`josephfn.extend(obj1,obj2) is true`,()=>{ 
            assert( josephfn.equal(josephfn.extend(obj1, obj2),{a:1,b:{c:[5]}}) )
        }) 
    }) 
})