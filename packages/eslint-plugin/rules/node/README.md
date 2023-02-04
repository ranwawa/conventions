# node

## 禁止使用废弃的 API

Why?

> 废弃的 API 在后续版本会被移出,使用废弃 API 可能产生潜在 BUG,请用新的 API 替代

bad

```js
const fs = require('fs');

fs.exists('./foo.js', function () {
  console.log('...');
});
```

good

```js
const fs = require('fs');

fs.stat('./foo.js', function () {
  console.log('...');
});
```

参考

- [node/no-deprecated-api](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-deprecated-api.md)

## 禁止引入 package.json 中不存在的包

Why?

> 引入 package 中不存在的包,很可能导致项目在其他电脑上无法运行,请先使用包管理工具将依赖添加到 package.json 文件中

package.json

```json
{
  "dependencies": {
    "md5": "*"
  }
}
```

bad

```js
const md5 = require('md5');
```

good

```js
const dayjs = require('dayjs');
```

参考

- [node/no-extraneous-import](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-import.md)

## 禁止直接给 exports 变量赋值

Why?

> 直接给 exports 赋值导致其指针发生变化,通常会导致不可预期的错误,请使用 module.exports 替代

bad

```js
exports = {};
```

good

```js
module.exports = {};
```

参考

- [node/no-exports-assign](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-exports-assign.md)

## 禁止使用 process.exit()函数

Why?

> process.exit()会导致整个 node 进程立即退出,请用异常替代可增强程序的稳定性

bad

```js
if (process.exitCode === 1) {
  process.exit(1);
}
```

good

```js
if (process.exitCode === 1) {
  throw new Error('有异常,请处理');
}
```

参考

- [node/no-process-exit](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-process-exit.md)

## 禁止忽略 bin 中文件

Why?

> package.json.bin 字段用于指定哪些文件推送到 npm 仓库.如果忽略文件,会导致推送失败,请移出`.npmignore`中的条目

package.json

```json
{
  "bin": ["./index.js"]
}
```

bad

```shell
// .npmignore
./index.js
```

good

```js

```

参考

- [node/no-unpublished-bin](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-bin.md)

## 禁止引入私有文件

Why?

> 不会发布到 npm 仓库的文件就是私有文件,如果在包文件中引入了私有文件,其他人安装这个包时就会报错,请把依赖包添加到 package.json 的 files 字段中

package.json

```json
{
  "files": ["./src"]
}
```

bad

```js
import { name } from './dist';
```

good

```js
import { name } from './src';
```

参考

- [no-unpublished-import](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-import.md)

## 禁止使用不支持的 ES/node 语法

Why?

> 使用 node 版本不支持的语法,如果未经打包工具编译,则会在生产环境报错,请使用低版本 node 或修改 eslint ecmaVersion 配置项

.eslintrc

```json
{
  "parserOptions": {
    "ecmaVersion": "3"
  }
}
```

bad

```js
[].filter(() => {});
```

good

```js
[].forEach(() => {});
```

参考

- [no-unsupported-features/es-syntax](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-syntax.md)

## package.json.bin 中的文件才能放置 shebang

Why?

> bin 中的文件在 npm 中会作为可执行文件.如果没有 shebang 将会报错

package.json

```json
{
  "bin": "./src/index.js"
}
```

bad

```js
const name = 'zmn';
```

good

```js
#!/usr/bin/env node

const name = 'zmn';
```

参考

- [node/shebang](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/shebang.md)
- [npm docs](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#bin)
