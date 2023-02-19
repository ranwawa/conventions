# no-extraneous-import

no-extraneous-import

禁止引入 package.json 中不存在的包

### 为什么?

引入 package 中不存在的包,很可能导致项目在其他电脑上无法运行,请先使用包管理工具将依赖添加到 package.json 文件中

package.json

```json
{
  "dependencies": {
    "md5": "*"
  }
}
```

### 错误示例

```js
const md5 = require("md5");
```

### 正确示例

```js
const dayjs = require("dayjs");
```

## 参考

- [node/no-extraneous-import](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-import.md)
