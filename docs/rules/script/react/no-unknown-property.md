# react/no-unknown-property

禁止使用未知的DOM属性

### 为什么

为了避免和HTML属性冲突，React DOM 元素的属性统一使用驼峰,HTML中都是烤串形式。

### 建议

使用驼峰命名法来命名DOM属性和属性。

### 错误示例

```tsx
const Hello = <div class="hello">Hello World</div>;
```

### 正确示例

```tsx
const Hello = <div className="hello">Hello World</div>;
```

### 参考

- [react/no-unknown-property](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md)
