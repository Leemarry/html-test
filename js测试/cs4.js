const data = [
    {
        "id": 169,
        "kmzName": "测试四组（1-2）",
        "kmzType": "kmz",
        "kmzDes": ""
    },
    {
        "id": 169,
        "kmzName": "测试功能组（1-2）",
        "kmzType": "kmz",
        "kmzDes": ""
    },
    {
        "id": 169,
        "kmzName": "测试一组（1-2）",
        "kmzType": "kmz",
        "kmzDes": ""
    },
    {
        "id": 169,
        "kmzName": "测试一组（2-2）",
        "kmzType": "kmz",
        "kmzDes": ""
    },
    {
        "id": 169,
        "kmzName": "4试组（2-3）",
        "kmzType": "kmz",
        "kmzDes": ""
    },
    {
        "id": 169,
        "kmzName": "测试功能组（2-2）",
        "kmzType": "kmz",
        "kmzDes": ""
    },
    {
        "id": 169,
        "kmzName": "4试组（3-3）",
        "kmzType": "kmz",
        "kmzDes": ""
    },
    {
        "id": 169,
        "kmzName": "4试组（1-3）",
        "kmzType": "kmz",
        "kmzDes": ""
    },
    {
        "id": 169,
        "kmzName": "测试四组（2-2）",
        "kmzType": "kmz",
        "kmzDes": ""
    },
];



// 自定义的排序函数
function customSort(a, b) {
    const prefixA = a.kmzName.split('（')[0];
    const prefixB = b.kmzName.split('（')[0];
    const suffixA = a.kmzName.split('（')[1];
    const suffixB = b.kmzName.split('（')[1];

    if (prefixA !== prefixB) {
        console.log('localeCompare',prefixA.localeCompare(prefixB));
        return prefixA.localeCompare(prefixB);
    } else {
        const numA = parseInt(suffixA.split('-')[0]);
        const numB = parseInt(suffixB.split('-')[0]);
        console.log('numA - numB',numA - numB);
        return numA - numB;

    }
}


// 创建原数组的副本
const dataCopy = data.slice();


// 对数组进行排序
dataCopy.sort(customSort);
console.log(dataCopy);


const datas = [
    {
        "id": 169,
        "kmzName": "测试四组（1-1）",
        "kmzType": "kmz",
        "kmzDes": ""
    },
    {
        "id": 169,
        "kmzName": "测试功能组（1-2）",
        "kmzType": "kmz",
        "kmzDes": ""
    },
    {
        "id": 169,
        "kmzName": "测试功能组（2-2）",
        "kmzType": "kmz",
        "kmzDes": ""
    },
    {
        "id": 169,
        "kmzName": "测试一组（1-2）",
        "kmzType": "kmz",
        "kmzDes": ""
    },
    {
        "id": 169,
        "kmzName": "测试一组（2-2）",
        "kmzType": "kmz",
        "kmzDes": ""
    },
    {
        "id": 169,
        "kmzName": "4试组（1-3）",
        "kmzType": "kmz",
        "kmzDes": ""
    },
    {
        "id": 169,
        "kmzName": "4试组（2-3）",
        "kmzType": "kmz",
        "kmzDes": ""
    },
   
    {
        "id": 169,
        "kmzName": "4试组（3-3）",
        "kmzType": "kmz",
        "kmzDes": ""
    }
];