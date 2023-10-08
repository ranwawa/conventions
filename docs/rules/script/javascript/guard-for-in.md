# guard-for-in

推荐在for-in循环中使用守卫语句

### 为什么

在for-in循环中，能够遍历出原型链继承的属性，可能会导致意外的问题。

### 建议

在for-in循环中使用if语句过滤掉原型链上的属性。

### 错误示例

```js
const foo = Object.create({ name: 'ranwawa' });
foo.age = 520;

for (const key in foo) {
  console.log(key); // 会打印name属性
}
```

### 正确示例

```js
const foo = Object.create({ name: 'ranwawa' });
foo.age = 520;

for (const key in foo) {
  if (Object.hasOwn(foo, key)) {
    console.log(key);
  }
}

for (const key in foo) {
  if (Object.prototype.hasOwnProperty.call(foo, key)) {
    console.log(key);
  }
}

for (const key in foo) {
  if ({}.hasOwnProperty.call(foo, key)) {
    console.log(key);
  }
}
```

### 参考

- [guard-for-in](https://eslint.org/docs/rules/guard-for-in)
