# block-scoped-var

禁止使用其他块级作用域的var变量

### 为什么?

var变量在块级作用域中会自动提升到最前在，很容易了问题。

### 建议

将var变量的声明放在其所在的块级作用域的最前面。

或者直接使用const/let

### 错误示例

```js
function doIf() {
  if (true) {
    var foo = true;
  }

  console.log(foo);
}
```

### 正确示例

```js
function doIf() {
  var foo;

  if (true) {
    foo = true;
  }

  console.log(foo);
}
```

### 参考

- [block-scoped-var](https://eslint.org/docs/rules/block-scoped-var)
