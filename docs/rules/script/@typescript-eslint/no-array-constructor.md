# no-array-constructor

禁止使用`Array`构造函数

### 为什么

使用通用的`Array`构造函数会降低代码的可读性和可维护性。

人生信条: 能简单的就别搞复杂了

### 建议

直接使用数组字面量,能用字面的地方就不要用构造函数.

### 错误示例

```ts
const list = Array(520, 1314, 666);
```

### 正确示例

```ts
const list = [520, 1314, 666];
```

### 参考

- [no-array-constructor](https://typescript-eslint.io/rules/no-array-constructor)
