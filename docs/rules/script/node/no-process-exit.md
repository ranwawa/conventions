# 禁止直接给 exports 变量赋值

## Why?

> 直接给 exports 赋值导致其指针发生变化,通常会导致不可预期的错误,请使用 module.exports 替代

## bad

```js
exports = {};
```

## good

```js
module.exports = {};
```

## 参考

- [node/no-exports-assign](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-exports-assign.md)
