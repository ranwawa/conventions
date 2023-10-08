# no-global-assign

禁止对全局变量赋值

### 为什么

JavaScript环境中包含许多内置的全局变量，如浏览器中的`window`和Node.js中的`process`。任何情况下，都不应该给这些全局变量赋值，可能会引起不可知的问题。

### 建议

不要对全局变量进行赋值操作。可以通过拦截器的方式来创建全局的私有变量来达到类似效果.

### 错误示例

```js
Object = null;
```

### 正确示例

```js
var __Object = null;
```

### 参考

- [no-global-assign](https://eslint.org/docs/rules/no-global-assign)
