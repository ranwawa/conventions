# default-case-last

switch 语句中必须定义 default 分支

### 为什么?

可能会忘记定义默认分支而导致程序发生错误。

### 错误示例

```js
switch (a) {
  case 1:
    /* code */
    break;
}
```

### 正确示例

```js
switch (a) {
  case 1:
    /* code */
    break;

  default:
    /* code */
    break;
}
```

### 参考

- [default-case-last](https://eslint.org/docs/rules/default-case-last)
