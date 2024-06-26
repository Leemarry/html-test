/*
 * @Date: 2024-06-26 09:03:27
 * @LastEditors: likai 2806699104@qq.com
 * @LastEditTime: 2024-06-26 16:01:55
 * @FilePath: \cshiDemo\promise\Promise2.js
 * @Description: Do not edit
 */

let resolveP = new Promise((resolve, resject) => {
  resolve("success");
});
console.log("----打印：", resolveP);
//执行结果
//----打印： Promise {<fulfilled>: 'success'}
let rejectP = new Promise((resolve, resject) => {
  resject("rejected");
});
console.log("----打印：", rejectP);
 
//执行结果
// Promise {<rejected>: 'rejected'}


//#region 

let p = new Promise((resoleve, reject) => {
    setTimeout(() => {
      resoleve("返回值");
    }, 1000);
  }).then(res => {
    console.log("----打印：", res);
  }
);
   
  const backP = p.then((res) => {
    console.log("----打印：res", res,backP);
  });

  const finallyBackP = backP.then((res) => {
    return "又有数据";
  });
  setTimeout(() => {
    console.log("----打印：backP", backP);
  }, 2000);
  setTimeout(() => {
    console.log("----打印：finallyBackPP", finallyBackP);
  }, 3000);
   
  //执行结果
  // ----打印：res 返回值
  // ----打印：backP Promise {<fulfilled>: undefined}
  //----打印：finallyBackPP Promise {<fulfilled>: '又有数据'}

//#endregion




