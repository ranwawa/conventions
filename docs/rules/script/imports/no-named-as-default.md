# 禁止导出重复的模块

## Why?

> 重复导出相同的模块,后续导出的模块值会被忽略,容易产生混淆,会导致维护难度加大.

## bad

```js
export default class a {};
export default class b {}
```

## good

```js
export default class a {}
export const b = class {};
```

## 参考:

- [import/export](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md)
