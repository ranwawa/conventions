# no-unreachable-loop

禁止出现只能循环一次的循环

### 为什么

一个永远无法达到第二次迭代的循环,就像传销,永远给你画饼,但始终达不到。

### 建议

如果只需要一次迭代，应使用`if`条件语句代替循环语句。

或者删除代码中无条件的中断语句,比如`break`, `return`, `throw`等

### 错误示例

```js
let foo = 10;

while (foo) {
  foo -= 1;
  break;
}
```

### 正确示例

```js
let foo = 10;

while (foo) {
  foo -= 1;
}
```

### 参考

- [no-unreachable-loop](https://eslint.org/docs/rules/no-unreachable-loop)
