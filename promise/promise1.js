/*
 * @Author: likai ‘766173427@qq.com’
 * @Date: 2024-06-18 13:20:21
 * @LastEditors: likai 2806699104@qq.com
 * @LastEditTime: 2024-06-26 16:20:55
 * @FilePath: \cshiDemo\promise\promise1.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// #region 模拟异步操作

// function simulateAsyncOperation(isSuccess = true) {  
//     // 返回一个 Promise 对象  
//     return new Promise((resolve, reject) => {  
//         // 假设异步操作需要 1 秒钟  
//         setTimeout(() => {  
//             if (isSuccess) {  
//                 // 如果操作成功，我们解决 Promise 并返回一个值  
//                 resolve('操作成功!');  
//             } else {  
//                 // 如果操作失败，我们拒绝 Promise 并返回一个错误  
//                 reject(new Error('操作失败!'));  
//             }  
//         }, 1000);  
//     });  
// }  

// // 使用该函数  
// simulateAsyncOperation(true)  
//     .then(result => {  
//         console.log(result); // 输出: "操作成功!"  
//     })  
//     .catch(error => {  
//         console.error(error); // 如果操作失败，这里会捕获到错误  
//     });  

// // 尝试让操作失败  
// simulateAsyncOperation(false)  
//     .then(result => {  
//         // 这部分代码不会被执行，因为 Promise 被拒绝了  
//         console.log(result,);  
//     },
//     (rej)=>{
//         console.log(rej,"ss123");
//     }
// ) .catch(error => {  
//         console.error(error,"ss12"); // 输出: Error: 操作失败!  
//     });

// #endregion


// #region Promise.resolve

const p = Promise.resolve("成功");
p.then((res) => {
  console.log("----打印：", res); //----打印： 成功
});

//该用法类似于
const p0 = new Promise((resolve, reject) => {
  reject("失败");
});
p0.then((res) => {
  console.log("----打印：p0", res); //----打印：p1 成功
},
(err) => {
  console.log("----打印：p0", err); //----打印：p1 失败
});

// #endregion


//#region  Promise.reject
// const p1 = Promise.reject("失败");
// p1.then(
//     (res) => {
//         console.log("----打印：", res); //不执行
//     },
//     (rej) => {
//         console.log("----打印：", rej); //----打印： 失败
//     }
// );

// //另外写法 
// p.then(
//     (res) => {
//         console.log("----打印：p", res); //不执行
//     },
//     (rej) => {
//         console.log("----打印：p", rej); //----打印：p 失败
//     }
// ).catch((error) => {
//     console.log("----打印：catch", error); //不执行
// });

// //另外写法---基本没有吧catch写在第一个
// p.catch((error) => {
//     console.log("----打印：catch", error); //----打印：catch 失败
// }).then(
//     (res) => {
//         console.log("----打印：p", res); //不执行
//     },
//     (rej) => {
//         console.log("----打印：p", rej); //不执行
//     }
// );

// //另外写法
// p.then((res) => {
//     console.log("----打印：p", res); //不执行
// }).catch((error) => {
//     console.log("----打印：catch", error); //----打印：catch 失败
// });

// //该用法类似于
// const p1 = new Promise((resolve, reject) => {
//     resolve("成功");
//     reject("失败");
// });
// p1.then(
//     (res) => {
//         console.log("----打印：p1", res); //不执行
//     },
//     (rej) => {
//         console.log("----打印：p1", rej); //----打印：p1 失败
//     }
// );
//#endregion

//#region  Promise.then
// const p4 = new Promise((resolve, reject) => {
//     resolve("成功");
//   });
//   const result = p4.then(
//     (res) => {
//       console.log("----打印：p1", res, 'result:',result); //----打印：p 成功
//     },
//     (rej) => {
//       console.log("----打印：p", rej); //不执行
//     }
//   );
//   result.then(
//     (res) => {
//       console.log("----打印：第二次", res); //----打印:第二次 undefined
//       console.log("----打印：", result);  
//     },
//     (rej) => {
//       console.log("----打印：第二次", rej); //不执行
//     }
//   );
   
//   //这个是最先打印--所以执行这里的时候，显示还是在pedding状态
//   console.log("----打印：", result); //----打印： Promise { <pending> } --[PromiseState]]: "fulfilled"[[PromiseResult]]: undefined
   
// //   //若这么写。第二个then函数中拿到值就是6，而不是undefined
// const p5 = new Promise((resolve, reject) => {
//     resolve("成功");
//   });
//    const result2 = p5.then(
//      (res) => {
//        console.log("----打印：p", res); //----打印：p 成功
//        return 6
//       },
//    );
//    result2.then(
//      (res) => {
//        console.log("----打印：第二次", res); //----打印:第二次 6
//      },
//    );
//#endregion
//#region 如果.then中写了参数不是函数，则会变成promise穿透哦！
// const p6 = new Promise((resolve, reject) => {
//     resolve("成功");
//   });
//   const result2 = p6.then(Promise.resolve("传不过去")); //不是函数
//   result2.then((res) => {
//     console.log("----打印：", res); //----打印： 成功
//   });
//   //相当于这中写法
//   const result3 = p6.then(null); //不是函数
//   result3.then((res) => {
//     console.log("----打印：", res); //----打印： 成功
//   });
//   //也可以写成链式调用，结果一样的
//   p6.then(null).then((res) => {
//     console.log("----打印：", res); //----打印： 成功
//   });
//#endregion

//#region  Promise.catch
const p8 = new Promise((resolve, reject) => {
  reject("拒绝");
  console.log("----打印："); //会输出
  throw new Error("抛出错误"); //这一句改变promise状态，因为状态已经决定了
});
p8.catch((error) => {
  console.log('error',error); // ：--拒绝
  console.log('p82:',p8);
  
});
console.log('p81:',p8);
// const result4 = p8.then((res) => {
//   console.log(res)
// },
// (rej)=>{
//   console.log(rej);
// })
// console.log('result4',result4);

// 另外写法
p8.then(
  (res) => {},
  (rej) => {
    console.log("----打印：", rej); //----打印： 拒绝
  }
);
 
//另外情况
const p9 = new Promise((resolve, reject) => {
  throw new Error("抛出错误");
});
p9.catch((error) => {
  console.log("p1", error); //：Error: 抛出错误
});

//另外情况---2
const p10 = new Promise((resolve, reject) => {
  // resolve( Promise.reject("成功"));
  reject("成功")

}).then((res) => {  console.log('res',res);},
  (rej) => {
    console.log("----打印：", rej); //----打印： 拒绝
    console.log('p10',p10);
  }
) 
const p11= new Promise((resolve, reject) => {
  resolve( Promise.reject("成功"));
  // reject("成功")
  
})
console.log('p11:',p11);
p11.then((res) => {},
(rej) => {
  console.log("----打印：", rej); //----打印： 拒绝
  console.log('rej-p11:',p11);
}
)
  //如果没有下面这个.then 则错误就会被catch捕获
  //不提倡这种写法--只是为了证明，then也可以接收到异常
  .then(
    (res) => {},
    (rej) => {
      console.log("----打印：能接到就执行", rej); //----打印：能接到就执行 Error: 抛出错误
    }
  )
  .catch((error) => {
    console.log("catch接到", error); //不执行
  });




//#endregion