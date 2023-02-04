# 禁止导出可更改的模块

## Why?

> ES6 模块是单例的,模块被修改后会影响其他所有地方的使用,为避免意外对模块造成破坏,禁止导出可编辑的模块(即 let, var)

## bad

```js
export let name = "zmn";
```

## good

```js
export const name = "zmn";
```

## 参考:

- [import/no-mutable-exports](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md)
