# no-adjacent-inline-elements

禁止不必要的 fragments

why?

避免代码冗余
> bad

```jsx
<>{foo}</>

<><Foo /></>

<p><>foo</></p>

<></>

<Fragment>foo</Fragment>

<React.Fragment>foo</React.Fragment>

<section>
  <>
    <div />
    <div />
  </>
</section>

{showFullName ? <>{fullName}</> : <>{firstName}</>}
```

### 正确示例

```jsx
{foo}

<Foo />

<>
  <Foo />
  <Bar />
</>

<>foo {bar}</>

<> {foo}</>

const cat = <>meow</>

<SomeComponent>
  <>
    <div />
    <div />
  </>
</SomeComponent>

<Fragment key={item.id}>{item.value}</Fragment>

{showFullName ? fullName : firstName}
```

### 参考

- [no-adjacent-inline-elements](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/no-adjacent-inline-elements)
