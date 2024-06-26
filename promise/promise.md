<!--
 * @Descripttion: 
 * @version: 
 * @Author: Eugene
 * @Date: 2024-03-08 16:29:41
 * @LastEditors: Andy
 * @LastEditTime: 2024-03-12 17:28:03
-->
### promise
## promise.all
<!-- TOC -->

- [java 解析dom](#java-解析dom)
  - [dom4j解析](#dom4j解析)
- [一级目录](#一级目录)
  - [二级目录](#二级目录)
    - [三级目录](#三级目录)
- [测试](#测试)
  - [sss](#sss)
- [ssss](#ssss)

<!-- /TOC -->




# java 解析dom 
## dom4j解析


           // 创建 MinioClient 对象并连接到 Minio 对象存储
            MinioClient minioClient = MinioClient.builder()
                    .endpoint("http://127.0.0.1:9090")
                    .credentials("gNkgwJSo4EyFyxHuG5mz", "IieYrz9poS8JsEFXzoo7PG7yhmHK9dqZbaVG1khn")
                    .build();

else if (key.endsWith(".jpg")) {
                            byte[] bytes = byteArrayOutputStream.toByteArray();
                            executorService.submit(() -> {
                                try {
                                    // 写入文件
                                    minioClient.putObject(
                                            PutObjectArgs.builder()
                                                    .bucket("ceshi")
                                                    .object(key)
                                                    .stream(new ByteArrayInputStream(bytes), bytes.length, -1)
                                                    .build());
                                    // 返回存入路径
                                    String fileUrl = minioClient.getPresignedObjectUrl(
                                            GetPresignedObjectUrlArgs.builder()
                                                    .method(Method.PUT)
                                                    .bucket("ceshi")
                                                    .object(key)
                                                    .build()
                                    );
                                    synchronized (resultObject) {
                                        resultObject.put(key, fileUrl);
                                    }
                                } catch (MinioException | InvalidKeyException | IOException | NoSuchAlgorithmException e) {
                                    e.printStackTrace();
                                } finally {
                                    taskCount.decrementAndGet();
                                }
                            });
                            taskCount.incrementAndGet();
                        }








# 一级目录
## 二级目录
### 三级目录
# 测试
sss
## sss
hhhhh
# ssss
ssss 
[点击跳转到标题一](#jump)

1
1
1
a
<span id="jump">此处是锚点：标题一</span>
<br>
<a href="https://github.com/BackMountainDevil/The-C-Programming-Language#the-c-programming-language">返回目录</a>

[返回目录](./promise.md) //C2.md
