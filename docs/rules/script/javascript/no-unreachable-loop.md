# no-unreachable-loop

在 return，throw，continue 和 break 语句之后禁止不可访问的代码

### 为什么?

因为 return、throw、break 和 continue 语句无条件地退出代码块，所以它们之后的任何语句都不能执行。无法到达的语句通常是错误的。

### 错误示例

```js
function foo() {
  return true;
  console.log("done");
}
```

### 正确示例

```js
function foo() {
  return bar();
  function bar() {
    return 1;
  }
}
```

### 参考

- [no-unreachable-loop](https://eslint.org/docs/rules/no-unreachable-loop)
