# no-void

禁止使用void操作符

### 为什么

void操作符的作用是返回undefined，过时的老古董语法了。

### 建议

避免使用void操作符，直接使用undefined。

### 错误示例

```js
let foo;
void foo;
```

### 正确示例

```js
const foo = undefined;
```

### 参考

- [no-void](https://eslint.org/docs/rules/no-void)
