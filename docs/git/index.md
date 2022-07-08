---
sidebarDepth: 0
---

# git提交规范

*建议：多commit，每开发/修改一个功能（页面）commit一次，如果一次提交多个功能和页面，描述要多写*

### 格式

```sh
[type]:body
```

### type

- A:新功能（增）
- D: 删除（删）
- M：修补bug（改）


#### body
commit的简短描述，建议使用中文


#### 示例
```sh
[A]:添加深拷贝功能
[A]:添加login模块
[A]:添加登陆模块

[D]:删除深拷贝功能
[D]:删除 login模块
[D]:删除images文件夹

[M]:修复xxx功能bug
[M]:重构登陆模块
[M]:替换图片a
```