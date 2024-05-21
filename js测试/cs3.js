/*
 * @Descripttion: 
 * @version: 
 * @Author: Eugene
 * @Date: 2024-04-19 11:08:46
 * @LastEditors: Andy
 * @LastEditTime: 2024-04-19 11:28:48
 */
const data = [
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
        "kmzName": "测试一组（2-2）",
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
        "kmzName": "测试一组（1-2）",
        "kmzType": "kmz",
        "kmzDes": ""
    },
    {
        "id": 169,
        "kmzName": "4试组（2-3）",
        "kmzType": "kmz",
        "kmzDes": ""
    }
];

// 自定义的排序函数
function customSort(a, b) {
    // 提取 kmzName 属性中的前缀
    // const regex = /^[\u4e00-\u9fa5]+/;
    // const regex = /([\u4e00-\u9fa5]+)\((\d+-\d+)\)/;
    const regex = /([\u4e00-\u9fa5]+).*?(\d+-\d+)/;
    const aMatch = a.kmzName.match(regex);
    const aPrefix = a.kmzName.match(regex)[0];
    console.log( aMatch);
    const bPrefix = b.kmzName.match(regex)[0];
    console.log(aPrefix,bPrefix);
    // 比较前缀
    if (aPrefix < bPrefix) {
        return -1;
    } else if (aPrefix > bPrefix) {
        return 1;
    } else {
        return 0;
    }
}

// 对数组进行排序
data.sort(customSort);

// 输出排序后的数组
console.log(data);