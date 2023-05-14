# 项目介绍

## 框架简介

|              | 工具     |
| ------------ | -------- |
| 代码组织形式 | monorepo |
| 包管理工具   | pnpm     |
| 版本管理工具 | lerna    |

## 目录结构

```shell
├── README.md
├── configs               # 配置文件目录
│   ├── javascript.js     # eslint配置文件: js相关
│   ├── node-module.js
│   ├── node-script.js
│   ├── react.js
│   ├── vue2.js
│   └── vue3.js
├── environments          # 环境变量目录
│   ├── uni-app.json      # uni-app相关的环境变量
│   └── vue3.js
├── index.js              # 项目入口文件
└── rules                 # 规则目录
    ├── imports           # import相关规则
    │   └── index.js
    ├── javascript
    ├── node
    ├── react
    ├── typescript
    ├── vue2
    └── vue3
```

### 项目入口文件

index.js 实际上是一个 eslint 插件,通过 configs 字段可以暴露出多个 eslint 配置文件,以供其他项目引入.
