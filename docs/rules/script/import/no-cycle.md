# import/no-cycle

禁止模块间的循环依赖

### 为什么?

模块间的循环依赖会导致代码的复杂度增加，可能引发不可预知的问题。

### 建议

避免模块间的循环依赖，尽可能将模块设计成低耦合的。

### 错误示例

> moduleB.js

```js
import './moduleA.js';

export function bar() {
  /* ... */
}
```

> moduleA.js

```js
import { bar } from './moduleB.js'; // 报错：检测到依赖循环。
```

### 正确示例

> moduleB.js

```js
export function bar() {
  /* ... */
}
```

> moduleC.js

```js
import { bar } from './moduleB.js';
```

### 参考

- [import/no-cycle](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md)
