# no-const-assign

禁止在可能与比较操作符相混淆的地方使用箭头函数

### 为什么?

箭头函数 (=>) 在语法上与一些比较操作符(>，<，<= 和 >=)相似,可能与比较操作符混淆导致报错。

### 错误示例

```js
var x = (a) => (1 ? 2 : 3);
var x = (a) => (1 ? 2 : 3);
var x = (a) => (1 ? 2 : 3);
```

### 正确示例

```js
var x = (a) => (1 ? 2 : 3);
var x = (a) => (1 ? 2 : 3);
var x = (a) => {
  return 1 ? 2 : 3;
};
var x = (a) => {
  return 1 ? 2 : 3;
};
```

### 参考

- [no-const-assign](https://eslint.org/docs/rules/no-const-assign)
