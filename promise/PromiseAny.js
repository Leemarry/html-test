
//#region  Promise.any


// var p1 = new Promise((resoleve, reject) => {
//     setTimeout(() => {
//       resoleve("p1--3000");
//     }, 3000);
//   });
//   var p2 = new Promise((resoleve, reject) => {
//     setTimeout(() => {
//       reject("p2--1000");
//     }, 1000);
//   });
//   var p3 = new Promise((resoleve, reject) => {
//     setTimeout(() => {
//       console.log("----打印p3");
//       resoleve("p3--5000");
//     }, 5000);
//   });
   
//   var promiseArr = [p1, p2, p3];
//   console.time("promiseArr");
//   Promise.any(promiseArr)
//     .then((res) => {
//       console.log("res", res); //res [ 'p1--3000', 'p2--1000', 'p3--5000' ]
//       console.timeEnd("promiseArr"); // promiseArr: 5.020s
//     })
//     .catch((err) => console.log(err));
   
  //输出顺序 --虽然p2已经执行完，但是为rejected状态，而any会返回第一个resolve状态的对象
  //   res p1--3000
  // promiseArr: 3.009s
  // ----打印p3
  

//#endregion

//#region  Promise.any()
//另外一种情况
var p1 = new Promise((resoleve, reject) => {
  setTimeout(() => {
    reject("p1--3000");
  }, 3000);
});
var p2 = new Promise((resoleve, reject) => {
  setTimeout(() => {
    resoleve("p2--1000");
  }, 1000);
});
var p3 = new Promise((resoleve, reject) => {
  setTimeout(() => {
    console.log("----打印p3");
    reject("p3--5000");
  }, 5000);
});
 
var promiseArr = [p1, p2, p3];
console.time("promiseArr");
Promise.any(promiseArr)
  .then((res) => {
    console.log("res", res); //res [ 'p1--3000', 'p2--1000', 'p3--5000' ]
    console.timeEnd("promiseArr"); // promiseArr: 5.020s
  })
  .catch((err) => console.log(err));
 
//输出结果   解释--因为p1，2，3都是错误，所以any一直在等有成功的状态，所以知道p3结束后，没有成功的，就走catch那边
// ----打印p3
// [AggregateError: All promises were rejected] {
//   [errors]: [ 'p1--3000', 'p2--1000', 'p3--5000' ]
// }



//#endregion