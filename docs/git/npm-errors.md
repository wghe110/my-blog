---
sidebarDepth: 0
---

# npm 常见错误

## 记录npm publish错误解决方案：
- 报错信息
```sh
you or one of your dependencies are requesting a package version that is forbidden by your security policy
```

- 修复方法
  1. 用了淘宝镜像源 - 换成npm的源
  2. 包名重复 - 删掉之前的包，改个名字
  3. npm账户没有验证邮箱 - 验证邮箱
  4. vpn冲突 - 关掉所有vpn再次尝试
  5. **npm没有验证邮箱**