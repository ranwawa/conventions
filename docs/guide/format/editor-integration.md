# 编辑器集成

像上面这样通过命令格式代码,只能在执行命令时格式化,配合 IDE 插件使用,可以在编写代码或者保存代码时就自动格式化,实时得到反馈,有效提升开发体验.

## 配合 VSCode 使用

### 安装 prettier 插件

- 启动 VSCode 快速导航
  - `Ctrl + P(win)` `⌘ + P(mac)`
- 安装 prettier 插件
  - 输入 `ext install esbenp.prettier-vscode` 并按回车键

### 设置 VSCode 默认格式化工具

- 启动 VSCode 命令导航
  - `Shift + Alt + P(win)` `⇧ + ⌘ + P(mac)`
- 打开编辑器配置文件
  - 输入 `Open User Settings (JSON)`并按回车键
- 添加默认格式化工具配置项
  - `"editor.defaultFormatter": "esbenp.prettier-vscode"`

### 设置 IDE 保存时自动格式化

- 启动 VSCode 命令导航
- 打开编辑器配置文件
- 添加保存时自动格式化配置项
  - `"editor.formatOnSave": true`

## 配合 WebStorm 使用

文档正在制作中...
