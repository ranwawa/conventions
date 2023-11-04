# no-param-reassign

禁止对函数参数进行重新赋值

### 为什么

对函数参数进行赋值可能会导致误导和混淆的行为，因为在非严格模式下，修改函数参数也会改变`arguments`对象。修改对象等引用类型,也会导致他们原始的值发生变化,可能会产生bug。

### 建议

避免对函数参数进行修改或重新赋值，如果需要修改参数，可以先将参数赋值给一个新的变量，或者使用解构赋值。

如果确保修改参数的值不会引起额外的副作用操作,可以在参数前加上effect前缀

### 错误示例

```js
function foo (bar) {
    bar = 13;
}

[{name: 'ranwawa'}].forEach(item => {
    item.name = 'ranwawa';
})
```

### 正确示例

```js
function foo (bar) {
    const bazNew = bar;
}

function foo (effectBar) {
    bazNew = effectBar;
}

[{name: 'ranwawa'}].map(item => ({
    name: 'ranwawa'
}))
```

### 参考

- [no-param-reassign](https://eslint.org/docs/rules/no-param-reassign)