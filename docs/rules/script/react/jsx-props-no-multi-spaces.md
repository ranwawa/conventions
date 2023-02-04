# 验证 JSX 最大深度

why?

> 此选项验证 JSX 的特定深度

## bad

```jsx
// [2, { "max": 1 }]
<App>
  <Foo>
    <Bar />
  </Foo>
</App>

// [2, { "max": 1 }]
const foobar = <Foo><Bar /></Foo>;
<App>
  {foobar}
</App>

// [2, { "max": 2 }]
<App>
  <Foo>
    <Bar>
      <Baz />
    </Bar>
  </Foo>
</App>
```

## good

```jsx
// [2, { "max": 1 }]
<App>
  <Hello />
</App>

// [2,{ "max": 2 }]
<App>
  <Foo>
    <Bar />
  </Foo>
</App>

// [2, { "max": 3 }]
<App>
  <Foo>
    <Bar>
      <Baz />
    </Bar>
  </Foo>
</App>
```

## 参考:

- [jsx-props-no-multi-spaces](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/jsx-props-no-multi-spaces)
