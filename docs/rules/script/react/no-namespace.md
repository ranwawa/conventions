# no-namespace

防止在组件内部创建不稳定的组件

why?

在没有记忆的组件内创建组件会导致组件不稳定。嵌套组件及其所有子组件在每次重新渲染期间都会重新创建。给定嵌套组件的有状态子组件将在每次重新渲染时丢失其状态
> bad

```jsx
function Component() {
  function UnstableNestedComponent() {
    return <div />;
  }

  return (
    <div>
      <UnstableNestedComponent />
    </div>
  );
}
```

### 正确示例

```jsx
function OutsideDefinedComponent(props) {
  return <div />;
}

function Component() {
  return (
    <div>
      <OutsideDefinedComponent />
    </div>
  );
}
```

### 参考

- [no-namespace](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/no-namespace)
