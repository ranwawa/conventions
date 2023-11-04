# jsx-a11y/aria-props

元素必须使用有效的ARIA属性

### 为什么

无效的ARIA属性加上去没啥作用.

### 建议

确保使用的`aria-*`属性在WAI-ARIA状态和属性规范中。

### 错误示例

```js
<input aria-not-exist="address_label" />
```

### 正确示例

```js
<input aria-labelledby="address_label" />
```

### 参考

- [jsx-a11y/aria-props](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-props.md)
- [WAI-ARIA状态和属性规范](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties)
