# no-self-compare

禁止自我比较

### 为什么

将变量与自身进行比较通常是手误,对比的结果百分百是一致的嘛.

### 建议

删除这种无意义的代码

### 错误示例

```js
var foo = 520;
if (foo === foo) {
  foo = 1314;
}
```

### 正确示例

```js
var foo = 520;
if (foo === 'ranwawa') {
  foo = 1314;
}
```

### 参考

- [no-self-compare](https://eslint.org/docs/rules/no-self-compare)
