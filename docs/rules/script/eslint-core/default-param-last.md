# default-param-last

推荐将默认参数放在参数列表的最后

### 为什么?

如果把可选值放在前面，函数调用省略参数时，后面的参数就会变成undefined，容易引起bug

### 建议

在定义函数参数时，应将默认参数放在所有参数的最后。

### 错误示例

```js
function foo(a = 520, b) {}
```

### 正确示例

```js
function foo(a, b = 520) {}
```

### 参考

- [default-param-last](https://eslint.org/docs/rules/default-param-last)
