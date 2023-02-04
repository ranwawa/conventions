# 禁止在 function 定义中出现重复的参数

## Why?

> 如果在一个函数定义中出现多个同名的参数，后面出现的会覆盖前面出现的参数。

## bad

```js
function foo(a, b, a) {
  console.log("value of the second a:", a);
}
```

## good

```js
function foo(a, b, c) {
  console.log(a, b, c);
}
```

## 参考:

- [no-dupe-else-if](https://eslint.org/docs/rules/no-dupe-else-if)
