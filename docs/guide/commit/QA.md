# 常见问题

## 执行`npx commitlint --from HEAD~1 --to HEAD --verbose`报错

### 报错信息

```shell
Error [ERR_REQUIRE_ESM]: require() of ES Module .../commitlint.config.js from .../node_modules/.pnpm/cosmiconfig@8.1.3/node_modules/cosmiconfig/dist/loaders.js not supported.
commitlint.config.js is treated as an ES module file as it is a .js file whose nearest parent package.json contains "type": "module" which declares all .js files in that package scope as ES modules.
Instead rename commitlint.config.js to end in .cjs, change the requiring code to use dynamic import() which is available in all CommonJS modules, or change "type": "module" to "type": "commonjs" in .../package.json to treat all .js files as CommonJS (using .mjs for all ES modules instead).
```

### 解决方法

将 `commitlint.config.js` 改为 `commitlint.config.cjs`

## 执行 `npm run commit` 报错

### 报错信息

```shell
✖  fatal     Error [ERR_REQUIRE_ESM]: require() of ES Module .../changelog.config.js from .../node_modules/.pnpm/git-cz@4.9.0/node_modules/git-cz/dist/cli.js not supported
changelog.config.js is treated as an ES module file as it is a .js file whose nearest parent package.json contains "type": "module" which declares all .js files in that package scope as ES modules.
Instead rename changelog.config.js to end in .cjs, change the requiring code to use dynamic import() which is available in all CommonJS modules, or change "type": "module" to "type": "commonjs" in .../package.json to treat all .js files as CommonJS (using .mjs for all ES modules instead)
```

### 解决方法

将 `changelog.config.js` 改为 `changelog.config.cjs`
