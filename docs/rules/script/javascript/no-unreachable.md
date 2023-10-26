# no-unreachable

禁止出现无法执行的代码

### 为什么

因为`return`, `throw`, `break`, 和 `continue`语句会无条件地退出一个代码块，所以在它们之后的任何语句都无法执行。

### 建议

删除无法执行的代码

### 错误示例

```js
function foo() {
  return 'ranwawa';
  console.log('done');
}
```

### 正确示例

```js
function foo() {
  console.log('done');
  return 'ranwawa';
}
```

### 参考

- [no-unreachable](https://eslint.org/docs/rules/no-unreachable)
