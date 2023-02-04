# 禁止循环中存在函数

## Why?

> 由于函数在循环中创建闭包的方式不同，在循环中编写函数往往会导致错误。

## bad

```js
for (var i = 10; i; i--) {
  (function () {
    return i;
  })();
}
```

## good

```js
var a = function () {};

for (var i = 10; i; i--) {
  a();
}
```

## 参考:

- [no-magic-numbers](https://eslint.org/docs/rules/no-magic-numbers)
