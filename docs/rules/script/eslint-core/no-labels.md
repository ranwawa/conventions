# no-labels

禁止使用标签语句

### 为什么

在JavaScript中，标签语句与`break`和`continue`一起使用，用于控制多个循环的流程。虽然在某些情况下很方便，但标签往往只被很少使用，而且有些人认为标签是一种容易出错且难以理解的流程控制方式。

### 建议

避免使用标签语句。

### 错误示例

```js
let i = 0;

label: while (i < 10) {
  i++;

  if (i === 5) {
    break label;
  }
}
```

### 正确示例

```js
let i = 0;

while (i < 10) {
  i++;

  if (i === 5) {
    break;
  }
}
```

### 参考

- [no-labels](https://eslint.org/docs/rules/no-labels)
