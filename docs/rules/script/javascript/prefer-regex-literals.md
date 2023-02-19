# prefer-regex-literals

使用 Object.hasOwn()

### 为什么?

不允许使用 Object.prototype.hasOwnProperty.call()，而喜欢使用 Object.hasOwn()

### 错误示例

```js
Object.prototype.hasOwnProperty.call(obj, "a");
```

### 正确示例

```js
Object.hasOwn(obj, "a");
```

### 参考

- [prefer-regex-literals](https://eslint.org/docs/rules/prefer-regex-literals)
