---
sidebarDepth: 0
---

# vscode配置

## 要求
  - 干净
  - 少配置
  - 简单
  - 适应多种项目的格式化规则

## 思路
  - 安装一个干净的vscode，并删掉之前的所有配置以及插件（插件目录可以截图保存）
  - 下载基本插件
  - 根据每个项目的 `.vscode` 目录下的`setting.json`文件来格式化项目（默认该优先级高于默认配置）

## 步骤
  1. 截图你的vscode插件列表
  2. 完全卸载你的vscode
      ```sh
        # mac完全卸载方法，windows自行搜索
      ```

      ```sh
      # mac完全卸载方法，windows自行搜索
      # 删除配置文件
      sudo rm -rf $HOME/Library/Application\ Support/Code
      # if you're using insider*
      sudo rm -rf $HOME/Library/Application\ Support/Code\ -\ Insiders/
      ```

      ```sh
        # 删除扩展插件
        sudo rm -rf $HOME/.vscode
        # if you're using insider*
        sudo rm -rf $HOME/.vscode-insiders/
      ```
      ```sh
        # 从应用中删除vscode（如果存在的话，如果直接解压后使用似乎好像用做）
        sudo rm -rf $HOME/.vscode
      ```

  3. 重新下载`vscode`
  4. 安装它
  5. 安装前端常用到的插件：（推荐）
      -  简体中文包
      - Volar
      - eslint
      - GitLens
      - Git History
      - Path Intellisense