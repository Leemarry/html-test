<!--
 * @Date: 2024-08-12 17:21:16
 * @LastEditors: likai 2806699104@qq.com
 * @FilePath: \html-test\public\Docker\md\win.md
 * @Description: Do not edit
-->
docker build -t docker-demo .


docker run -d -p 9000:9000 -p 9001:9001 -v /root/minio/data:/data -v /root/minio/config:/root/.minio --name minio -e "MINIO_ACCESS_KEY=your_access_key" -e "MINIO_SECRET_KEY=your_secret_key" minio/minio server /data --console-address ":9001"



// 后台9090端口 9000端口
自己 minio.exe server F:\MinIo\Data --console-address ":9000" --address ":9090"

// 后台 9000端口 访问 9001端口

docker run -d -p 9000:9000 -p 9001:9001 -v /root/minio/data:/data -v /root/minio/config:/root/.minio --name minio -e "MINIO_ACCESS_KEY=your_access_key" -e "MINIO_SECRET_KEY=your_secret_key" minio/minio server /data --console-address ":9001"


docker run -d -p 9009:9000 -p 9001:9001 -v F:\document\0awork\docker\minio\data:/data -v F:\document\0awork\docker\minio\config:/root/.minio --name minio -e "MINIO_ACCESS_KEY=minioadmin" -e "MINIO_SECRET_KEY=minioadmin" minio/minio server /data --console-address ":9001"

 docker cp nginx178:/etc/nginx/nginx.conf F:\document\0awork\docker\nginx\conf/nginx.conf
 docker cp F:\document\0awork\docker\nginx\conf/nginx.conf /root/nginx/conf/nginx.conf
## mysql 
docker run -p 3307:3306 --name dokermysql -e MYSQL_ROOT_PASSWORD=123456 -d mysql


##
### 拉取的是最新版本
docker pull emqx/emqx:latest
### 当然可以指定版本
docker pull emqx/emqx:latest:v5.0


docker run -d --name emqx --privileged=true -p 1883:1883 -p 8883:8883 -p 8083:8083 -p 8084:8084 -p 8081:8081 -p 18083:18083  emqx/emqx:latest

参数 --privileged=true 表示赋予容器特权，用于需要与主机系统交互的操作。
参数 -p 指定了端口映射，将容器内的端口映射到主机上，以便可以从外部访问 EMQ X 服务。
参数 emqx/emqx:latest 表示使用 emqx/emqx 仓库中最新版本的镜像运行容器


只要是为了容器内外共享数据或持久化存储容器内的数据。通过挂载文件目录，可以将主机系统上的文件或目录与容器内部的文件系统进行关联，使得容器内的操作可以直接影响主机系统上的文件，也可以使主机系统上的文件在容器内保持持久化，即使容器被删除或重建，数据仍然保留。这样做可以方便地进行数据备份、共享和管理

mkdir -p /home/jaxf/emqx/etc /home/jaxf/emqx/lib /home/jaxf/emqx/data /home/jaxf/emqx/log

这个指令需要注意，如果你是在根目录进行输入，一定要包含全部的路径名称。
如果已经在你想要指定创建的文件夹里面，只需要指定要创建的文件夹名称即可。


、从临时容器内复制配置文件到挂载目录下

docker cp emqx:/opt/emqx/etc F:\document\0awork\docker\mqtt\emqx



--restart=always  --privileged=true

docker run -d --restart=always --name emqx -p 1883:1883 -p 8883:8883 -p 8083:8083 -p 8084:8084 -p 8081:8081 -p 18083:18083 -v F:\document\0awork\docker\mqtt\emqx\etc:/opt/emqx/etc emqx/emqx:latest


1883: MQTT 协议的默认端口，用于 MQTT 客户端与 EMQ X 服务进行通信。
8883: MQTT 协议的安全端口，使用 SSL/TLS 加密通信。
8083: WebSocket over MQTT 协议的端口，用于支持通过 WebSocket 进行 MQTT 通信。
8084: WebSocket over MQTT 协议的安全端口，使用 SSL/TLS 加密通信。
8081: HTTP API 的端口，用于管理和监控 EMQ X 服务。
18083: WebSocket over HTTP 协议的管理界面端口，用于通过 Web 界面管理和监控 EMQ X 服务
（下面使用的时候需要注意端口号）

docker build -t kuangshen666 .


docker build -t myapp:1.0 .

docker run -d -p 8080:8085 myapp:1.0
docker run -d -p 8085:8080 myapp:1.0
ENTRYPOINT ["java", "-jar", "/app.jar", "--spring.profiles.active=pro"]