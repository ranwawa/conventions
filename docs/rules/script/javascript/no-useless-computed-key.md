# no-useless-computed-key

禁止无用的计算属性键

### 为什么

使用字面量进行计算属性是就是多此一举。

### 建议

将计算属性键中的字面量直接作为对象的属性。

### 错误示例

```js
const foo = { ['ranwawa']: 'zhangshan' };
```

### 正确示例

```js
const foo = { ranwawa: 'zhangshan' };
```

### 参考

- [no-useless-computed-key](https://eslint.org/docs/rules/no-useless-computed-key)
