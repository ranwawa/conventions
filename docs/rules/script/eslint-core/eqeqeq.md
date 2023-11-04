# eqeqeq

推荐使用严格等于和严格不等于操作符

### 为什么?

在JavaScript中，使用严格等于(`===`)和严格不等于(`!==`)操作符是一种良好的实践，而不是使用它们的常规对应项(`==`和`!=`)。这是因为`==`和`!=`执行类型强制转换，很容易判断出错。

如果其中一个出现在看似无辜的语句如`a == b`中，实际的问题就很难发现。

### 建议

在所有情况下都使用严格等于和严格不等于操作符。

### 错误示例

```js
console.log([] == false)
```

### 正确示例

```js
console.log([] === false)
```

### 参考

- [eqeqeq](https://eslint.org/docs/rules/eqeqeq)
- [抽象等式比较算法](https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3)