# 禁止变量声明与外层作用域的变量同名

## Why?

> 覆盖是指在同一作用域里局部变量和全局变量同名。

## bad

```js
if (true) {
  let b = 6;
}

function b() {}
```

## good

```js
if (true) {
  let a = 3;
}
let a = 5;
```

## 参考:

- [no-shadow-restricted-names](https://eslint.org/docs/rules/no-shadow-restricted-names)
