# no-regex-spaces

禁止直接在对象上创建方法原型

### 为什么?

可能导致意外行为或拒绝服务安全漏洞。

### 错误示例

```js
var hasBarProperty = foo.hasOwnProperty("bar");
```

### 正确示例

```js
var hasBarProperty = Object.prototype.hasOwnProperty.call(foo, "bar");
```

### 参考

- [no-regex-spaces](https://eslint.org/docs/rules/no-regex-spaces)
