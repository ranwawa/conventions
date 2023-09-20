# no-obj-calls

禁止使用字符类语法中由多个代码点组成的字符

### 为什么?

Unicode 包含由多个编码点组成的字符。RegExp 字符类语法(\[abc])不能处理由多个代码点构成的字符;这些字符将分解为每个代码点。

### 错误示例

```js
/^[👍]$/;
```

### 正确示例

```js
/^[👍]$/u;
```

### 参考

- [no-obj-calls](https://eslint.org/docs/rules/no-obj-calls)
