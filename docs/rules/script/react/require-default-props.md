# 禁止使用数组索引做为循环的标记

why?

> 比如将元素添加到数组开头的情况下，除了第 1 个元素需要沉渲染,其他节点根本不需要沉浸,但是因为所有节点的 index 都发生了改变,所以所有节点都会全部重新渲染一次,请使用惟一标志做为 key

## bad

```jsx
things.map((thing, index) => <Hello key={index} />);
```

## good

```jsx
things.map((thing) => <Hello key={thing.id} />);
```

## 参考:

- [react/no-array-index-key](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md)
