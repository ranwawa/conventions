# no-constant-condition

禁止在条件中使用常量表达式

### 为什么

条件判断中使用常量,一般只在本地测试的时候用，这种代码肯定不能上生产。

### 建议

避免在条件判断中直接使用常量表达式，应该使用变量或者函数的返回值。

### 错误示例

```js
if (false) {
  console.log('ranwawa');
}
```

### 正确示例

```js
const foo = 520;

if (foo === 0) {
  console.log('ranwawa');
}
```

### 参考

- [no-constant-condition](https://eslint.org/docs/rules/no-constant-condition)
