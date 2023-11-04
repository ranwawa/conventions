# array-callback-return

必须在数组方法的回调中使用return语句

### 为什么

如果我们在数组的过滤、映射和折叠方法的回调中忘记写return语句，多半会导致一个生产bug。

会检测如下函数

- [`Array.from`](https://www.ecma-international.org/ecma-262/6.0/#sec-array.from)
- [`Array.prototype.every`](https://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.every)
- [`Array.prototype.filter`](https://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.filter)
- [`Array.prototype.find`](https://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.find)
- [`Array.prototype.findIndex`](https://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.findindex)
- [`Array.prototype.findLast`](https://tc39.es/ecma262/#sec-array.prototype.findlast)
- [`Array.prototype.findLastIndex`](https://tc39.es/ecma262/#sec-array.prototype.findlastindex)
- [`Array.prototype.flatMap`](https://www.ecma-international.org/ecma-262/10.0/#sec-array.prototype.flatmap)
- [`Array.prototype.forEach`](https://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.foreach) (optional, based on `checkForEach` parameter)
- [`Array.prototype.map`](https://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.map)
- [`Array.prototype.reduce`](https://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.reduce)
- [`Array.prototype.reduceRight`](https://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.reduceright)
- [`Array.prototype.some`](https://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.some)
- [`Array.prototype.sort`](https://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.sort)
- [`Array.prototype.toSorted`](https://tc39.es/ecma262/#sec-array.prototype.tosorted)

### 建议

在数组方法的回调中使用return语句，或者使用.forEach方法。

### 错误示例

```js
['ranwawa', 'zhangshan', 'lisi'].reduce(function (memo, item, index) {
  memo[item] = index;
}, {});
```

### 正确示例

```js
['ranwawa', 'zhangshan', 'lisi'].reduce(function (memo, item, index) {
  memo[item] = index;
  return memo;
}, {});
```

### 参考

- [array-callback-return](https://eslint.org/docs/rules/array-callback-return)
