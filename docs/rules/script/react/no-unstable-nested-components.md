# 防止 react contexts 采用不稳定的值

why?

> 此规则防止将不稳定的值（即对象标识）用作 的值 Context.Provide，避免导致不必要的重新渲染影响性能
> bad

```jsx
return <SomeContext.Provider value={{ foo: "bar" }}>...</SomeContext.Provider>;
```

## good

```jsx
const foo = useMemo(() => {
  foo: "bar";
}, []);
return <SomeContext.Provider value={foo}>...</SomeContext.Provider>;
```

## 参考:

- [no-unstable-nested-components](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/no-unstable-nested-components)
