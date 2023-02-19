# no-find-dom-node

禁止组件上的某些 props

why?

为了统一代码规范，此规则检查所有 JSX 元素并验证组件上没有使用禁止的 props,此规则仅适用于组件而不适用于 DOM

### 错误示例

```jsx
<Hello className='foo' />

<Hello style={{color: 'red'}} />
```

### 正确示例

```jsx
<Hello name='Joe' />

<div className='foo' />

<div style={{color: 'red'}} />

```

### 参考

- [no-find-dom-node](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/no-find-dom-node)
