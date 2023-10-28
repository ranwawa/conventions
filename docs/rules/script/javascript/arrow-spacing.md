# arrow-spacing

箭头函数的箭头前后必须有空格

### 为什么

不加空格在语法上不会报错,但是为了使代码像军人一样整齐划一,看上去就很爽很舒服,统一加上空格.

### 建议

箭头前后都添加一个空格。

### 错误示例

```js
const foo = ()=>{/**/};
```

### 正确示例

```js
const foo = () => {/**/};
```

### 参考

- [arrow-spacing](https://eslint.org/docs/rules/arrow-spacing)