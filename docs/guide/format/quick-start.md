# @ranwawa/prettier-config

统一格式化工具及配置,可以避免多人协作时的代码冲突,配合 IDE 自动格式化以及前端自动化,可以有效维护团队开发规范和提升开发效率

采用业界最流程的代码格式化工具 [prettier](https://prettier.io/docs/en/index.html) ,完美支持所有前端语言,并且和 eslint/stylelint 等前端生态兼容生非常好.

## 1.1 安装依赖

> **重要:** 需要先将镜像源设置为公司内部镜像.[如何设置](https://alidocs.dingtalk.com/i/nodes/3Pl7jXNw6dBWxlDzenBzWvKAGqOzY0D9?nav=mySpace&navQuery=spaceId%3D9JOGO78J8Qr7jG4Q&iframeQuery=utm_source%3Dportal%26utm_medium%3Dportal_myspace_create)

npm

```shell
npm install --save-dev @ranwawa/prettier-config prettier
```

yarn

```shell
yarn add --dev @ranwawa/prettier-config prettier
```

## 1.2 初始化 prettier 配置文件

```bash
echo '"@ranwawa/prettier-config"' > .prettierrc
```

## 1.3 验证 prettier 配置是否生效

```shell
npx prettier --write .prettierrc

# 输出以下信息,表示配置生效
.prettierrc.js 32ms
```

## 1.4 添加 lint 命令

> **重要:** 命令中最后那个`.`表示检查所有文件,可根据项目需要自定义文件目录

npm 7+

```shell
npm set-script lint:style "prettier --check --ignore-unknown ."
npm set-script lint-fix:style "prettier --check --ignore-unknown --write ."
```

直接添加到`package.json`文件中

```json
{
  "scripts": {
    "lint:style": "prettier --check --ignore-unknown .",
    "lint-style:style": "prettier --check --ignore-unknown --write ."
  }
}
```

## 1.5 运行 lint 命令

```shell
npm run lint:style
```
