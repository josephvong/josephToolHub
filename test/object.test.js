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

    // 测试 deepCopy 函数
    describe('测试deepCopy()函数',()=>{
        let Obj = {
          a:'a', b:'b', c:[1,2,3],
          d:{e:'cc',f:'dd'},
          e:{a:{b:'1'},c:[0]}
        }
        let NewObj = josephfn.deepCopy(Obj);
        NewObj.c[1] = 'fff'
        NewObj.e.a = '' 
        it('Obj.c[1]没变化',()=>{assert(Obj.c[1]!==NewObj.c[1])})
        it('Obj.e.a没变化',()=>{assert(Obj.e.a!==NewObj.e.a)})
    })
})