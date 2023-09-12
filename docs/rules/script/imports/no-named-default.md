# import/no-named-default

禁止重命名默认导出模块

### 为什么?

默认导出模块可直接导入,重命名显得多此一举,画蛇添足.

### 建议

使用默认的导入语法。

### 错误示例

> moduleA.js

```js
export const bar = 'zhangsan';

export default 'ranwawa';
```

> moduleB.js

```js
import { default as foo, bar } from './moduleA.js';
```

### 正确示例

> moduleC.js

```js
import foo, { bar } from './moduleA.js';
```

### 参考

- [import/no-named-default](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md)
