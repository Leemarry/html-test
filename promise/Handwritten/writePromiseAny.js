
Promise.myAny = function (promises) {
    let res, rej;
    const P = new Promise((resolve, reject) => {
        res = resolve;
        rej = reject;
    })
    const rejArr = [];
    let i = 0;
    for (let p of promises) {
        const index = i;
        i++;
        Promise.resolve(p).then(res,
            (err) => {
                rejArr[index] = err;
                i--;
                if (i === 0) {
                    rej('[AggregateError: All promises were rejected]',rejArr)
                }
            })
    }
    if (i === 0) {
        res('[AggregateError: All promises were rejected]')
    }
    return P;
}

Promise.myAny([Promise.reject(1),1]).then((res) => {
    console.log('resolved', res)
},
    (rej) => {
        console.log('rejected', rej)
    }
)

Promise.any([Promise.reject([1])]).then((res) => {
    console.log('resolved', res)
},
    (rej) => {
        console.log('rejected', rej)
    }
)

