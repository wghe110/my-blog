---
sidebarDepth: 0
---

# nvm 安装

## 卸载掉你电脑的 `node`
- 卸载从`node`官网下载`pkg`安装的`node`
```sh
sudo rm -rf /usr/local/{bin/{node,npm},lib/node_modules/npm,lib/node,share/man/*/node.*}
```
- 卸载用 `homebrew` 安装的`node`
```sh
brew uninstall node
```
- 验证
```sh
node  //command not found
npm  //command not found

//说明卸载完了！
```

## 安装
- 官网 [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)
```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```
- 国内镜像 [https://gitee.com/RubyKids/nvm-cn/](https://gitee.com/RubyKids/nvm-cn/)
```sh
bash -c "$(curl -fsSL https://gitee.com/RubyKids/nvm-cn/raw/master/install.sh)
```
- `git`安装（推荐）
```sh
# 1.进入根目录
cd ~/
# clone this repo in the root of your user profile
git clone https://github.com/nvm-sh/nvm.git .nvm
# 进入 .nvm 目录
cd ~/.nvm
# activate nvm by sourcing it from your shel
. ./nvm.sh
# 创建文件 .zshrc
cd ~/
touch ~/.zshrc
```
在`.zshrc`中添加下面的代码
```sh
vi ~/.zshrc
```
```sh
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

## 验证
```sh
command -v nvm
# 如果输出nvm，则成功，否则，不成功
```

## 使用方法
```sh
$ nvm use 16
Now using node v16.9.1 (npm v7.21.1)
$ node -v
v16.9.1
$ nvm use 14
Now using node v14.18.0 (npm v6.14.15)
$ node -v
v14.18.0
$ nvm install 12
Now using node v12.22.6 (npm v6.14.5)
$ node -v
v12.22.6

nvm run 6.10.3 app.js                 Run app.js using node 6.10.3
nvm exec 4.8.3 node app.js            Run `node app.js` with the PATH pointing to node 4.8.3
nvm alias default 8.1.0               Set default node version on a shell
nvm alias default node                Always default to the latest available node version on a shell

nvm install node                      Install the latest available version
nvm use node                          Use the latest version
nvm install --lts                     Install the latest LTS version
nvm use --lts                         Use the latest LTS version

nvm set-colors cgYmW                  Set text colors to cyan, green, bold yellow, magenta, and white
```

## 更改安装`node`源（可选）
```sh
cd ~/.zshrc
vi ~/.zshrc
# 在里面添加 export NVM_IOJS_ORG_MIRROR=源路径
# 源路径比如：http://npm.taobao.org/mirrors/node
```