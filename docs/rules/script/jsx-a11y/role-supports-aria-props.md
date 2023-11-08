# jsx-a11y/role-supports-aria-props

必须确保定义了显式或隐式角色的元素只包含该角色支持的`aria-*`属性

### 为什么

很多ARIA属性只能用于具有特定角色的元素。一些元素具有隐式角色，例如`<a href="#" />`，它将解析为`role="link"`。

比如radio元素就不支持required属性

### 建议

删除那些不属于特定角色的属性

### 错误示例

```js
<li aria-required tabIndex="-1" role="radio" aria-checked="false">
  ranwawa
</li>
```

### 正确示例

```js
<li tabIndex="-1" role="radio" aria-checked="false">
  ranwawa
</li>
```

### 参考

- [jsx-a11y/role-supports-aria-props](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-supports-aria-props.md)
