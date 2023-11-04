# no-extra-label

禁止使用标签

### 为什么

如果一个循环中没有嵌套的循环或switch，标签是不必要的。

### 建议

不要使用不必要的标签。使用`break`或`continue`来达到同样的效果。

### 错误示例

```js
let foo = 520;

while (foo > 0) {
  if (foo === 10) {
    break A;
  }

  foo--;
}
A: console.log(1);
```

### 正确示例

```js
let foo = 520;

while (foo > 0) {
  if (foo === 10) {
    break;
  }

  foo--;
}
```

### 参考

- [no-extra-label](https://eslint.org/docs/rules/no-extra-label)
