# named

禁止导入不存在的模块

### 为什么?

导入不存在的模块,会抛出异常,产生 BUG.
请删除不存在的模块导入.

### 错误示例

> moduleA.js

```js
export const foo = 'ranwawa';
```

> moduleB.js

```js
import { notFoo } from './moduleA.js';
```

### 正确示例

> moduleC.js

```js
import { Foo } from './moduleA.js';
```

### 参考

- [import/named](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/named.md)
