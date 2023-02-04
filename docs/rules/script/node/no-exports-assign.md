# 禁止引入 package.json 中不存在的包

## Why?

> 引入 package 中不存在的包,很可能导致项目在其他电脑上无法运行,请先使用包管理工具将依赖添加到 package.json 文件中

package.json

```json
{
  "dependencies": {
    "md5": "*"
  }
}
```

## bad

```js
const md5 = require("md5");
```

## good

```js
const dayjs = require("dayjs");
```

## 参考

- [node/no-extraneous-import](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-import.md)
