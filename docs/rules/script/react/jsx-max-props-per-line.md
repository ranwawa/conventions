# 检测缺失 key 值

## Why?

> 避免缺失 key 值，提高 diff 的同级比较的效率，避免原地复用带来的副作用，

## bad

```jsx
[<Hello />, <Hello />, <Hello />];

data.map((x) => <Hello>{x}</Hello>);

<Hello {...{ key: id, id, caption }} />;
```

## good

```jsx
[<Hello key="first" />, <Hello key="second" />, <Hello key="third" />];

data.map((x) => <Hello key={x.id}>{x}</Hello>);

<Hello key={id} {...{ id, caption }} />;
```

## 参考:

- [jsx-max-props-per-line](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/jsx-max-props-per-line)
