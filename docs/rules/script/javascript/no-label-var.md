# no-label-var

禁止标签与变量同名

### 为什么

标签都不让用,名称更不用说了.

### 建议

避免标签与变量同名。

### 错误示例

```js
const foo = 'ranwawa';

function bar() {
  foo: for (;;) {
    break foo;
  }
}
```

### 正确示例

```js
function foo() {
  const bar = 'ranwawa';
}

function baz() {
  bar: for (;;) {
    break bar;
  }
}
```

### 参考

- [no-label-var](https://eslint.org/docs/rules/no-label-var)
