# 自动验证 commit 信息

通过`npx commitlint --from HEAD~1 --to HEAD --verbose`命令手动验证提交信息,比较繁琐

可通过 [husky](https://github.com/typicode/husky) 在每次提交信息(commit)之前,对当前提前信息进行验证,从而避免提交错误的提交信息

## 安装依赖

npm

```shell
npm install --save-dev husky
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

## 在 commit 前自动执行 commitlint

```shell
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit $1'
```

## 验证 husky 配置是否生效

提交一个错误的 commit message

```shell
git add .husky/commit-msg
git commit -m "通过husky自动运行commitlint进行验证"
```

输出以下信息,表示配置生效

```shell
⧗   input: 通过husky自动运行commitlint进行验证
✖   type may not be empty [type-empty]
✖   subject may not be empty [subject-empty]

husky - commit-msg hook exited with code 1 (error)
```
