/*
 * @Date: 2024-06-26 15:03:37
 * @LastEditors: likai 2806699104@qq.com
 * @LastEditTime: 2024-06-26 15:12:41
 * @FilePath: \cshiDemo\promise\Handwritten\writePromiseAllSettled.js
 * @Description: writePromiseAllSettled
 */

Promise.MyallSettled = function (promises) {
    let res, rej;
    const P = new Promise((resolve, reject) => {
        rej = reject;
        res = resolve;
    });
    let i = 0;

    const result = []; // 存储结果  result[0] = {status: 'fulfilled', value: 1} result[1] = {status: 'rejected', reason: 2}
    for (let prom of promises) {
        const index = i;
        i++;
        Promise.resolve(prom).then(
            value => {
                result[index] = { status: 'fulfilled', value };
                i--;
                if(i === 0){
                    res(result);
                }
            },
            reason => {
                result[index] = { status: 'rejected', reason };
                i--;
                if(i === 0){
                    res(result);
                }
            })
          
    }
    if (i === 0) {
        res([]);
    }
    return P;
};

let p4 = new Promise((resolve, reject) => {
    throw new Error("抛出错误");
  });

Promise.MyallSettled([1,Promise.reject(2),p4]).then((res) => {
    console.log('res', res);
},
    (rej) => {
        console.log('rej', rej);
    }
)

Promise.allSettled([1,Promise.reject(2),p4]).then((res) => {
    console.log('res', res);
},
    (rej) => {
        console.log('rej', rej);
    }
)