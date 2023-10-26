# no-template-curly-in-string

禁止在普通字符串中使用模板字符串的占位符

### 为什么

在普通字符串中使用模板字符串的占位符，如"${variable}"，会导致输出的是字面值"${variable}"，而不是变量的值,有点误导人。

### 建议

在需要使用模板字符串的占位符时，使用反引号(\`)包裹字符串。

如果确实需要在字符串中输出${name}这样的字符串,可以用转义的形式处理.

### 错误示例

```js
const name = 'ranwawa';
console.log('Hello ${name}!');
```

### 正确示例

```js
const name = 'ranwawa';
console.log(`Hello ${name}!`);
console.log(`Hello \${name}!`);
```

### 参考

- [no-template-curly-in-string](https://eslint.org/docs/rules/no-template-curly-in-string)
