/*
 * @Author: likai 2806699104@qq.com
 * @Date: 2024-06-25 17:25:27
 * @LastEditors: likai 2806699104@qq.com
 * @LastEditTime: 2024-06-26 14:15:59
 * @FilePath: \cshiDemo\promise\Handwritten\writePromiseAll.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

 Promise.myAll = function(proms) {
    let res , rej;
    const p = new Promise((resolve, reject) => {
        res =resolve;
        rej =reject;
    })
    let i = 0;
    const resArr = [];
    for(const prom of proms){
        const index = i;
        i++;
        Promise.resolve(prom).then((data)=>{
            resArr[index] = data; // 
            // 判断缩放完成
            i--;
            if(i===0){
                res(resArr);
            }
        }, rej); // 
    }
    if(i===0){
        res([]);
    }

    return p;
}
Promise.myAll([Promise.reject(2),1]).then(res => {
     console.log(res,"ss");
},
err => {
    console.log(err,"s");
},
)


Promise.myAll([1,23,Promise.reject(2)]).then(res => {
    console.log(res);
}
).catch(err => {  
   console.error(err); // 输出: Error: 操作失败!  
});

Promise.all([1,23,Promise.reject(3)]).then(res => {
    console.log(res);
}
).catch(err => {  
   console.error(err); // 输出: Error: 操作失败!  
});