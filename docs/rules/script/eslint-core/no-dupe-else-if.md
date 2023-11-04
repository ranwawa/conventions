# no-dupe-else-if

禁止在同一个if-else-if链中出现重复的条件

### 为什么

这很明显的错误嘛,一般是手抖造成.

### 建议

确保没有重复的条件。

### 错误示例

```js
const foo = 520;

if (foo === 'ranwawa') {
  console.log(1);
} else if (foo === 'ranwawa') {
  console.log(2);
}
```

### 正确示例

```js
const foo = 520;

if (foo === 'ranwawa') {
  console.log(1);
} else if (foo === 'zhangshan') {
  console.log(2);
}
```

### 参考

- [no-dupe-else-if](https://eslint.org/docs/rules/no-dupe-else-if)
