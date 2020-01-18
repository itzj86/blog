### traefik 软件使用说明
#### 启动时的配置文件
```yml
entryPoints:
    web:
        address: ":80"
        forwardedHeaders:
            trustedIPs:
                - "127.0.0.1/32"
    tcp:
        address: ":3308"
    
api:
    insecure: true
    dashboard: true
providers:
    docker: 
        endpoint: "tcp://192.168.0.133:2376"
        network: "traefik_default"
        defaultRule: "Host('client.xsz.com')"
    file: 
        filename: "c.yml"
        watch: true
log:
    filePath: "./traefik.log"
    level: "INFO"

```
> **entryPoints** 入口点可以配置**web,tcp**node节点  
> **api** 是配置traefik的api接口配置  
> **providers** 这个是驱动和动态配置文件字段 中的**docker,file**节点  
> **log** 配置运行的日志文件
- **filename: "c.yml"** 配置的 **c.yml** 为动态配置文件
```yml
http:
    routers:
        to-whoami:
            # rule: "Host(`sapi.xsz.com`) && PathPrefix(`/baidu/`)"
            rule: "Host(`sapi.xsz.com`)"
            service: whoami
            middlewares: 
                - auth
            # 安全ssl
            # tls:
            #     certResolver: "sapi"
        # dashboard:
        #     rule: "PathPrefix(`/dashboard/`)"
        #     middlewares: auth
        client:
            service: client
            rule: "Host(`sman.xsz.com`)"
    services:
        whoami:
            loadBalancer:
                servers:
                    # - url: "https://uatclient.xsztn.cn"
                    - url: "http://192.168.0.133:9080"
        client:
            loadBalancer:
                servers:
                    - url: "https://shop.xszam.com/"
    middlewares:
        auth:
            basicAuth:
                users:
                    - "test:$apr1$H6uskkkW$IgXLP6ewTrSuBkTrqE8wj/"
tcp:
    routers:
        to-mysql:
            entryPoints:
                - "tcp"
            rule: "HostSNI(`*`)"
            service: mysql2
        to-mysql1:
            entryPoints:
                - "tcp"
            rule: "HostSNI(`*`)"
            service: mysql2
            # 忽略ssl
            # tls: 
            #     passThrough: true
    services:
        mysql:
            loadBalancer:
                servers:
                    - address: "127.0.0.1:3306"
                    - address: "*.*.*.*:3306"
        mysql2:
            loadBalancer:
                servers:
                    - address: "*.*.*.*:3306"
    # app:
    #     weighted:
    #         services:
    #         - name: appv1
    #         weight: 3
    #         - name: appv2
    #         weight: 1
```
> 动态配置文件可以配置 **http,tcp** 两个节点也就是两个协议  
> **http**节点下可以配置  
> > **routers** : 配置路由 [to-whoami]路由名-->该节点下有 rule,service,middlewares等节点
> > > **rule**:是定义路由规则 ``Host(`sapi.xsz.com`) && PathPrefix(`/baidu/`)`` 域名或者前缀  
> > > **service**:是匹配**services**节点下面的名称 
>  > **services** : 配置服务下面一级也是服务名，服务名下面是**loadBalancer** 相对于是代理对象
> > > **loadBalancer**:下个节点 **server** 代理到的服务器信息，**url**直接指向代理的地址  

> **tcp**节点下可以配置和**http**差不多，只是 **entryPoints** 要指定入口协议为"**tcp**"
> > **rule** 中则是**HostSNI**这个匹配规则
