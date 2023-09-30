# no-alert

禁止使用alert, confirm, 和 prompt函数

### 为什么

JavaScript的`alert`, `confirm`, 和 `prompt`函数侵入性太强，会阻断很多浏览器特性,比如发起请求,加载资源等，应该UI框架的相关实现替换。比如antd的modal等。

### 建议

删除`alert`, `confirm`, 和 `prompt`函数。非得要用就用一种ui框架对应的实现

### 错误示例

```js
alert('ranwawa!');
confirm('Are you sure?');
prompt("What's your name?", 'zhangshan');
```

### 正确示例

```js
antd.modal('Something happened!');
```

### 参考

- [no-alert](https://eslint.org/docs/rules/no-alert)
