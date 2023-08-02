# @ranwawa/named

禁止导入不存在的模块

### 为什么?

导入不存在的模块,会导致运行时异常.

请删除不存在的模块导入语句.

### 错误示例

> moduleA.js

```js
export const foo = 'ranwawa';
export const bar = 'zhangsan';
```

> moduleB.js

```js
import { noFoo } from './moduleA.js'; // -> SyntaxError: The requested module './moduleA.js' does not provide an export named 'noFoo'
```

### 正确示例

> moduleC.js

```js
import { foo } from './moduleA.js';
```

### 参考

- [import/named](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/named.md)
