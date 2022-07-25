---
sidebarDepth: 0
---

# 自定义脚手架搭建

有时候我们需要时常用到一个自定义的脚手架，我们每次不能老复制粘贴，容易丢失文件，且效率低；所以就有写一个类似`vue-cli`一样的脚手架来生成我们需要的文件配置

### 需要的组件库
 - `commander`
 - `download-git-repo`
 - `chalk`
 - `inquirer`
 - `ora`

*使用方法以及功能自行去[npmjs.com](https://www.npmjs.com/)查看*

### 配置`package.json`
```json
{
  "name": "wgh-cli",
  "version": "1.0.1",
  "description": "个人脚手架，方便快速创建vue项目",
  "main": "index.js",
  "scripts": {
    "dev": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "bin": {
    "wgh": "index.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/wghe110/my-vue-scaffold.git"
  },
  "keywords": [
    "vue",
    "scaffold",
    "vite",
    "vue2",
    "vue3",
    "cli"
  ],
  "author": "wghe110",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/wghe110/my-vue-scaffold/issues"
  },
  "homepage": "https://github.com/wghe110/my-vue-scaffold#readme",
  "dependencies": {
    "chalk": "^4.1.2",
    "commander": "^9.4.0",
    "download-git-repo": "^3.0.2",
    "inquirer": "^8.2.4",
    "ora": "^5.4.1"
  }
}


/* 
name：该字段是用来发布npm包使用的，说明了npm包的名称，也就是publish后可以在npmjs中通过该名称搜索到。
version：该字段说明版本号
main：该字段是指程序的主入口。
bin：该字段是指定你的脚手架在命令行运行的指令，我这里的bin字段配置成"wgh": “index.js”，意思是我在命令行中可以使用lin这个指令来调用我得自定义脚手架，自定义脚手架执行的脚本文件就是index.js。比如：wgh vue，就是执行index.js文件，并把 vue 这个参数传递给index.js。
*/
```

### 主要逻辑的文件
- `index.js`
```js
// index.js

#!/usr/bin/env node
// 使用node开发命令行工具所执行的js脚本必须在顶部加入 #!/usr/bin/env node 生命
// #!/usr/bin/env node 告诉系统该脚本使用node运行，用户必须在系统变量中配置了node

const { program } = require('commander')
const chalk = require('chalk')

// 模块
const { VueInit } = require('./modules/vue')
const { downloadGit } = require('./modules/download')

// 介绍
program
    .name(chalk.yellow('wgh-cli'))
    .description(chalk.dim('个人脚手架，集成了vue2和vue3，后续会添加更多框架...'))

    .argument(`[${chalk.green('vue')}]`, chalk.blue('下载vue脚手架，需要选择vue版本'))
    .argument(`[${chalk.green('vue2')}]`, chalk.blue('下载vue2脚手架'))
    .argument(`[${chalk.green('[vue3]')}]`, chalk.blue('下载vue3脚手架'))

    .version('1.0.0')

const errorTips = () => {
    console.log(chalk.red('输入命令错误'))
    console.log('可以输入以下命令:')
    console.log(`${chalk.green('wgh vue')} ${chalk.blue('下载vue脚手架，需要选择vue版本')}`)
    console.log(`${chalk.green('wgh vue2')} ${chalk.blue('下载vue2脚手架')}`)
    console.log(`${chalk.green('wgh vue3')} ${chalk.blue('下载vue3脚手架')}`)
}

program.parse();
// console.log('Options: ', program.opts());
// console.log('Remaining arguments: ', program.args);
const opts = program.opts();
const args = program.args;
// 判断入参是否是vue2/vue3/vue
if(args.length && args.length === 1) {
    switch(args[0]){
        case 'vue':
            VueInit();
            break;
        case 'vue2':
            downloadGit('dev_vue2')
            break;
        case 'vue3':
            downloadGit('dev_vue3')
            break;
        // TODO可以拓展
        default:
            errorTips()
            break;
    }
} else {
    errorTips()
}

```

- `/modules/vue.js`
```js
// modules/vue.js
const inquirer = require('inquirer')
const { downloadGit } = require('./download')

const VueInit = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'version',
                message: '请选择vue版本',
                default: 'vue2',
                choices: [
                    'vue2',
                    'vue3'
                ]
            }
        ])
        .then((answers) => {
            // console.log('answers', answers)
            const ans = answers['version']
            if(ans === 'vue2') {
                downloadGit('dev_vue2');
            } else {
                downloadGit('dev_vue3');
            }
        })
        .catch(error => {
            console.error(error)
        })
}

module.exports.VueInit = VueInit;
```

- `/modules/download.js`
```js
// modules/download.js
const download = require('download-git-repo')
const ora = require('ora')
const chalk = require('chalk')
const inquirer = require('inquirer')



const downloadGit = (branch="main") => {
    const src = `wghe110/vite-project#${branch}`

    inquirer
        .prompt([
            {
                type: 'input',
                name: 'folder',
                message: '下载文件的目录（默认当前目录）',
            }
        ])
        .then((answers) => {
            const ans = answers['folder']
            downloading(src, ans)
        })
        .catch(error => {
            console.error(error)
        })
}

const downloading = (src, folder='') => {
    const loading = ora('正在下载...').start();
    download(src, folder, function(err) {
        if(err) {
            // 下载错误
            console.log('err', err)
            loading.fail('下载失败');
        } else {
            // 下载成功
            loading.succeed('下载成功');

            console.log(`${chalk.blue('安装依赖')} ${chalk.green('npm install')}`)
            console.log(`${chalk.blue('开启本地服务器')} ${chalk.green('npm run serve')}`)
        }
    })
}

module.exports.downloadGit = downloadGit
```

## 参考
[https://github.com/wghe110/my-vue-scaffold](https://github.com/wghe110/my-vue-scaffold)

[自定义脚手架](https://blog.csdn.net/vgub158/article/details/105302020)