# prefer-const

推荐使用const声明不会被重新赋值的变量

### 为什么

如果一个变量从未被重新赋值，使用const声明会更好。const会明确“这个变量从未被重新赋值”，可以减少认知负担，提高可维护性。

### 建议

将使用let声明但从未重新赋值的变量改为使用const声明

### 错误示例

```js
let a = 3;

console.log(a);
```

### 正确示例

```js
const a = 3;

console.log(a);
```

### 参考

- [prefer-const](https://eslint.org/docs/rules/prefer-const)
