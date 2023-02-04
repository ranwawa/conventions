# 在 jsx 中禁止使用.bind()或箭头函数

## Why?

> jsx 中的 bind 调用或箭头函数将在每个渲染上创建一个全新的函数。这对性能不利，因为如果将全新的函数作为 prop 传递给组件，该组件使用对 prop 的引用相等性检查来确定它是否应该更新，这可能会导致不必要的重新渲染

## bad

```jsx
<Foo onClick={this._handleClick.bind(this)}></Foo>

<Foo onClick={() => console.log('Hello!')}></Foo>

function onClick() { console.log('Hello!'); }

<Foo onClick={onClick} />
```

## good

```jsx
<Foo onClick={this._handleClick}></Foo>
```

## 参考:

- [jsx-no-duplicate-props](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/jsx-no-duplicate-props)
