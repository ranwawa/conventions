# 要求回调函数中有容错处理

## Why?

> 如果忘记处理这些错误会导致你的应用程序出现一些非常奇怪的行为。

## bad

```js
function loadData(err, data) {
  doSomething();
}
```

## good

```js
function loadData(error, data) {
  if (error) {
    console.log(error.stack);
  }
  doSomething();
}
```

## 参考:

- [no-buffer-constructor](https://eslint.org/docs/rules/no-buffer-constructor)
