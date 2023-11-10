# react-hooks/rules-of-hooks

禁止在非函数体中使用Hooks

### 为什么?

因为 Hooks 的设计是基于数组实现。在调用时按顺序加入数组中，如果使用循环、条件或嵌套函数很有可能导致数组取值错位，执行错误的 Hook。

### 建议

只在顶层使用Hooks，只在React函数中调用Hooks，不要在循环、条件或嵌套函数内调用 Hook。

### 错误示例

```js
if (foo === 'bar') {
  React.useEffect(() => {
    console.log('ranwawa');
  });
}
```

### 正确示例

```js
function Foo() {
  React.useEffect(() => {
    console.log('ranwawa');
  });
}
```

### 参考

- [react-hooks/rules-of-hooks](https://legacy.reactjs.org/docs/hooks-rules.html)
