# import/no-mutable-exports

禁止导出可变的模块

### 为什么?

因为使用 `var` 或 `let` 的可变导出可以被修改，会导致运行时报错

### 建议

使用 `const`，`function` 或者 `class` 代替。

### 错误示例

```js
export let foo = 666;
export var getFoo = function () {};
```

### 正确示例

```js
export const foo = 666;
export function getFoo() {}
export class Bar {}
```

### 参考

- [import/no-mutable-exports](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md)
