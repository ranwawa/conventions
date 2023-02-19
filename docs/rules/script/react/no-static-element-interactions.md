# no-static-element-interactions

禁止在静态标签上绑定用户事件

### 为什么?

静态标签没有语义,对残障人士和屏蔽阅读器非常不友好.请在交互式标签上绑定事件,或者手动给静态标签添加可访问属性,这样屏幕阅读器就能够识别出来.

### 错误示例

```jsx
<div onClick={() => {}} />
```

### 正确示例

```jsx
// 交互式标签
<button onClick={() => {}} className="foo" />
<input type="text" onClick={() => {}} />

// 可访问性属性
<div className="foo" onClick={() => {}} role="button" />
```

### 参考

- [no-static-element-interactions](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-static-element-interactions.md)
