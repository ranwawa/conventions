# no-unused-private-class-members

禁止在不允许使用“ undefined”值的情况下使用可选链接

### 为什么?

禁止对关系操作符的左操作数求反。

### 错误示例

```js
(obj?.foo)();
(obj?.foo).bar;
(foo?.()).bar;
```

### 正确示例

```js
obj?.foo?.();
obj?.foo();
(obj?.foo ?? bar)();
```

### 参考

- [no-unused-private-class-members](https://eslint.org/docs/rules/no-unused-private-class-members)
