# default-param-last

强制 switch 语句中的默认子句位于最后

### 为什么?

如果一个 switch 语句应该有一个 default 子句，那最好将它定义为最后一个子句。

### 错误示例

```js
switch (foo) {
  default:
    bar();
    break;
  case "a":
    baz();
    break;
}
```

### 正确示例

```js
switch (foo) {
  case "a":
    baz();
    break;
  default:
    bar();
    break;
}
```

### 参考

- [default-param-last](https://eslint.org/docs/rules/default-param-last)
