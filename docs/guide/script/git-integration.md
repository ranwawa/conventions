# GIT 集成

通过`npm run lint:script`命令手动验证代码,比较繁琐,一次性验证所有代码也会引起心智负担,也不利于代码审查

可通过 [husky](https://github.com/typicode/husky) 配合 [lint-staged](https://github.com/okonet/lint-staged) 在每次提交信息(commit)之前,对当前更改的文件进行验证,减少重复的人工操作,避免一次验证所有代码引起的心智负担

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

## 初始化 lint-staged 配置文件

```bash
echo '{"*.{js,jsx,ts,tsx}": "eslint --fix"}' > .lintstagedrc
```

## 在 commit 前自动执行 eslint 命令

```shell
npx husky add .husky/pre-commit "npx lint-staged --allow-empty"
```

## 验证 husky 配置是否生效

创建一个临时的 js 文件,并提交到暂存区

```shell
echo "const a = 1;" > test-for-eslint.js
git add test-for-eslint.js
git commit -m "build: 初始化lintstage配置文件"
rm test-for-eslint.js
```

输出以下信息,表示配置生效

```shell
✔ Preparing lint-staged...
❯ Running tasks for staged files...
  ❯ .lintstagedrc — 1 file
    ❯ *.{js,jsx,ts,tsx} — 1 file
      ✖ eslint --fix [FAILED]
↓ Skipped because of errors from tasks. [SKIPPED]
✔ Reverting to original state because of errors...
✔ Cleaning up temporary files...
```
