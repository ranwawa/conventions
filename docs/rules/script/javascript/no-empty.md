# no-empty

禁止重复的案例标签

### 为什么?

如果 switch 语句在 case 子句中有重复的测试表达式，很可能是程序员复制了 case 子句，但忘记更改测试表达式。

### 错误示例

```js
let a = 1;

switch (a) {
  case 1:
    break;
  case 2:
    break;
  case 1: // duplicate test expression
    break;
  default:
    break;
}
```

### 正确示例

```js
let a = 1;

switch (a) {
  case 1:
    break;
  case 2:
    break;
  case 3:
    break;
  default:
    break;
}
```

### 参考

- [no-empty](https://eslint.org/docs/rules/no-empty)
