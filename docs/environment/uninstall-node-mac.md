# mac下卸载node和npm

*某些情况下（比如安装nvm），我们需要卸载掉node和npm，mac环境下如何卸载呢？下面写个备忘*

###### 一、卸载从node官网下载pkg安装的node
```
sudo rm -rf /usr/local/{bin/{node,npm},lib/node_modules/npm,lib/node,share/man/*/node.*}
```
###### 二、卸载用 homebrew 安装的node
```
brew uninstall node
```

###### 三、如果你感觉删的不够干净，可以再细分删除
  1. 删除 npm 相关内容
  ```
  sudo npm uninstall npm -g
  sudo rm -rf ~/.npm
  ```
  2. 删除 /usr/local/lib 下node相关内容 
```
sudo rm -rf /usr/local/lib/node /usr/local/lib/node_modules /var/db/receipts/org.nodejs.* 
cd /usr/local/lib
sudo rm -rf node*
sudo rm -rf /usr/local/lib/dtrace/node.d
```
  3. 删除 /usr/local/include 下 node 和 node_modules 目录
```
cd /usr/local/include
sudo rm -rf node*
```

  4. 删除 /usr/local/bin 下 node 执行文件
```
cd /usr/local/bin
sudo rm /usr/local/bin/npm
sudo rm /usr/local/bin/node
ls -las  #仔细查看，全局安装的npm包一般会在这个目录下创建软连接，发现就删除
```

5. 进入个人主文件夹，检查各种 local、lib、include 文件夹，删除名字含有node和node_modules的文件和文件夹
6. 其他删除工作
```
sudo rm -rf /usr/local/share/man/man1/node.1
```
###### 四、验证删除结果
```javascript
node  //command not found
npm  //command not found

//说明卸载完了！
```

参考：[https://blog.csdn.net/huangpb123/article/details/120248002](https://blog.csdn.net/huangpb123/article/details/120248002)