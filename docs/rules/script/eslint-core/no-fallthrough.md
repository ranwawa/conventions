# no-fallthrough

禁止case语句落空

### 为什么

在JavaScript中，可以从一个case到下一个case“落空”。如果一个case落空到下一个case，极大增加代码可读性和可维护性。

### 建议

在每个case语句的末尾添加`throw`，`return`，`break`或注释。

### 错误示例

```js
const foo = 520;

switch (foo) {
  case 1:
    console.log(1);
  case 2:
    console.log(2);
}
```

### 正确示例

```js
const foo = 520;

switch (foo) {
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;
  default:
    break;
}
```

### 参考

- [no-fallthrough](https://eslint.org/docs/rules/no-fallthrough)
