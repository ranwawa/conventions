# no-duplicates

必须在一条语句中完成所有命名模块的导入

### 为什么?

在页面引用变多时会出现这种情况,使相同的逻辑分散到了不同的地方,降低了代码的可阅读性

### 建议

将多条同一个模块的导入语句合并成一条导入语句

### 错误示例

```js
import { chunk } from 'lodash';
import { contact } from 'lodash';
```

### 正确示例

```js
import { chunk, contact } from 'lodash';
```

### 参考

- [import/no-duplicates](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md)
