/*
 * @Date: 2024-07-29 09:44:26
 * @LastEditors: likai 2806699104@qq.com
 * @FilePath: \html-test\数据处理题\json数据处理\rhis.js
 * @Description: Do not edit
 */
function NormalFunction() {
    console.log(new Date);
  }
  NormalFunction(); // 在全局环境中调用，this 指向全局对象（在浏览器中是 window 对象）
  
  let obj = {
    method: function() {
      console.log(this);
    }
  };
  obj.method(); // 作为对象方法调用，this 指向 obj 对象
  
  let ArrowFunction = () => {
    console.log(this);
  };
  ArrowFunction(); // 箭头函数中的 this 继承了外层的 this，即全局的 this