# state-in-constructor

在 JSX 属性和表达式中的花括号中强制换行

why?

为统一代码样式规范，此规则在 jsx 大括号表达式的大括号内强制执行一致的换行符
> bad

```jsx
<div>
  { foo
  }
</div>

<div>
  {
    foo }
</div>

<div>
  { foo &&
    foo.bar
  }
</div>
```

### 正确示例

```jsx
<div>
  { foo }
</div>

<div>
  {
    foo
  }
</div>
```

### 参考

- [state-in-constructor](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/state-in-constructor)
