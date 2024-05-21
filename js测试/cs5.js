/*
 * @Descripttion: 
 * @version: 
 * @Author: Eugene
 * @Date: 2024-04-19 13:59:15
 * @LastEditors: Andy
 * @LastEditTime: 2024-04-19 17:21:56
 */
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



// 提取 kmzName 的前缀
function extractPrefix(kmzName) {
    return kmzName.split('（')[0]; // 使用括号内的内容作为前缀
}

function customSort(a, b) {
    const prefixA = a.kmzName.split('（')[0];
    const prefixB = b.kmzName.split('（')[0];
    const suffixA = a.kmzName.split('（')[1];
    const suffixB = b.kmzName.split('（')[1];

    if (prefixA !== prefixB) {
        return prefixA.localeCompare(prefixB);
    } else {
        const numA = parseInt(suffixA.split('-')[0]);
        const numB = parseInt(suffixB.split('-')[0]);
        return numA - numB;

    }
}

// 将具有相同前缀的项排在一起
function sortDataByPrefix(data) {
    const groupedData = {};
    data.forEach(item => {
        const prefix = extractPrefix(item.kmzName);
        if (!groupedData[prefix]) {
            groupedData[prefix] = [];
        }
        groupedData[prefix].push(item); // 这一步  
    });

    const sortedData = [];

    Object.values(groupedData).forEach(group => {
        group.sort(customSort)
        sortedData.push(...group);
    });

    return sortedData;
}

const sortedData = sortDataByPrefix(data);
console.log(sortedData);