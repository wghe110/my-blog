---
sidebarDepth: 0
---

# vue-cli @4.5.12引用文件路径怎么写

`vue-cli`版本`@4.5.12`
目录结构：
```js
|-- project
    |-- .gitignore
    |-- README.md
    |-- babel.config.js
    |-- jsconfig.json
    |-- package.json
    |-- vue.config.js
    |-- public
    |   |-- favicon.ico
    |   |-- ttt.jpg
    |   |-- index.html
    |-- src
        |-- App.vue
        |-- main.js
        |-- assets
        |   |-- logo.png
        |   |-- zombie-no-pivot.json
        |   |-- zombie-no-pivot.png
        |-- components
        |   |-- HelloWorld.vue
        |-- router
        |   |-- index.js
        |   |-- routes.js
        |-- views
            |-- demo1.vue
            |-- demo2.vue
            |-- home.vue
```

引用文件的场景主要分三种：
- npm包
- 图片
- 组件/插件

#### npm包
```js
import xxx from 'xxx'
```
#### 图片
`vue-cli` 目录中`public`目录下的文件构建打包时会直接复制到构建目录，不会做任何处理，目录机构和绝对路径不变。所以`public`下面的文件都可以用 **绝对路径** 引用
```
<img src="/public/a.png" />
```
而`/src/assets/`下面的图片`webpack`打包会进行`hash`处理，一般情况下用 **相对路径** 引用
```js
<img src="../assets/b.jpg" />
```
#### 组件/插件
组件一般分同模块下组件和外部组件，插件一般都是外部的，同模块下组件建议用 **相对路径** 引用，外部组件/插件建议用 **绝对路径** 引用
```js
// 同模块引用
import c from './c.vue'

// 外部组件引用
import d from '/components/d.vue'
import e from '/utils/e.js'
```

### 总结：
上面说的有点小乱，下面列一下解决方案：
- `template`下图片建议用绝对路径（vue.config.js配置绝对路径配合）
```js
// vue.config.js

const path = require('path');

const resolve = (dir) => path.join(__dirname, dir)

module.exports = {
  chainWebpack(config) {
    config.resolve.alias
      .set('assetsPath', resolve('./src/assets'))
      .set('publicPath', resolve('./public'))
      .set('viewsPath', resolve('./src/views'))
      .set('routerPath', resolve('./src/router'))
  }
}

```
```js
// demo.vue
<template>
  <div>
    <img src="assetsPath/a.png" />
    <img src="publicPath/b.png" />
  </div>
</template>
```
- `<script>`下面的文件引用：同模块用相对路径，外部模块用绝对路径，图片用`require`➕绝对路径（绝对路径配置vue.config.js)
```js
// demo1.vue

//同模块下引用
import demo2 from './demo2.vue'
// 外部模块引用
import router from 'routerPath/routes.js'
// npm包引用
import axios from 'axios'

// 图片引用
export default {
  data() {
    return {
      imgSrc: require('assetsPath/logo.png') // 多次使用的话，定义一个变量保存图片引用
    }
  },
  created(){
    // 只使用一次的话，直接require绝对路径
    const zmobie_no_pivot = require('assetsPath/zmobie_no_pivot.pn')
    console.log(zmobie_no_pivot)
  }
}
```
- `<style>`下文件图片的路径应用：`public`下面的文件/图片直接用绝对路径引用（不要用vue.config.js配置的路径）；`assets`下的文件/图片用相对路径引用
```js
// demo1.vue
<style scoped>
  .a{
    background-image: url(../assets/log.png); // assets下面的用相对路径引用
  }
  .b{
    background-image: url(/public/ttt.jpg); // public下面的用绝对路径引用
  }
</style>
```