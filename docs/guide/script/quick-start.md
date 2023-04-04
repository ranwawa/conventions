# 快速开始

## 1 切换内网镜像

> **重要:** 需要先将镜像源设置为公司内部镜像.[如何设置](https://alidocs.dingtalk.com/i/nodes/3Pl7jXNw6dBWxlDzenBzWvKAGqOzY0D9?nav=mySpace&navQuery=spaceId%3D9JOGO78J8Qr7jG4Q&iframeQuery=utm_source%3Dportal%26utm_medium%3Dportal_myspace_create)

```shell

npm install nrm -g
nrm add zmn https://maven.xiujiadian.com/repository/npm_public/
nrm use zmn
```

## 2 安装依赖

npm 7+

```shell
npm install --save-dev eslint @ranwawa/eslint-plugin
```

npm

```shell
npm install --save-dev eslint @ranwawa/eslint-plugin

npm install --save-dev @typescript-eslint/eslint-plugin eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-node eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-vue prettier
```

yarn

```shell
yarn add --dev eslint @ranwawa/eslint-plugin

yarn add --dev  @typescript-eslint/eslint-plugin eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-node eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-vue prettier
```

## 3 创建配置文件

vue2

```shell
echo '{ "extends": ["plugin:@ranwawa/eslint-plugin/vue2"] }' > .eslintrc
```

vue3 + ts

```shell
echo '{ "extends": ["plugin:@ranwawa/eslint-plugin/vue3"] }' > .eslintrc
```

react + ts

```shell
echo '{ "extends": ["plugin:@ranwawa/eslint-plugin/react"] }' > .eslintrc
```

uni-app

```shell
echo '{ "extends": ["plugin:@ranwawa/eslint-plugin/react"], "plugins": ["@ranwawa/eslint-plugin"], "env": { "@ranwawa/uni-app": true } }' > .eslintrc
```

## 4 添加 lint 命令

自动添加`npm7+`

```shell
npm set-script lint:script "eslint ./ --ext .js,.ts,.vue,.jsx,.tsx"
npm set-script lint-fix:script "eslint ./ --ext .js,.ts,.vue,.jsx,.tsx --fix"
```

手动添加到 package.json 文件

```json
{
  "scripts": {
    "lint:script": "eslint ./ --ext .js,.ts,.vue,.jsx,.tsx",
    "lint-fix:script": "eslint ./ --ext .js,.ts,.vue,.jsx,.tsx --fix"
  }
}
```

## 5 运行 lint 命令

```shell
npm run lint:script
```
