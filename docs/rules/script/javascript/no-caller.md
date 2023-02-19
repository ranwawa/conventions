# no-caller

禁止直接使用 alert

### 为什么?

alert 被广泛认为是突兀的 UI 元素。

### 错误示例

```js
alert("here!");
```

### 正确示例

```js
customAlert("Something happened!");
```

### 参考

- [no-caller](https://eslint.org/docs/rules/no-caller)
