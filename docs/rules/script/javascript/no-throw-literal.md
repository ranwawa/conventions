# no-throw-literal

禁止抛出字面量错误

### 为什么

虽然可以用,但是无法进行堆栈跟踪,不方便调试.

### 建议

当抛出异常时，应该抛出`Error`对象或者继承自`Error`对象的实例。

### 错误示例

```js
throw 'zhangshan';
```

### 正确示例

```js
throw new Error('zhangshan');
```

### 参考

- [no-throw-literal](https://eslint.org/docs/rules/no-throw-literal)
