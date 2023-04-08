# 自动格式化

通过`npm run lint:style`命令手动格式化代码,比较繁琐,一次性格式化所有代码也会引起心智负担,也不利于代码审查

可通过 [husky](https://github.com/typicode/husky) 配合 [lint-staged](https://github.com/okonet/lint-staged) 在每次提交信息(commit)之前,对当前更改的文件进行格式化,减少重复的人工操作,避免一次性格式化所有代码引起的心智负担

## 安装依赖

npm

```shell
npm install --save-dev husky lint-staged
```

## 在 npm 生命周期中自动激活 husky

npm`7+`

```shell
npm set-script prepare "husky install"
```

手动添加到`package.json`文件中

```json
  "scripts": {
    "prepare": "husky install"
  }
```

## 手动激活 husky

```shell
npm run prepare
```

## 初始化 lint-staged 配置文件

```shell
echo '{"*.{js,jsx,ts,tsx,vue,json,css,scss,sass,html,md,yaml,yml}": "prettier --ignore-unknown --write"}' > .lintstagedrc
```

## 在 commit 前自动执行 prettier 命令

```shell
npx husky add .husky/pre-commit "npx lint-staged --allow-empty"
```

## 验证 husky 配置是否生效

提交工作区代码到暂存区

```bash
git add package.json
git commit -m "build: 初始化lintstage配置文件"
```

输出以下信息,表示配置生效

```shell
✔ Preparing...
✔ Running tasks...
✔ Applying modifications...
✔ Cleaning up...
```
