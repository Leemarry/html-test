/*
 * @Author: likai ‘766173427@qq.com’
 * @Date: 2024-06-18 13:20:21
 * @LastEditors: likai ‘766173427@qq.com’
 * @LastEditTime: 2024-06-18 13:20:43
 * @FilePath: \cshiDemo\promise\promise1.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function simulateAsyncOperation(isSuccess = true) {  
    // 返回一个 Promise 对象  
    return new Promise((resolve, reject) => {  
        // 假设异步操作需要 1 秒钟  
        setTimeout(() => {  
            if (isSuccess) {  
                // 如果操作成功，我们解决 Promise 并返回一个值  
                resolve('操作成功!');  
            } else {  
                // 如果操作失败，我们拒绝 Promise 并返回一个错误  
                reject(new Error('操作失败!'));  
            }  
        }, 1000);  
    });  
}  
  
// 使用该函数  
simulateAsyncOperation(true)  
    .then(result => {  
        console.log(result); // 输出: "操作成功!"  
    })  
    .catch(error => {  
        console.error(error); // 如果操作失败，这里会捕获到错误  
    });  
  
// 尝试让操作失败  
simulateAsyncOperation(false)  
    .then(result => {  
        // 这部分代码不会被执行，因为 Promise 被拒绝了  
        console.log(result);  
    })  
    .catch(error => {  
        console.error(error); // 输出: Error: 操作失败!  
    });


   