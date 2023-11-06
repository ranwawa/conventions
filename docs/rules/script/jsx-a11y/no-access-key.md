# jsx-a11y/no-access-key

禁止在元素上使用accessKey属性

### 为什么

accessKey是HTML属性，可以为元素分配键盘快捷键。自定义一些快捷键很容易和系统以及用户的快捷键冲突,搞得人莫名其妙。

### 建议

不要在元素上使用accessKey属性。

### 错误示例

```js
<div accessKey="h" />
```

### 正确示例

```js
<div />
```

### 参考

- [jsx-a11y/no-access-key](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md)
