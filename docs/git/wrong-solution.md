---
sidebarDepth: 0
---

# git常见错误以及解决方法

## git push 报错 LibreSSL SSL_connect: SSL_ERROR_SYSCALL in connection to github.com:443
#### 背景
 新的mac，配置完git后可以clone，但是不能push，报错 **LibreSSL SSL_connect: SSL_ERROR_SYSCALL in connection to github.com:443**
mac系统 **macOS Catalina 10.15.7**
#### 解决办法
终端输入
```sh
networksetup -setv6off Wi-Fi
```
完成
*其他解决办法：[点击查看](https://stackoverflow.com/questions/48987512/ssl-connect-ssl-error-syscall-in-connection-to-github-com443)*
参考文章：[https://www.jianshu.com/p/42aa9ac04959](https://www.jianshu.com/p/42aa9ac04959)

## git报OpenSSL SSL_read: Connection was reset, errno 10054解决方法
当git报错
```sh
OpenSSL SSL_read: Connection was reset, errno 10054
```
时，估计是ssl验证错误；这时候输入以下命令，解除ssl验证即可
```sh
git config --global http.sslVerify "false"
```
