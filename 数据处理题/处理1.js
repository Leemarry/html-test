/**flatMap */

const data1 = [
    {
        lng: 1,
        lat: 2,
        alt: 3,
    },
    {
        lng: 4,
        lat: 5,
        alt: 6,
    },
];
const result1 = data1.map((item) => [item.lng, item.lat, item.alt]);


const data2 = [
    {
        onlng: 1,
        onlat: 2,
        onalt: 3,
        offlng: 4,
        offlat: 5,
        offalt: 6,
    },
    {
        onlng: 7,
        onlat: 8,
        onalt: 9,
        offlng: 10,
        offlat: 11,
        offalt: 12,
    }]
// 需要扁平化
// 映射起点和终点，并使用 concat.apply 展平结果  
const mapped = data2.map((item) => [
    [item.onlng, item.onlat, item.onalt], // 起点  
    [item.offlng, item.offlat, item.offalt] // 终点  
]);
const result2 = [].concat.apply([], mapped);
console.log(result2);


const result3 = data2.flatMap((item) => [
    [item.onlng, item.onlat, item.onalt], // 起点  
    [item.offlng, item.offlat, item.offalt] // 终点  
]); 