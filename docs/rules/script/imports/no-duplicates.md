# no-duplicates

no-duplicates

必须在一条语句中完成所有全名模块导入

### 为什么?

在页面引用变多时会出现这种情况,额外增加了代码行数,也使相同的逻辑分散到了不同的地方

### 错误示例

```js
import { chunk } from "lodash";
import { contact } from "lodash";
```

### 正确示例

```js
import { chunk, contact } from "lodash";
```

### 参考

- [import/no-duplicates](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md)
