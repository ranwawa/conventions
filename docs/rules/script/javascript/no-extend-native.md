# 禁用 eval()

## Why?

> JavaScript 中的 eval()函数是有潜在危险的，而且经常被误用，还可能使程序受到不同的注入攻击。

## bad

```js
window.eval("var a = 0");
```

## good

```js
var obj = { x: "foo" },
  key = "x",
  value = obj[key];

class A {
  foo() {
    // This is a user-defined method.
    this.eval("var a = 0");
  }

  eval() {}
}
```

## 参考:

- [no-extend-native](https://eslint.org/docs/rules/no-extend-native)
