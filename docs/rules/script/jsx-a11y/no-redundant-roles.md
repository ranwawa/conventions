# jsx-a11y/no-redundant-roles

禁止冗余的ARIA角色

### 为什么

一些HTML元素有浏览器实现的原生语义，包括默认/隐式的ARIA角色。设置与其默认/隐式角色匹配的ARIA角色,显然是多余的。

### 建议

不要给元素设置与其默认/隐式角色相同的ARIA角色。

### 错误示例

```js
<button role="button" />
```

### 正确示例

```js
<button role="presentation" />
```

### 参考

- [jsx-a11y/no-redundant-roles](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-redundant-roles.md)
