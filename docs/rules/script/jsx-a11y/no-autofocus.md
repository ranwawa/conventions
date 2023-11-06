# jsx-a11y/no-autofocus

禁止在元素上使用autoFocus属性

### 为什么

官方插件上说,自动聚焦会影响视力障碍用户的体验.

表示没看懂,不过既然官方这样定义,那就先取,以后遇到实际情况再分析一下,看看有没有必要干掉这个规则.

### 建议

不要在元素上使用autoFocus属性。

### 错误示例

```js
<div autoFocus />
```

### 正确示例

```js
<div />
```

### 参考

- [jsx-a11y/no-autofocus](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-autofocus.md)
