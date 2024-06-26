/*
 * @Author: likai ‘766173427@qq.com’
 * @Date: 2024-06-18 16:43:42
 * @LastEditors: likai ‘766173427@qq.com’
 * @LastEditTime: 2024-06-19 10:55:57
 * @FilePath: \cshiDemo\js测试\l.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const data = {
  manage: {
    prefix: "manage",
    version: "/api/v1"
  },
  map: {
    prefix: "map",
    version: "/api/v1"
  },
  media: {
    prefix: "media",
    version: "/api/v1"
  },
  wayline: {
    prefix: "wayline",
    version: "/api/v1"
  },
  storage: {
    prefix: "storage",
    version: "/api/v1"
  },
  control: {
    prefix: "control",   
    version: "/api/v1" 
  }
};

const key = "control"; 
const controlInfo = data[key].prefix; 
console.log(controlInfo); 