# jsx-a11y/role-has-required-aria-props

具有ARIA角色的元素必须具有该角色的所有必需属性

### 为什么

如果给一个元素添加了一个ARIA角色,然后又不给这个角色的必填属性给值,这就是在作妖嘛.

比如一个div,你在语义上给它改成了checkbox,但又不给他的checked属性赋值,那请问你把他改成checkbox的目的又是何在呢

### 建议

确保具有ARIA角色的元素具有该角色的所有必需属性。

### 错误示例

```js
<div role="checkbox" aria-labelledby="foo" tabIndex="0" />
```

### 正确示例

```js
<div role="checkbox" aria-checked="false" aria-labelledby="foo" tabindex="0" />
```

### 参考

- [jsx-a11y/role-has-required-aria-props](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-has-required-aria-props.md)
