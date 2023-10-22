# no-extra-boolean-cast

禁止不必要的布尔类型转换

### 为什么

在`if`语句的测试中，表达式的结果已经会被强制转换为布尔值，因此通过双重否定(`!!`)或`Boolean`调用进行布尔转换是不必要的。

### 建议

直接使用变量进行判断，无需进行额外的布尔类型转换。

### 错误示例

```js
const foo = 520;

if (!!foo) {
  //...
}
```

### 正确示例

```js
const foo = 520;

if (foo) {
  //...
}
```

### 参考

- [no-extra-boolean-cast](https://eslint.org/docs/rules/no-extra-boolean-cast)
