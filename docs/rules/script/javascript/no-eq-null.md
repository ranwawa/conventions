# no-eq-null

禁止使用空解构模式

### 为什么?

当使用解构赋值时，可能创建了一个不起作用的模式，可能会产生未知错误。

### 错误示例

```js
var {} = foo;
```

### 正确示例

```js
var { a = {} } = foo;
```

### 参考

- [no-eq-null](https://eslint.org/docs/rules/no-eq-null)
