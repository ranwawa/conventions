# no-named-as-default

必须导入已存在的命名模块

### 为什么?

导入的模块必须已经被导出,否则在运行时会抛出异常

### 建议

检查拼写错误,然后重新导入

> moduleA.js

```js
export const name = 'zmn';
```

### 错误示例

```js
import { name1 } from './moduleA.js';
```

### 正确示例

```js
import { name } from './moduleA.js';
```

### 参考

- [import/named](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md)
