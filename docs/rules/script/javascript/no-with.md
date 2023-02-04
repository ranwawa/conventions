# 禁用警告注释

## Why?

> 开发者经常给代码添加注释，标明哪些没有完成或需要审查。

## bad

```js
function callback(err, results) {
  if (err) {
    console.error(err);
    return;
  }
  // TODO
}
```

## good

```js
function callback(err, results) {
  if (err) {
    console.error(err);
    return;
  }
  // NOT READY FOR PRIME TIME
  // but too bad, it is not a predefined warning term
}
```

## 参考:

- [no-with](https://eslint.org/docs/rules/no-with)
