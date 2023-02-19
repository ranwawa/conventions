# guard-for-in

相同属性的访问器函数进行分组定义

### 为什么?

更直观，逻辑更清晰不容易出错。

### 错误示例

```js
var foo = {
  get a() {
    return this.val;
  },
  b: 1,
  set a(value) {
    this.val = value;
  },
};
```

### 正确示例

```js
var foo = {
  get a() {
    return this.val;
  },
  set a(value) {
    this.val = value;
  },
  b: 1,
};
```

### 参考

- [guard-for-in](https://eslint.org/docs/rules/guard-for-in)
