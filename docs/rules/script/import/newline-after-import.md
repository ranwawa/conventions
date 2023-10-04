# import/newline-after-import

必须在导入语句后有一个空行

### 为什么?

这条规则是为了增强代码的可读性，通过在导入语句后添加空行，可以清晰地区分导入语句和其他代码。

### 建议

在最后一个顶级导入语句调用后添加一个空行。

### 错误示例

```js
import * as foo from './moduleA.js';
const FOO = foo;
```

### 正确示例

```js
import * as foo from './moduleA.js';

const FOO = foo;
```

### 参考

- [import/newline-after-import](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md)
