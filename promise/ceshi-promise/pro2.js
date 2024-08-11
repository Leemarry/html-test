/*
 * @Date: 2024-08-09 08:33:46
 * @LastEditors: likai 2806699104@qq.com
 * @FilePath: \html-test\promise\ceshi-promise\pro2.js
 * @Description: Do not edit
 */
async function sny1(){
    await sny2()
    console.log('33');
  }
  
  
  const  sny2 = async()=>{
    await setTimeout(() => {
      Promise.resolve().then(()=>{
        console.log('Promise');
      })
      console.log('pppp');
      
      
    }, 0);
  }
  
  
  const sny3 =()=>{
    Promise.resolve().then(()=>{
      console.log('p');
    })
  }
  
  
  sny1()
  sny3()