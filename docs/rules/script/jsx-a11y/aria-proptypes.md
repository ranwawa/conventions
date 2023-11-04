# jsx-a11y/aria-proptypes

ARIA属性值必须有效

### 为什么

错误的值显然不会产生作用,虽然HTML允许你输入错误的值不会报错~

### 建议

当然是要改成对的了

### 错误示例

```js
<div aria-hidden="yes">ranwawa</div>
```

### 正确示例

```js
<div aria-hidden="true">ranwawa</div>
```

### 参考

- [jsx-a11y/aria-proptypes](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-proptypes.md)
