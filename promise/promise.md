<!--
 * @Date: 2024-03-08 16:29:41
 * @LastEditors: likai 2806699104@qq.com
 * @LastEditTime: 2024-06-26 17:49:04
 * @FilePath: \cshiDemo\promise\promise.md
 * @Description: Do not edit
-->


##  promise
<!-- TOC -->

- [java 解析dom](#java-解析dom)
  - [dom4j解析](#dom4j解析)
- [promise 测试知识](#promise-测试知识)
  - [promise.All 手写](#promiseall-手写)
  - [promise.race 手写](#promiserace-手写)
  - [promise.any 手写](#promiseany-手写)
  - [Promise.allSettled 手写](#promiseallsettled-手写)
  - [并发控制](#并发控制)

<!-- /TOC -->




# java 解析dom 
## dom4j解析


# promise 测试知识 
<span id="jump">下面对promise的手写</span>

## promise.All 手写
**文件：**[writePromiseAll.js](./Handwritten/writePromiseAll.js)

## promise.race 手写
**文件：**[writePromiseRace.js](./Handwritten/writePromiseRace.js)

方法接收的参数和.all、.any接收的参数一样，接收一个可迭代promise对象的数组，当任何一个promise的状态先确定（拒绝或者成功），则会执行.race中的回调函数，具体根据promise的状态 ---和allSettled效果互斥
<br>

**实例：** [PromiseRace.js](./PromiseRace.js)


## promise.any 手写

**文件：**[writePromiseAny.js](./Handwritten/writePromiseAny.js)

Promise.any接收一个promise的数组作为参数，只要其中有一个Promise成功执行，就会返回已经成功执行的Promise的结果；若全部为rejected状态，则会到最后的promise执行完，全部的promise返回到异常函数中；可用于多通道获取数据，谁先获取就执行下一步程序，跳出这个过程。---和all的相反
<br>

**实例：** [PromiseAny.js](./promiseAny.js)

## Promise.allSettled 手写

**文件：**[writePromiseAllSettled.js](./Handwritten/writePromiseAllSettled.js)

该方法参数也是和.all相同；顾名思义，这个方法是等所有promise参数确定状态后，才会执行回调函数，不管是成功的状态还是拒绝的状态，都等待全部执行后，并返回一个包含每个 Promise 解决状态的对象数组，每个对象包含两个属性：status 和 value；state表示promise的状态：resolve和rejected，value代表的是promise传递的值。

请注意，Promise.allSettled 是 ES2020（也称为 ES11）中引入的新方法，需要支持该版本的 JavaScript 运行环境才能使用
<br>

**实例：** [PromiseAllSettled.js](./PromiseAllSettled.js)

## 并发控制
**实例：** [multiRequest.js](./Handwritten/multiRequest.js)


<br>
<a href="https://github.com/BackMountainDevil/The-C-Programming-Language#the-c-programming-language">github.com</a>

[返回目录](.././README.md) / [回到顶部](#jump)
