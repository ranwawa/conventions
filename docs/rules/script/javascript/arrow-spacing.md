# arrow-spacing

要求箭头函数的参数使用圆括号

### 为什么?

箭头函数体只有一个参数时，可以省略圆括号。其它任何情况，参数都应被圆括号括起来。

### 错误示例

```js
(a) => {};
(a) => a;
(a) => {
  "\n";
};
a.then((foo) => {});
a.then((foo) => a);
a((foo) => {
  if (true) {
  }
});
```

### 正确示例

```js
() => {};
(a) => {};
(a) => a;
(a) => {
  "\n";
};
a.then((foo) => {});
a.then((foo) => {
  if (true) {
  }
});
```

### 参考

- [arrow-spacing](https://eslint.org/docs/rules/arrow-spacing)
