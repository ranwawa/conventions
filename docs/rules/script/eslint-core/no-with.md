# no-with

禁止使用with语句

### 为什么

with语句将一个对象的成员添加到当前作用域，使得无法确定块内的变量实际上指向的是什么。

### 建议

使用其他方式来操作对象的成员，而不是使用with语句。

### 错误示例

```js
const foo = { bar: 520 };

with (foo) {
  bar += 1314; // bar是foo的成员
}
```

### 正确示例

```js
const foo = { bar: 520 };

foo.bar += 1314;
```

### 参考

- [no-with](https://eslint.org/docs/rules/no-with)
