# no-unused-vars

禁止未使用的变量

### 为什么

未使用的变量会增加代码的阅读难度，可能会引起误解。就问你碍眼不碍眼。

### 建议

删除未使用的变量。

### 错误示例

```js
let foo = 520;
console.log(520);
```

### 正确示例

```js
console.log(520);
```

### 参考

- [no-unused-vars](https://typescript-eslint.io/rules/no-unused-vars)
