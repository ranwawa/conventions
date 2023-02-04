# 禁止从构造函数中返回值

## Why?

> 在 JavaScript 中，在类的构造函数中返回值是错误的，它会由于不熟悉语言或复制粘贴而产生错误。

## bad

```js
class A {
  constructor(a) {
    this.a = a;
    return a;
  }
}
```

## good

```js
class C {
  constructor(c) {
    this.c = c;
  }
}
```

## 参考:

- [no-div-regex](https://eslint.org/docs/rules/no-div-regex)
