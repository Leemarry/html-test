/*
 * @FilePath: \html-test\promise\PromiseAll.js
 * @Author: likai 2806699104@qq.com
 * @Version: 0.0.1
 * @LastEditors: likai 2806699104@qq.com
 * @Description:  
 */

var p1 = new Promise((resoleve, reject) => {
    setTimeout(() => {
      resoleve("p1--3000");
    }, 3000);
  });
  var p2 = new Promise((resoleve, reject) => {
    setTimeout(() => {
      resoleve("p2--1000");
    }, 1000);
  });
  var p3 = new Promise((resoleve, reject) => {
    setTimeout(() => {
      console.log("----打印：看看是先执行失败，还是全部执行完再catch");
      resoleve("p3--5000");
    }, 5000);
  });
   
  //第一情况
  //  var promiseArr = [p1, p2, p3];
  //  console.time("promiseArr");
  //   Promise.all(promiseArr)
  //     .then((res) => {
  //       console.log("res", res); //res [ 'p1--3000', 'p2--1000', 'p3--5000' ]
  //       console.timeEnd("promiseArr"); // promiseArr: 5.020s
  //     })
  //     .catch((err) => console.log(err));

      //另外情况
var p4 = new Promise((resoleve, reject) => {
    setTimeout(() => {
      reject("p4--2000");
    }, 1000);
  });
   
  var promiseArr = [p1, p2, p3, p4];
  console.time("promiseArr");
  Promise.all(promiseArr)
    .then((res) => {
      console.log("res", res);
      console.timeEnd("promiseArr");
    })
    .catch((err) => {
        console.timeEnd("promiseArr");
        console.log("执行失败",err)
    }
    
); 
   
  //打印顺序
  //p4--2000
  //输出----打印：看看是先执行失败，还是全部执行完再catch 
   
  //解释：p3的输出，比上边catch晚输出因此，如果有失败状态，就会提前结束、去执行all里面的回调函数
