# prefer-template

推荐使用模板字面量

### 为什么

使用模板字面量代替字符串拼接，这样可以使代码更简洁，更易读。

### 建议

使用模板字面量代替字符串拼接。

### 错误示例

```js
const name = 'ranwawa';

console.log('Hello, ' + name + '!');
```

### 正确示例

```js
const name = 'ranwawa';

console.log(`Hello,${name}!`);
```

### 参考

- [prefer-template](https://eslint.org/docs/rules/prefer-template)
