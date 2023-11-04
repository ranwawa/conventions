# arrow-parens

箭头函数参数必须使用括号包裹

### 为什么

箭头函数在只有一个参数时可以省略括号。在所有其他情况下，参数必须用括号包裹。保持风格统一,就像阅兵式时一样,英姿飒爽的军人们整齐划一地通过天安门是何等的气派。

### 建议

无论参数数量如何，箭头函数的参数都应使用括号包裹。

### 错误示例

```js
const foo = a => console.log(a);
```

### 正确示例

```js
let foo = (a) => console.log(a);
```

### 参考

- [arrow-parens](https://eslint.org/docs/rules/arrow-parens)
