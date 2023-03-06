# @ranwawa/eslint-plugin

## 1. 快速开始

### 安装依赖

#### pnpm

```shell
pnpm i
```

#### npm 7+

```shell
npm install --save-dev @ranwawa/eslint-plugin
```

#### npm

```shell
npm install --save-dev @ranwawa/eslint-plugin \
                       @typescript-eslint/eslint-plugin \
                       eslint-plugin-import \
                       eslint-plugin-jsx-a11y \
                       eslint-plugin-node \
                       eslint-plugin-prettier \
                       eslint-plugin-react \
                       eslint-plugin-react-hooks \
                       eslint-plugin-vue
```

#### yarn

```shell
yarn add --save-dev @ranwawa/eslint-plugin \
                       @typescript-eslint/eslint-plugin \
                       eslint-plugin-import \
                       eslint-plugin-jsx-a11y \
                       eslint-plugin-node \
                       eslint-plugin-prettier \
                       eslint-plugin-react \
                       eslint-plugin-react-hooks \
                       eslint-plugin-vue
```

### 创建配置文件

#### vue2

```shell
echo '{ "extends": ["plugin:@ranwawa/eslint-plugin/vue2"] }' > .eslintrc
```

#### vue3 + ts

```shell
echo '{ "extends": ["plugin:@ranwawa/eslint-plugin/vue3"] }' > .eslintrc
```

#### react + ts

```shell
echo '{ "extends": ["plugin:@ranwawa/eslint-plugin/react"] }' > .eslintrc
```

#### uni-app

```shell
echo '{ "extends": ["plugin:@ranwawa/eslint-plugin/react"], "plugins": ["@ranwawa/eslint-plugin"], "env": { "@ranwawa/uni-app": true } }' > .eslintrc
```

### 添加 lint 命令

#### npm7+

```shell
npm set-script lint:script "eslint ./ --ext .js,.ts,.vue,.jsx,.tsx"
npm set-script lint-fix:script "eslint ./ --ext .js,.ts,.vue,.jsx,.tsx --fix"
```

#### 手动添加到 package.json 文件

```json
{
  "scripts": {
    "lint:script": "eslint ./ --ext .js,.ts,.vue,.jsx,.tsx",
    "lint-fix:script": "eslint ./ --ext .js,.ts,.vue,.jsx,.tsx --fix"
  }
}
```

### 运行 lint 命令

```shell
npm run lint:script
```

## 2. 业务介绍

### 业务简介

eslint 规范.集中管理所有项目的 eslint 规范.包括介不限于`vue2`,`vue3`,`react`

### 相关文档

| 文档类型        | 链接                                                                                                                                                                                                      |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 重新认识 eslint | [钉钉文档](https://alidocs.dingtalk.com/i/nodes/od245kZmnOeW45Pn2ev0VYbzxL6R0wMQ?nav=mySpace&navQuery=spaceId%3D9JOGO78J8Qr7jG4Q&iframeQuery=utm_source%3Dportal%26utm_medium%3Dportal_myspace_file_tree) |

## 3. 技术介绍

### 框架简介

|              | 工具  |
| ------------ | ----- |
| 包管理工具   | pnpm  |
| 版本管理工具 | lerna |

### 目录结构

```shell
├── README.md # 项目介绍
├── configs # 配置文件目录
│   ├── javascript.js # eslint配置文件: js相关
│   ├── node-module.js
│   ├── node-script.js
│   ├── react.js
│   ├── vue2.js
│   └── vue3.js
├── configs # 环境变量目录
│   ├── uni-app.json # uni-app相关的环境变量
│   └── vue3.js
├── index.js # 项目入口文件
└── rules # 规则目录
    ├── imports # import相关规则
    │   ├── README.md # 文档
    │   └── index.js # eslint规则
    ├── javascript
    ├── node
    ├── react
    ├── typescript
    ├── vue2
    └── vue3
```

#### 项目入口文件

index.js 实际上是一个 eslint 插件,通过 configs 字段可以暴露出多个 eslint 配置文件,以供其他项目引入.

## 4. 常见问题

### vue3 setup 模式下 template 中使用的变量报 no-unused-vars 错误

这是老版本 vue-eslint-parser 不兼容 setup 语法导致.先删除本地的 vue-eslint-parser 然后重新安装即可

```shell
npm uninstall vue-eslint-parser

npm install --save-dev vue-eslint-parser
```

参考: [eslint-plugin-vue 官网](https://eslint.vuejs.org/rules/script-setup-uses-vars.html)

### 一下扫描出几百几千个错误怎么办?

对于老项目这种现象非常正常.我们只需要关心自己修改的文件即可.可以将 npm 命令修改成只扫描对应文件

```json
{
  "scripts": {
    "lint-fix:script": "eslint ./src/App.vue --ext .js,.ts,.vue,.jsx,.tsx --fix"
  }
}
```
