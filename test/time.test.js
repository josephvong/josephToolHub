describe('Time API:',()=>{  
    // 测试 chnDay 函数
    describe('#chnDay()',()=>{      
        it(`正确输出星期五`,()=>{ 
            var date = new Date('2017-12-01')
            assert( josephfn.chnDay(date.getDay())==="星期五" )
        }) 
    })

    describe('#dateFormat()',()=>{      
        it(`dateFormat 完成 时间格式化`,()=>{ 
            var nowDate = new Date(1511953982470);  
            assert( josephfn.dateFormat(nowDate,"yyyy-MM-dd hh:mm:ss")==='2017-11-29 19:13:02' )
            assert( josephfn.dateFormat(nowDate,"yyyy-MM-dd hh:mm")==='2017-11-29 19:13' )
            assert( josephfn.dateFormat(nowDate,"yyyy-MM-dd hh")==='2017-11-29 19')
            assert( josephfn.dateFormat(nowDate,"yyyy-MM-dd")==='2017-11-29') 
        }) 
    })

    describe('#formatPassTime()',()=>{      
        it(`formatPassTime 格式化`,()=>{ 
            var nowDate = new Date('2017-12-01 10:00'); 
            console.log(`formatPassTime(timeobj):${josephfn.formatPassTime(nowDate.getTime())}`)
            console.log(`formatPassTime(string):${josephfn.formatPassTime('2017-12-01 10:30')}` ) 
        }) 
    })
    describe('#formatRemainTime()',()=>{      
        it(`formatRemainTime 格式化`,()=>{  
            console.log(`formatPassTime(string):${josephfn.formatRemainTime('2017-12-01 23:00')}` ) 
        }) 
    })
})