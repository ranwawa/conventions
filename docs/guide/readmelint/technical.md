# @ranwawa/readmelint

## 3.1 框架简介

| 分类                  | 工具            |
| --------------------- | --------------- |
| 开发语言              | typescript      |
| 配置文件识别工具      | cosmiconfig     |
| 配置文件检测工具      | ajv             |
| markdown 语法转换工作 | marked          |
| 日志工具              | loglevel, chalk |
| 包管理工具            | pnpm, lerna     |

## 3.2 目录结构

```shell
├── dist            # 打包后的目录
├── src             # 源文件目录
│   ├── bin.ts      # npm命令文件
│   ├── config.ts   # 配置文件相关函数
│   ├── index.ts    # 包入口文件
│   ├── linter.ts   # 检测相关函数
│   ├── logger.ts   # 日志相关函数
│   ├── meow.ts     # 命令行相关配置
│   └── util.ts     # 工具函数
└── types           # ts类型
```
