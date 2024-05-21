/*
 * @Descripttion: 
 * @version: 
 * @Author: Eugene
 * @Date: 2024-04-19 10:57:06
 * @LastEditors: Andy
 * @LastEditTime: 2024-04-19 11:50:53
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
        "kmzName": "测试功能组（2-2）",
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

// 自定义的排序函数
function customSort(a, b) {
    // 提取 kmzName 属性中的前缀和括号内的数字
    const regex = /([\u4e00-\u9fa5]+).*?(\d+-\d+)/;
    const aMatch = a.kmzName.match(regex);
    const bMatch = b.kmzName.match(regex);
    // 比较前缀
    const aPrefix = aMatch[1];
    const bPrefix = bMatch[1];

    if (aPrefix < bPrefix) {
        return -1;
    } else if (aPrefix > bPrefix) {
        return 1;
    } else {
        // 如果前缀相同，比较括号内的数字
        const aNumber = parseInt(aMatch[2].split('-')[0]);
        const bNumber = parseInt(bMatch[2].split('-')[0]);
        return aNumber - bNumber;
    }
}

// 对数组进行排序
data.sort(customSort);

// 输出排序后的数组
console.log(data);