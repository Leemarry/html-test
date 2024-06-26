/*
 * @Date: 2024-06-26 16:13:17
 * @LastEditors: likai 2806699104@qq.com
 * @LastEditTime: 2024-06-26 17:38:29
 * @FilePath: \cshiDemo\promise\Handwritten\multiRequest.js
 * @Description: 并发请求
 */
const p = () => {
    console.time("promiseArr");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("1000");
            resolve('1000');
        }, 1000);
    });
};
const p1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("2000");
            resolve();
        }, 2000);
    });
};
const p2 = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("3000");
            resolve();
        }, 3000);
    });
};


p().then((res) => {
    console.log('res',res);
    return p1();
}).then(() => {
    return p2();
}).then(() => {
    console.timeEnd("promiseArr");
    console.log("end");
});


//#region  promiseArr
const promises = () => {
    console.time("promiseArr");
    return [1000, 2000, 3000].map((current) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(current);
          resolve();
        }, current);
      });
    });
  };
  
  Promise.all(promises()).then(() => {
    console.timeEnd("promiseArr");
    console.log("end");
  });
//#endregion

const multiRequest = (fetch, params = [], maxRequestNum = 6) => {
    const paramsLength = params.length; //20
    let result = new Array(paramsLength).fill(false);
    let sendCount = 0;
    let finishCount = 0;
  
    return new Promise((resolve) => {
      while (sendCount < maxRequestNum && sendCount < paramsLength) {
        next();
      }
  
      function handleResult(current, res) {
        finishCount ++;
        result[current] = res;
        if (sendCount < paramsLength) {
          next();
        }
        if (finishCount >= paramsLength) {
          resolve(result);
        }
      }
  
      function next() {
        let current = sendCount++;
        const param = params[current];
        fetch(param).then((res) => {
          handleResult(current, res)
        }).catch((err) => {
          handleResult(current, err)
        });
      }
    });
  }

  function mockFetch(url) {  
    return new Promise((resolve) => {  
      setTimeout(() => {  
        console.log(`Fetched: ${url}`);  
        resolve(`Data from ${url}`);  
      },  2000); // 随机延迟以模拟网络延迟   Math.random() *2000
    });  
  }  
  // 使用multiRequest函数  
  const urls = ['url1', 'url2', 'url3', 'url4', 'url5']; 
  console.time("promiseArr"); 
  multiRequest(mockFetch, urls, 2)  
    .then(results => {  
      console.log(results); // 打印出从每个url获取的数据  
      console.timeEnd("promiseArr");
    })  
    .catch(error => {  
      console.error('An error occurred:', error);  
    });
    function mockFetchWithError(url) {  
        if (url === 'errorUrl') {  
          return Promise.reject(new Error('Failed to fetch errorUrl'));  
        }  
        return mockFetch(url); // 使用之前的mockFetch函数  
      }  
      const urlsWithError = ['url1', 'errorUrl', 'url3'];  
      multiRequest(mockFetchWithError, urlsWithError, 2)  
        .then(results => {  
          console.log(results); // 打印出从每个url获取的数据，'errorUrl'的位置将是一个Error对象  
        })  
        .catch(error => {  
          console.error('An error occurred:', error); // 这里不会捕获到错误，因为我们在handleResult中处理了它们  
        });


