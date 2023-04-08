# 快速开始

统一 commit 工具及配置,可避因风格迥异的提交信息引起的阅读困难,语义化的提交信息能有效提高代码可阅读性,配合 cli 工具以及前端自动化,快速生成`更新日志`文件,可有效提升开发效率

采用业界流行的语义化提交信息风格 [Angular Commit Guidelines](https://www.conventionalcommits.org/zh-hans/v1.0.0/#%e7%ba%a6%e5%ae%9a%e5%bc%8f%e6%8f%90%e4%ba%a4%e8%a7%84%e8%8c%83) ,使用[git-cz](https://github.com/streamich/git-cz)进行模板化提交,通过[commitlint](https://commitlint.js.org/#/guides-local-setup)自动检验提交信息是否符合规范

## 安装依赖

npm`7+`

```shell
npm install --save-dev @ranwawa/configurations
```

## 初始化 commitlint 配置文件

```shell
echo "module.exports = { extends: ['@ranwawa/configurations/commitlint-config'] };" > commitlint.config.js
```

## 验证 commitlint 配置是否生效

提交一个标准的 commit 信息

```shell
git add package.json
git commit -m "build(root): 安装commitlint相关依赖"
npx commitlint --from HEAD~1 --to HEAD --verbose
```

输出以下信息,表示配置生效

```shell
⧗   input: build(root): 安装commitlint相关依赖
✔   found 0 problems, 0 warnings
```

## 初始化 git-cz 配置文件

每次提交信息时,按照标准格式手动输入 commit 信息( `feat(home): 巴拉巴拉巴拉`)比较繁琐
通过 git-cz 以模板的形式进行提交,可有效提高开发效率

```shell
echo "module.exports = require('@ranwawa/configurations/git-cz-config');" > changelog.config.js
```

## 添加 git-cz 命令

npm`7+`

```shell
npm set-script commit "git-cz"
```

手动添加到`package.json`文件中

```json
  "scripts": {
    "commit": "git-cz"
  }
```

## 验证 git-cz 是否配置成功

运行提交命令

```shell
git add changelog.config.js
npm run commit
```

输出以下信息,表示配置生效

```shell
? Select the type of change that you're committing: (Use arrow keys or type to search)
❯ 🎸  feat:       新功能
  🐛  fix:        bug修复
  💍  test:       增加测试用例
  💡  refactor:   重构代码(既不是新增功能也不是修复bug)
  💄  style:      空格,格式化,分号,文字错误等不影响功能的修改
  ️📖  docs:       注释,文档等无关代码的修改
  🎡  build:      构建/持续集成相关的修改
```
