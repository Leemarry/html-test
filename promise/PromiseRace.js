
//#region 
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
   
  Promise.race([p1, p2])
    .then((res) => {
      console.log("----打印：res", res);
    })
    .catch((err) => {
      console.log("----打印：err", err);
    });
   
  //执行结果
  //----打印：err p2--1000
  //----打印：p1
  

  Promise.race([p1, p2,p3])
  .then((res) => {
    console.log("----打印：res", res);
  })
  .catch((err) => {
    console.log("----打印：err", err);
  });

//#endregion