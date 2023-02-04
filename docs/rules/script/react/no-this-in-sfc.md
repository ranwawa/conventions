# 防止使用 button 元素没有显式属性的元素 type

why?

> HTML 元素 type 属性的默认值通常不是所需的行为，并且可能导致意外的页面重新加载。该规则对所有元素强制执行显式属性，并检查其值是否符合规范

## bad

```jsx
var Hello = <button>Hello</button>;
var Hello = <button type="foo">Hello</button>;
```

## good

```jsx
var Hello = <span>Hello</span>;
var Hello = <span type="foo">Hello</span>;
var Hello = <button type="button">Hello</button>;
var Hello = <button type="submit">Hello</button>;
var Hello = <button type="reset">Hello</button>;
```

## 参考:

- [no-this-in-sfc](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/no-this-in-sfc)
