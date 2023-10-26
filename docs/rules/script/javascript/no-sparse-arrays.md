# no-sparse-arrays

禁止使用稀疏数组

### 为什么

稀疏数组包含空槽，比如\['ranwawa', , 'zhangshan']的长度是3,但是在forEach遍历的时候会自动跳过空槽,就导致了行为上的不一致,容易误导小白。

### 建议

干掉空槽

### 错误示例

```js
const foo = ['ranwawa', , 'zhangshan'];
```

### 正确示例

```js
const foo = ['ranwawa', 'zhangshan'];
```

### 参考

- [no-sparse-arrays](https://eslint.org/docs/rules/no-sparse-arrays)
