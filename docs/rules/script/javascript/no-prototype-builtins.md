# 禁止从 Promise 执行器函数返回值

## Why?

> 从执行器函数返回一个值是一个可能的错误，因为返回的值不能被使用，而且它不会以任何方式影响承诺。

## bad

```js
new Promise((resolve, reject) => {
  if (someCondition) {
    return defaultResult;
  }
  getSomething((err, result) => {
    if (err) {
      reject(err);
    } else {
      resolve(result);
    }
  });
});
```

## good

```js
new Promise((resolve, reject) => {
  if (someCondition) {
    resolve(defaultResult);
    return;
  }
  getSomething((err, result) => {
    if (err) {
      reject(err);
    } else {
      resolve(result);
    }
  });
});
```

## 参考:

- [no-prototype-builtins](https://eslint.org/docs/rules/no-prototype-builtins)
