# no-dupe-keys

禁止对象字面量中的重复键

### 为什么

后面的键会覆盖前面键的值.

### 建议

确保对象字面量中的键名唯一。

### 错误示例

```js
const foo = {
  ranwawa: 'baz',
  ranwawa: 'qux'
};

console.log(foo.ranwawa); // => qux
```

### 正确示例

```js
const foo = {
  ranwawa: 'baz',
  zhangshan: 'qux'
};
```

### 参考

- [no-dupe-keys](https://eslint.org/docs/rules/no-dupe-keys)
