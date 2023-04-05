# 快速开始

## 1 安装依赖

### npm

```shell
npm install --save-dev @ranwawa/eslint-plugin
```

## 2 创建配置文件

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

## 3 添加 lint 命令

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

## 4 运行 lint 命令

```shell
npm run lint:script
```
