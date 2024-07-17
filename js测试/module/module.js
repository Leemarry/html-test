/*
 * @Date: 2024-07-17 08:59:50
 * @LastEditors: likai 2806699104@qq.com
 * @FilePath: \cshiDemo\js测试\module\module.js
 * @Description: Do not edit
 */
//导出使用方法：
function add(a,b) {
    return a+b;
}
var a1 = 1
module.exports = {add,a1};
module.exports = {a:1};
module.exports .a1 = 1
module.exports = function(name,age,money) {
    this.name = name;
    this.age = age;
    this.money = money;
    this.say = function() {
      console.log('我的名字叫：'+this.name+'，我今年'+this.age+'岁，月薪为：'+this.money+'元；')
    }
  };
 
// //导入使用方法
// var req = require ('../app.js');
// console.log(req.a1,req.a)
// const {add,a1} = require('../app.js')