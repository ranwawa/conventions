# no-const-assign

禁止修改const声明的变量

### 为什么

`const`关键字声明的变量是常量,不允许修改。

### 建议

如果一个变量需要修改,使用let

### 错误示例

```js
const foo = 520;
foo = 1314;
```

### 正确示例

```js
let foo = 520;
foo = 1314;
```

### 参考

- [no-const-assign](https://eslint.org/docs/rules/no-const-assign)
