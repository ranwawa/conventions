# 禁止直接在对象上创建方法原型

## Why?

> 可能导致意外行为或拒绝服务安全漏洞。

## bad

```js
var hasBarProperty = foo.hasOwnProperty("bar");
```

## good

```js
var hasBarProperty = Object.prototype.hasOwnProperty.call(foo, "bar");
```

## 参考:

- [no-regex-spaces](https://eslint.org/docs/rules/no-regex-spaces)
