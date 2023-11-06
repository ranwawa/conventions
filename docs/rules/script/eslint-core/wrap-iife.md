# wrap-iife

必须将立即调用的函数表达式包裹在括号中

### 为什么

声明函数后立即执行,其他地方没有调用的时候,最好是使用立即调用函数,这样就不会污染全局作用域;

IIFE是指创建之后立即执行的函数,一般用在UMD格式的依赖包中.

### 建议

创建立即调用的函数表达式（IIFE）的常见技术是将函数声明包裹在括号中。开头的括号使得包含的函数被解析为表达式，而不是声明。

将所有立即调用的函数表达式包裹在括号中。

### 错误示例

```js
const x = function () {
  return { y: 1 };
};

x();
```

### 正确示例

```js
(function () {
  return { y: 1 };
})();
```

### 参考

- [wrap-iife](https://eslint.org/docs/rules/wrap-iife)