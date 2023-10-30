# template-curly-spacing

模板字符串中的大括号内不能有空格

### 为什么

模板字符串中的空格会真正的是一个空格,但是模板字符串大括号中的空格又没得啥子用,所以去掉去掉,免得误导别人.

### 建议

在模板字符串中的大括号内部不要添加空格。

### 错误示例

```js
const name = 'ranwawa';

console.log(`hello, ${ name}!`)
```

### 正确示例

```js
const name = 'ranwawa';

console.log(`hello, ${name}!`)
```

### 参考

- [template-curly-spacing](https://eslint.org/docs/rules/template-curly-spacing)