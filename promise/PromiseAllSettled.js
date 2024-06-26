/*
 * @Date: 2024-06-26 14:57:50
 * @LastEditors: likai 2806699104@qq.com
 * @LastEditTime: 2024-06-26 15:03:24
 * @FilePath: \cshiDemo\promise\PromiseAllSettled.js
 * @Description: Promise.allSettled
 */

var p1 = new Promise((resoleve, reject) => {
    setTimeout(() => {
      console.log("----打印：p1");
      resoleve("p1--3000");
    }, 3000);
  });
   
  let p2 = new Promise((resoleve, reject) => {
    setTimeout(() => {
      reject("p2--1000");
    }, 1000);
  });
   
  let p3 = new Promise((resoleve, reject) => {
    setTimeout(() => {
      resoleve("p3--500");
    }, 500);
  });
   
  let p4 = new Promise((resolve, reject) => {
    throw new Error("抛出错误");
  });
   
  
  Promise.allSettled([p1, p2, p3, p4])
    .then((result) => {
      console.log("----打印：result", result);
    })
    .catch((err) => {
      console.log("----打印：", err); //不执行
    });
   
  //执行结果
  // ----打印：p1
  // ----打印：result [
  //   { status: 'fulfilled', value: 'p1--3000' },
  //   { status: 'rejected', reason: 'p2--1000' },
  //   { status: 'fulfilled', value: 'p3--500' },
  //   {
  //     status: 'rejected',
  //     reason: Error: 抛出错误
  //   }
  // ]
  
