# no-duplicate-case

禁止重复的case表达式

### 为什么

如果 switch 语句中的 case 子句有重复的测试表达式，后面那个永远都不会执行。

### 建议

确保 switch 语句中的 case 子句的测试表达式唯一。

### 错误示例

```js
const foo = 520;
switch (foo) {
  case 520:
    console.log(1);
    break;
  case 520:
    console.log(2);
    break;
  default:
    break;
}
```

### 正确示例

```js
const foo = 520;

switch (foo) {
  case 520:
    console.log(1);
    break;
  case 1314:
    console.log(2);
    break;
  default:
    break;
}
```

### 参考

- [no-duplicate-case](https://eslint.org/docs/rules/no-duplicate-case)
