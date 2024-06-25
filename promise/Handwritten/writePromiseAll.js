// function promiseAll(){
//     return new Promise((resolve, reject) => {
//     });
// }
 
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
Promise.myAll([1,23,5]).then(res => {
     console.log(res);
},
err => {
    console.log(err);
},
)

