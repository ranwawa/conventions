# no-array-constructor

禁止使用数组构造函数

### 为什么?

数组构造函数在一个参数时是创建指定长度的数组,而在多个参数时则是创建指定元素的数组,容易使人产生混淆,请统一使用字面量语法创建数组

### 错误示例

```ts
const arr = new Array(1, 2, 3);
```

### 正确示例

```ts
const arr = [1, 2, 3];
```

## 参考

- [no-array-constructor](https://typescript-eslint.io/rules/no-array-constructor)
