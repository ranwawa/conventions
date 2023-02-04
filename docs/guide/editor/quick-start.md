# @ranwawa/editor-config

统一编辑器配置,可以减少跨系统,跨编辑器引起的代码格式化冲突问题,有效提升开发体验

[editorconfig](https://editorconfig.org/)兼容所有主流的编辑器如 vscode/webstore/subline 等,能够处理 win/mac/linux 等系统上的格式化差异.

### 1.1 安装依赖

> **重要:** 需要先将镜像源设置为公司内部镜像.[如何设置](https://alidocs.dingtalk.com/i/nodes/3Pl7jXNw6dBWxlDzenBzWvKAGqOzY0D9?nav=mySpace&navQuery=spaceId%3D9JOGO78J8Qr7jG4Q&iframeQuery=utm_source%3Dportal%26utm_medium%3Dportal_myspace_create)

npm

```shell
npm install --save-dev @ranwawa/editor-config
```

yarn

```shell
yarn add --dev @ranwawa/editor-config
```

### 1.2 初始化 editorconfig 配置文件

```bash
cat node_modules/@ranwawa/editor-config/.editorconfig > .editorconfig
```
