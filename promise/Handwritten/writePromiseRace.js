/*
 * @Date: 2024-06-26 14:28:48
 * @LastEditors: likai 2806699104@qq.com
 * @LastEditTime: 2024-06-26 14:53:49
 * @FilePath: \cshiDemo\promise\Handwritten\writePromiseRace.js
 * @Description: 手写 Promise.race
 */


Promise.race1 = function (promises) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            Promise.resolve(promises[i]).then(resolve).catch(reject)
        }
    })
}

const promise1 = new Promise(resolve => setTimeout(() => resolve('foo'), 3000));
const promise2 = new Promise(resolve => setTimeout(() => resolve('bar'), 2000));
const promise3 = new Promise((resolve, reject) => setTimeout(() => reject('baz'), 1000));

Promise.race1([promise1, promise2, promise3])
  .then(result => console.log(result)) // 输出 "baz"
  .catch(error => console.error(error)); // 输出 "baz"

  // 原始 Promise.race([])   // 上述存在空数组有问题
  Promise.race([]).then((res)=>{
    console.log('res',res)
},
(rej)=>{
    console.log('rej',rej)
}
)

Promise.myrace = function (promises) {
    let res,rej ;
    const p = new Promise((resolve,reject)=>{
        rej = reject;
        res = resolve
    })
    let i = 0;

    for(let prom of promises){
        Promise.resolve(prom).then(res,rej)
    }
    return p;
}


Promise.myrace([1,2,3]).then((res)=>{
    console.log('res',res)
},
(rej)=>{
    console.log('rej',rej)
}
)

Promise.race([Promise.reject(1),2]).then((res)=>{
    console.log('res',res)
},
(rej)=>{
    console.log('rej',rej)
}
)




