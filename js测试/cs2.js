const numbers = [1, 2, 3, 4, 5];  

// 值与索引
numbers.forEach(function(number, index) {  
  console.log(`值: ${number}, 索引: ${index}`);  
});
// 使用箭头函数
numbers.forEach((number, index) => {  
  console.log(`值: ${number}, 索引: ${index}`);  
});
//numbers 值与索引与本身
numbers.forEach((number, index, array) => {  
  console.log(`值: ${number}, 索引: ${index}, 数组: ${array}`);  
});



  
// 使用forEach遍历数组，对每个元素执行回调函数  
numbers.forEach(function(number) {  
  console.log(number);  
});  
  
// 使用map创建一个新数组，其元素是原数组元素的两倍  
const doubled = numbers.map(function(number) {  
  return number * 2;  
});  
console.log(doubled); // 输出: [2, 4, 6, 8, 10]  
  
// 使用filter过滤数组，只保留偶数  
const evens = numbers.filter(function(number) {  
  return number % 2 === 0;  
});  
console.log(evens); // 输出: [2, 4]