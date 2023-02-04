# 禁止在返回语句中赋值

## Why?

> 在 JavaScript 中一个有趣有时有令人感到困惑的是几乎可以在任何位置进行赋值操作。

## bad

```js
function doSomething() {
  return (foo = bar + 2);
}

function doSomething() {
  return (foo += 2);
}

function doSomething() {
  return (foo = bar + 2);
}
```

## good

```js
function doSomething() {
  return foo == bar + 2;
}

function doSomething() {
  return foo === bar + 2;
}
```

## 参考:

- [no-return-await](https://eslint.org/docs/rules/no-return-await)
