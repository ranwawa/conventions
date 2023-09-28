# dot-notation

推荐使用点表示法访问对象属性

### 为什么?

在JavaScript中，可以使用点表示法(`foo.bar`)或方括号表示法(`foo["bar"]`)来访问属性。然而，点表示法通常是首选，因为它更易读，更简洁，并且在JavaScript压缩器中工作得更好。

### 建议

尽可能使用点表示法访问对象属性，除非属性名是动态获取的。

### 错误示例

```js
const foo = {
  bar: 'ranwawa'
};

console.log(foo['bar']);
```

### 正确示例

```js
const foo = {
  bar: 'ranwawa'
};

console.log(foo.bar);
console.log(foo[foo.bar]);
```

### 参考

- [dot-notation](https://eslint.org/docs/rules/dot-notation)
