# require-await

要求必须有基数

### 为什么?

在 parseInt()中始终使用基数以消除意想不到的后果。

### 错误示例

```js
var num = parseInt("071");
```

### 正确示例

```js
var num = parseInt("071", 10);
```

### 参考

- [require-await](https://eslint.org/docs/rules/require-await)
