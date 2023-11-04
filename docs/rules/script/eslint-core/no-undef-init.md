# no-undef-init

禁止初始化变量为undefined

### 为什么

在JavaScript中，声明但未初始化的变量默认为undefined的值，显示赋值一个undefined就是多此一举。

### 建议

可以写成null,和未声明的变量区分开来.

### 错误示例

```js
let foo = undefined;
```

### 正确示例

```js
let foo = null;
```

### 参考

- [no-undef-init](https://eslint.org/docs/rules/no-undef-init)
