# no-use-before-define

禁止在定义之前使用变量或函数

### 为什么

在ES6之前，JavaScript中的变量和函数声明会被提升到作用域的顶部，所以可以先使用然后再声明。

但这样让代码特别难阅读,极大降低了代码的可维护性.

### 建议

先声明,再使用.

### 错误示例

```js
foo();

function foo() {
  //
}
```

### 正确示例

```js
function foo() {
  //
}

foo();
```

### 参考

- [no-use-before-define](https://eslint.org/docs/rules/no-use-before-define)
