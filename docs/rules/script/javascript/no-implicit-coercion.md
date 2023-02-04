# 禁止对对象或只读全局变量赋值

## Why?

> 可能会导致失去对重要功能的访问。

## bad

```js
Object = null;
undefined = 1;
```

## good

```js
a = 1;
var b = 1;
b = 2;
```

## 参考:

- [no-implicit-coercion](https://eslint.org/docs/rules/no-implicit-coercion)
