/*
 * @Descripttion: 
 * @version: 
 * @Author: Eugene
 * @Date: 2023-12-22 15:06:39
 * @LastEditors: Andy
 * @LastEditTime: 2023-12-22 15:21:46
 */
// 在 Worker 线程中接收消息并执行计算任务
self.onmessage = function(event) {
    var message = event.data;
    console.log('event',event);
    
    if (message === 'start') {
      var result = calculate(); // 调用计算函数进行计算
      
      // 将结果发送回主线程
      self.postMessage(result);
    }
  }
  
  function calculate() {
    // 这里可以写你的计算任务逻辑
    var sum = 0;
    for (var i = 0; i < 100000000; i++) {
      sum += i;
    }
    return sum;
  }