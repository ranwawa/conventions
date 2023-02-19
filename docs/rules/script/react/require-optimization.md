# require-optimization

防止使用 ReactDOM.render 的返回值

why?

ReactDOM.render()当前返回对根 ReactComponent 实例的引用。然而，使用这个返回值是遗留的，应该避免，因为未来版本的 React 在某些情况下可能会异步渲染组件。如果您需要对根 ReactComponent 实例的引用，首选的解决方案是将回调引用附加到根元素

### 错误示例

```jsx
const inst = ReactDOM.render(<App />, document.body);
doSomethingWithInst(inst);
```

### 正确示例

```jsx
ReactDOM.render(<App ref={doSomethingWithInst} />, document.body);

ReactDOM.render(<App />, document.body, doSomethingWithInst);
```

### 参考

- [require-optimization](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/require-optimization)
