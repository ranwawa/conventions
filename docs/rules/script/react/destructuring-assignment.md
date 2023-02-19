# destructuring-assignment

每行一个 JSX 元素

why?

为统一代码规范，此选项将 JSX 中的每一行都限制为一个表达式

### 错误示例

```jsx
<App><Hello /></App>

<App><Hello />
</App>
```

### 正确示例

```jsx
<App>
  <Hello />
</App>

<App>
  <Hello>
  </Hello>
</App>
```

### 参考

- [destructuring-assignment](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/destructuring-assignment)
