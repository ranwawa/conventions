# prefer-arrow-callback

推荐使用箭头函数作为回调

### 为什么

箭头函数看起来更简洁.所有地方能使用箭头函数的地方都使用箭头函数.

### 建议

将函数表达式替换为箭头函数

### 错误示例

```js
const foo = (cb) => cb();

foo(function (a) {
  return a;
});
```

### 正确示例

```js
const foo = (cb) => cb();

foo((a) => a);
```

### 参考

- [prefer-arrow-callback](https://eslint.org/docs/rules/prefer-arrow-callback)
