# no-unsafe-negation

禁止对关系运算符的左操作数进行取反操作

### 为什么

!的运算符优先级是16,大于in/instanceof等关系运算符的优先级,如果放在一起用,百分之九十九点六要搞出bug来

### 建议

先把关系操作用括号包起来,再对整个操作取反

### 错误示例

```js
if (!'key' in {}) {
  //
}
```

### 正确示例

```js
if (!('key' in {})) {
  //
}
```

### 参考

- [no-unsafe-negation](https://eslint.org/docs/rules/no-unsafe-negation)
