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

    // 测试 detectNum 函数
    describe('#detectNum()',()=>{
        const str = "12345674"
        const str2 = "12345674."   
        it(`josephfn.detectNum(12345674) is true`,()=>{
            // js的数组不能直接用 === 来判断全等, 通过josephfn.arrayEqual函数来判断
            assert( josephfn.detectNum(str) )
        })
        it(`josephfn.detectNum(12345674.) is false`,()=>{ 
            assert(!josephfn.detectNum(str2) )
        })
    })

    // 测试 firstLetterUpper 函数
    describe('#firstLetterUpper()',()=>{      
        it(`abcd => Abcd`,()=>{ 
            assert( josephfn.firstLetterUpper('abcd')==="Abcd" )
        }) 
    })

    // 测试 trim 函数
    describe('#trim()',()=>{      
        it(`' abv d ' => 'abv d'`,()=>{ 
            assert(josephfn.trim(' abv d ') == 'abv d' )
        }) 
    })

    // 测试 toCamelStyle 函数
    describe('#toCamelStyle()',()=>{      
        it(`去除字符中间_`,()=>{ 
            assert(josephfn.toCamelStyle('abee__cdd_efg') ==='abeeCddEfg')
        })
        it(`保留开头第一个 _`,()=>{ 
            assert(josephfn.toCamelStyle('_ab_cdd_efg')==='_abCddEfg')
        })
    })


    // 测试 removeNum 函数
    describe('#removeNum()',()=>{      
        it(`'2asd30fs6df'=>'asdfsdf'`,()=>{ 
            assert( josephfn.removeNum('2asd30fs6df') ==='asdfsdf' )
        }) 
    })

    // 测试 strReverse 函数
    describe('#strReverse()',()=>{      
        it(`'abcdefgh'=> 'hgfedcba' `,()=>{ 
            assert( josephfn.strReverse('abcdefgh') ==='hgfedcba' )
        })
    })
})