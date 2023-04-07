# 自动验证commit信息

## 在 npm 生命周期中自动激活 husky

```shell
npm set-script prepare "husky install"
```

## 手动激活 husky

```shell
npm run prepare
```

## 在 husky 生命周期中自动执行 commitlint

```shell
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit $1'
```

## 验证 husky 是否配置成功

提交一个错误的commit message

```shell
git add .husky/commit-msg
git commit -m "通过husky自动运行commitlint进行验证"
```

输出以下信息,表示配置生效

```shell
⧗   input: 通过husky自动运行commitlint进行验证
✖   type may not be empty [type-empty]
✖   subject may not be empty [subject-empty]
```
