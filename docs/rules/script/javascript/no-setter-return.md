# no-setter-return

禁止在正则表达式中使用多个空格

### 为什么?

使用正则表达式最容易出错的事情之一是使用多个空格。

### 错误示例

```js
var re = /foo   bar/;
var re = new RegExp("foo   bar");
```

### 正确示例

```js
var re = /foo {3}bar/;
var re = new RegExp("foo {3}bar");
```

### 参考

- [no-setter-return](https://eslint.org/docs/rules/no-setter-return)
