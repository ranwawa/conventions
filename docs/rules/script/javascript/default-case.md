# default-case

推荐在switch语句中使用default分支

### 为什么?

为了明确指出默认行为，防止忘记包含兜底逻辑导致的边界场景判断遗漏问题。

### 建议

建议在`switch`语句中总是包含`default`分支，如果确实不需要兜底,请在最后一个`case`后面添加一条`// no default`注释，以表明故意省略`default`分支。

### 错误示例

```js
const foo = 1;
const doSomething = () => {};

switch (foo) {
  case 1:
    doSomething();
    break;

  case 2:
    doSomething();
    break;
}
```

### 正确示例

```js
const foo = 1;
const doSomething = () => {};

switch (foo) {
  case 1:
    doSomething();
    break;

  case 2:
    doSomething();
    break;

  default:
  // do nothing
}

switch (foo) {
  case 1:
    doSomething();
    break;

  case 2:
    doSomething();
    break;

  // no default
}
```

### 参考

- [default-case](https://eslint.org/docs/rules/default-case)
