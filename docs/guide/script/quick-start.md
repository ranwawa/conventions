# 快速开始

统一编码,可避免低级语法错误引起的 bug,[eslint](https://eslint.org/)能快速发现并修复问题,可极大提升代码健壮性,多人协作时可有效提升开发效率

## 安装依赖

npm`7+`

```shell
npm install --save-dev @ranwawa/eslint-plugin
```

## 初始化 eslint 配置文件

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

## 验证 eslint 配置是否生效

创建一个临时的 js 文件,并运行 eslint 命令

```shell
echo "const a = 1;" > test-for-eslint.js
eslint test-for-eslint.js
rm test-for-eslint.js
```

输出以下信息,表示配置生效

```shell
1:7  error  'a' is assigned a value but never used  no-unused-vars
```

## 添加 lint 命令

自动添加`npm7+`

```shell
npm set-script lint:script "eslint ./ --ext .js,.ts,.vue,.jsx,.tsx --fix"
```

手动添加到 package.json 文件

```json
{
  "scripts": {
    "lint:script": "eslint ./ --ext .js,.ts,.vue,.jsx,.tsx --fix"
  }
}
```

## 运行 lint 命令

```shell
npm run lint:script
```
