# Web Worker && Shared Web Worker
a sample to demonstrate differences between Web Worker and Shared Worker

## Web Worker & Shared Worker 的异同
### 相同点
* 只能在web网页中使用，也就是http(s):// 协议下访问的站点中使用，file:// 协议下访问本地文件无法使用
![错误示例](/refs/error.jpg)
* 两种类似于多线程的js实现
* 通过消息传递的方式来互相通信

### 不同点
* Shared Worker通过port来发送消息，Web Worker直接发送消息
* 浏览器会为Web Worker引用的js文件创建单独的线程，因此不同的页面引用的同一个js文件是在不同的进程中的单独线程中执行的而Shared Worker引用的js文件会在浏览器创建的单独的进程中执行，而且被不同的页面引用的相同的js文件只会加载一次且共享

## 启动示例
> npm i

> npm run start

> 打开浏览器访问 http://localhost:9090

