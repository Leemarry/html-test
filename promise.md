<!--
 * @Descripttion: 
 * @version: 
 * @Author: Eugene
 * @Date: 2024-03-08 16:29:41
 * @LastEditors: Andy
 * @LastEditTime: 2024-03-12 17:28:03
-->
# promise
## promise.all

              let all = Promise.all([p1, p2, p3].map((p) => p.then(res => res).catch(err => false)));
                all.then((res) => {
    console.log(res, res.filter(Boolean)) // 2s后打印 [1, 2, false], [1, 2]
  }).catch((err) => {
  console.log('err', err)
})




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
