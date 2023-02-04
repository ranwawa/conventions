# 禁止使用空解构模式

## Why?

> 当使用解构赋值时，可能创建了一个不起作用的模式，可能会产生未知错误。

## bad

```js
var {} = foo;
```

## good

```js
var { a = {} } = foo;
```

## 参考:

- [no-eq-null](https://eslint.org/docs/rules/no-eq-null)
