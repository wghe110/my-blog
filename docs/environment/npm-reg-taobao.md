# npm配置taobao镜像

- npm设置淘宝镜像
```javascript
npm config set registry https://registry.npm.taobao.org
```

- 查看镜像设置
```javascript
npm config get registry
```

- 还原成npm镜像（**发布npm包可能用得到**）
```javascript
npm config set registry https://registry.npmjs.org/
```