/*
 * @Date: 2024-07-02 16:24:16
 * @LastEditors: likai 2806699104@qq.com
 * @LastEditTime: 2024-07-02 16:25:22
 * @FilePath: \cshiDemo\js重新加载\cs1.js
 * @Description: Do not edit
 */
function replaceHostWithUnpkg(originalUrl) {  
    // 创建URL对象  
    const originalUrlObj = new URL(originalUrl);  
    console.log(originalUrlObj.pathname ,originalUrlObj.search );
    
      
    // 提取路径（包括查询参数）  
    const pathWithQuery = originalUrlObj.pathname + originalUrlObj.search;  
    console.log(pathWithQuery );
    // 创建新的URL，使用unpkg作为主机名  
    const newUrlObj = new URL(pathWithQuery, 'http://unpkg.com');  
      
    // 返回新的URL字符串  
    return newUrlObj.toString();  
}  
  
// 使用示例  
const originalUrl = 'https://cdn.topskys.org/v0/js.js';  
const newUrl = replaceHostWithUnpkg(originalUrl);  
console.log(newUrl); // 输出: http://unpkg.com/v0/js.js