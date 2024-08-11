/*
 * @Date: 2024-07-22 08:29:44
 * @LastEditors: likai 2806699104@qq.com
 * @FilePath: \html-test\promise\ceshi-promise\ceshi.js
 * @Description: Do not edi
 */
Promise.resolve(0)
    .then((res) => {
        console.log(res);
        return Promise.reject(4);
    })
    .then(
        (res) => {
            console.log(res);
        },
        (err) => {
            console.log(err);
        }
    );

Promise.resolve(1)
    .then((res) => {
        console.log(res);
    })
    .then(() => {
        console.log(2);
    })
    .then(() => {
        console.log(3);
    })
    .then(() => {
        console.log(5);
    })
    .then(() => {
        console.log(6);
    });
