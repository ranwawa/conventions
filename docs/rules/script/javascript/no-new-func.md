# no-new-func

禁止使用 new 以避免产生副作用

### 为什么?

对构造函数使用 new 的目的通常是创建一个特定类型的对象并且将该对象存储在变量中。

### 错误示例

```js
new Thing();
```

### 正确示例

```js
var thing = new Thing();
Thing();
```

### 参考

- [no-new-func](https://eslint.org/docs/rules/no-new-func)
