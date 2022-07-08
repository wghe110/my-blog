# windows设置github的SSH

#### 什么是ssh
  ssh是一种网络协议，用于计算机之间的加密登录
#### github(gitlub)为何要设置ssh
  加密传输

#### 前提（最好提前设置）
  - 设置 `git` 全局 `user.name` 和 `user.email`
```
git config --global user.name "你的名称"
git config --global user.email "你的邮箱" 
```

#### 设置步骤
  1. 查看本电脑是否有`id_rsa`和`id_rsa.pub`文件；目录：
```
C:\Users\你的用户名\.ssh
```
  2. 如果有，请跳到第 `4` 步
  3. 如果没有，打开命令行工具（`cmd` 或则 `git`）执行以下命令：
```bash
ssh-keygen -t rsa -C "你的邮箱地址"
```
  4. 在任意地方打开命令行工具，并在里面输入如下命令查看 `id_rsa.pub` 内容
    ```bash
    cat ~/.ssh/id_rsa.pub
    ```
  5. 复制里么的内容：如下
    ![id_rsa.pub](https://upload-images.jianshu.io/upload_images/4602786-ba42c766da0f4e99.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
  6. 打开 `github -> Settings -> SSH and GPG keys `或者 [https://github.com/settings/keys](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fsettings%2Fkeys) 后 点击 `New SSH key` 按钮，然后进行如下操作：
![看图操作，小可爱](https://upload-images.jianshu.io/upload_images/4602786-e17eb0a630522926.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

7. 校验是否成功：

  - 在命令行工具里面输入命令：
```
ssh -T git@github.com
```
- 然后你可能看到如下内容：直接输入 `yes` 回车
![看图，靓仔](https://upload-images.jianshu.io/upload_images/4602786-3034f4046853bd3d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 如果是下面的代码提示，说明失败，请重新回到第 `3` 步重新来一遍
```
Permission denied (publickey).
```

- 如果是下面的代码提示，说明成功了，晚上加个鸡腿吧
```
Hi FrankFang! You've successfully authenticated, but GitHub does not provide shell access.
```

8. 后面你就可以愉快的 **克隆代码** **提交代码** 了
9. 其他：
    - 一台电脑只需要一个 SSH key
    - 如果你新买了电脑，就在新电脑上重新生成一个 SSH key，把这个 key 也上传到 GitHub，它可以和之前的 key 共存在 GitHub 上
    - 如果你把 key 从电脑上删除了，重新生成一个 key 即可，替换之前的 key