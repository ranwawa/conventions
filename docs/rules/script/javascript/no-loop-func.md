# no-loop-func

禁止不必要的嵌套块

### 为什么?

在 ES6 之前，由花括号分隔的独立代码块不会创建新的作用域，也没有任何用处。

### 错误示例

```js
if (foo) {
  bar();
  {
    baz();
  }
}
```

### 正确示例

```js
if (foo) {
  if (bar) {
    baz();
  }
}
```

### 参考

- [no-loop-func](https://eslint.org/docs/rules/no-loop-func)
