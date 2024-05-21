/*
 * @Descripttion: 
 * @version: 
 * @Author: Eugene
 * @Date: 2023-12-22 15:37:32
 * @LastEditors: Andy
 * @LastEditTime: 2023-12-22 15:42:49
 */
self.onmessage=function(event){
    var message = event.data;
    console.log('event',event);
    
    if (message === 'ok') {
      var result = calculate(); // 调用计算函数进行计算
      
      // 将结果发送回主线程
      self.postMessage(result);
    }

}

function calculate() {
    var sum =0;
    for (let i = 0; i < 6000000000; i++) {
      sum = Math.sqrt(i);
    }
    
    return sum;
  }
