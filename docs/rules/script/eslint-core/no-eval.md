# no-eval

禁止使用eval函数

### 为什么

在不受信任的代码上使用`eval()`可以使程序面临多种不同的注入攻击。

### 建议

不要使用eval函数，可以使用其他方式来实现相同的功能。

### 错误示例

```js
const obj = { x: 'ranwawa' };
const key = 'x';
const value = eval('obj.' + key);
```

### 正确示例

```js
const obj = { x: 'ranwawa' };
const key = 'x';
const value = obj[key];
```

### 参考

- [no-eval](https://eslint.org/docs/rules/no-eval)
