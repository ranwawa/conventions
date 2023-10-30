# prefer-numeric-literals

推荐使用数字字面量

### 为什么

ES6原生支持二进制、八进制和十六进制字面量，没得必要通过`parseInt()`或`Number.parseInt()`再转一次,显得多此一举。

### 建议

使用数字字面量来表示二进制、八进制和十六进制的数值。

### 错误示例

```js
console.log(Number.parseInt('111110111', 2) === 503);
console.log(parseInt('767', 8) === 503);
console.log(parseInt('1F7', 16) === 503);
```

### 正确示例

```js
console.log(0b111110111 === 503);
console.log('0o767' === 503);
console.log('0x1F7' === 503);
```

### 参考

- [prefer-numeric-literals](https://eslint.org/docs/rules/prefer-numeric-literals)
