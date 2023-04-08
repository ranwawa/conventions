# 快速开始

统一格式化工具及配置,可避免多人协作时因格式化问题引起的代码冲突,配合 IDE 自动格式化以及前端自动化,可有效地提升开发效率

采用业界流行的代码格式化工具 [prettier](https://prettier.io/docs/en/index.html) ,支持所有前端语言,并且和 eslint/stylelint 等前端生态兼容

<!-- TODO 这里需要一张截图对比 -->

## 安装依赖

npm`7+`

```shell
npm install --save-dev @ranwawa/prettier-config
```

## 初始化 prettier 配置文件

```shell
echo '"@ranwawa/configurations/prettier-config"' > .prettierrc
```

## 验证 prettier 配置是否生效

格式化 prettier 配置文件

```shell
npx prettier --write .prettierrc
```

输出以下信息,表示配置生效

```shell
.prettierrc.js 32ms
```

## 添加 lint 命令

npm 7+

```shell
npm set-script lint:style "prettier --check --ignore-unknown ."
```

直接添加到`package.json`文件中

```json
{
  "scripts": {
    "lint:style": "prettier --check --ignore-unknown --write ."
  }
}
```

> 命令中最后的`.`表示检查所有文件,可根据项目需要自定义文件目录

## 运行 lint 命令

```shell
npm run lint:style
```
