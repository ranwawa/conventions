# react/jsx-no-bind

禁止在JSX属性中使用.bind()或箭头函数

### 为什么

在组件的render方法或函数组件的主体中使用.bind()或声明函数，并将该函数作为prop传递，将会在每次渲染时创建一个全新的函数，被视为一个完全不同的函数。

如果将全新的函数作为prop传递给一个使用引用等式检查prop以确定是否应该更新的组件，如使用[`memo`](https://react.dev/reference/react/memo#memo)包装的组件，或者如果该prop在任何钩子的"依赖数组"中使用，就会导致不必要的重新渲染。

### 建议

将函数提取到组件外部，或使用useCallback钩子进行函数的记忆化。

### 错误示例

```tsx
import React from 'react';

<div onClick={() => console.log('Hello!')} />;

function onClick() {
  console.log('Hello!');
}

<div onClick={onClick} />;
```

### 正确示例

```tsx
const onClick = useCallback(() => {
  setText('After click');
}, [setText]);

<Foo onClick={onClick}></Foo>;
```

### 参考

- [react/jsx-no-bind](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
