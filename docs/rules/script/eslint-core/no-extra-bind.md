# no-extra-bind

禁止不必要的函数绑定

### 为什么

在JavaScript中，你可以使用bind方法来改变函数的this指向。但是，如果函数内部没有使用到this，那么使用bind就是多余的。

### 建议

如果函数内部没有使用到this，就不要使用bind方法。

### 错误示例

```js
const foo = {
  name: 'ranwawa'
};

(function () {
  return foo.name;
}).bind(foo);
```

### 正确示例

```js
const foo = {
  name: 'ranwawa'
};

(function () {
  return this.name;
}).bind(foo);
```

### 参考

- [no-extra-bind](https://eslint.org/docs/rules/no-extra-bind)
