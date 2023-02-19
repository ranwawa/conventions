# default-case

控件语句使用一致的大括号样式

### 为什么?

当一个块只包含一条语句时，JavaScript 允许省略花括号，但会导致错误并降低代码的清晰度。但我们定的规则是：允许使用不带大括号的单行 if、else if、else、for、while 或 do，同时对其他实例仍然强制使用花括号。

### 错误示例

```js
if (foo) doSomething();
else doSomethingElse();
```

### 正确示例

```js
if (foo) foo++;
else doSomething();
```

### 参考

- [default-case](https://eslint.org/docs/rules/default-case)
