# no-useless-constructor

禁止无用的构造函数

### 为什么

如果不指定构造函数,默认会调用父级的构造函数。如果自己写的构造函数只是简单的调用父级构造函数,那就是画蛇添足的多余操作.

### 建议

移除无用的构造函数。或者在构造函数里做点儿特殊的事情.

### 错误示例

```js
class Foo extends React.Component {
  constructor(props) {
    super(props);
  }
}
```

### 正确示例

```js
class Foo extends React.Component {}
```

### 参考

- [no-useless-constructor](https://eslint.org/docs/rules/no-useless-constructor)
