# grouped-accessor-pairs

使用 === 和 !== 代替 == 和 != 操作符

### 为什么?

消除非类型安全的相等操作符。

### 错误示例

```js
foo == true;
typeof foo == "undefined";
```

### 正确示例

```js
foo === true;
typeof foo === "undefined";
```

### 参考

- [grouped-accessor-pairs](https://eslint.org/docs/rules/grouped-accessor-pairs)
