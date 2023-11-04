# grouped-accessor-pairs

推荐将同一属性的getter和setter函数定义在一起

### 为什么?

虽然JavaScript语法允许在对象或类定义中的任何位置定义getter或setter的配对，但将同一属性的getter和setter函数定义在一起方便后续阅读维护。

人生信条: 东西要有收拾有归纳

### 建议

在定义对象或类时，如果一个属性有getter和setter，setter应该紧随getter之后。

### 错误示例

```js
const foo = {
  get a() {
    return this.val;
  },
  b: 520,
  set a(value) {
    this.val = value;
  }
};
```

### 正确示例

```js
const foo = {
  get a() {
    return this.val;
  },
  set a(value) {
    this.val = value;
  },
  b: 520
};
```

### 参考

- [grouped-accessor-pairs](https://eslint.org/docs/rules/grouped-accessor-pairs)
