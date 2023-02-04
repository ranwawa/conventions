# @ranwawa/prettier-config

像上面这样通过命令格式代码,只能在执行命令时格式化,配合 IDE 插件使用,可以在编写代码或者保存代码时就自动格式化,实时得到反馈,有效提升开发体验.

## 3.1 配合 vscode 使用

### 3.1.1 安装 prettier 插件

- 按 Ctrl + P(win) / ⌘ + P(mac),打开快速导航
- 粘贴 ext install esbenp.prettier-vscode 并按回车安装插件

### 3.1.2 设置 IDE 默认格式化工具

- 按 Shift + Alt + P(win) / ⇧ + ⌘ + P(mac),打开命令导航
- 输入 Open User Settings (JSON),打开编辑器配置文件
- 添加配置项"editor.defaultFormatter": "esbenp.prettier-vscode"

### 3.1.3 设置 IDE 保存时自动格式化

- 按 Shift + Alt + P(win) / ⇧ + ⌘ + P(mac),打开命令导航
- 输入 Open User Settings (JSON),打开编辑器配置文件
- 添加配置项"editor.formatOnSave": true

## 3.2 配合 webstorm 使用

文档正在制作中
