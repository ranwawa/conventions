# 在 jsx 元素和表达式之后强制空行

why?

> 这是一个风格规则，旨在通过在相邻 JSX 元素和表达式之间强制空行来使 JSX 代码更具可读性
> bad

```jsx
div>
  <Button>{data.label}</Button>
  <List />
</div>
```

## good

```jsx
<div>
  <Button>{data.label}</Button>

  <List />

  <Button>
    <IconPreview />
    Button 2<span></span>
  </Button>

  {showSomething === true && <Something />}

  <Button>Button 3</Button>

  {showSomethingElse === true ? <SomethingElse /> : <ErrorMessage />}
</div>
```

## 参考:

- [jsx-no-constructed-context-values](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/jsx-no-constructed-context-values)
