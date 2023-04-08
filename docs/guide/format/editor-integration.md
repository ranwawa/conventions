# 编辑器集成

通过`husky`只能在提交 commit 信息时自动格式化,配合 IDE 插件使用,在编写代码的同时自动格式化,实时反馈,所见即所得,可提升开发体验.

## VSCode

### 安装 prettier 插件

- 启动 VSCode 快速导航
  - `⌘ + P`(mac)
  - `Ctrl + P`(win)
- 安装 prettier 插件
  - 输入 `ext install esbenp.prettier-vscode` 并按回车键

### 配置 VSCode 默认格式化工具

- 启动 VSCode 命令导航
  - `Shift + Alt + P`(win)
  - `⇧ + ⌘ + P`(mac)
- 打开编辑器配置文件
  - 输入 `Open User Settings (JSON)`并按回车键
- 配置默认格式化工具

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

### 配置 IDE 保存时自动格式化

- 启动 VSCode 命令导航
- 打开编辑器配置文件
- 配置保存时自动格式化

```json
{
  "editor.formatOnSave": true
}
```

## WebStorm

文档正在制作中...

## NeoVim

文档正在制作中...
