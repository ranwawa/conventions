# 禁止修改类声明的变量

## Why?

> ClassDeclaration 创建一个变量，可以修改这个变量。

## bad

```js
class A {}
A = 0;

let A = class A {
  b() {
    A = 0;
    // `let A` is shadowed by the class name.
  }
};
```

## good

```js
let A = class A {};
A = 0; // A is a variable.

class A {
  b(A) {
    A = 0; // A is a parameter.
  }
}
```

## 参考:

- [no-confusing-arrow](https://eslint.org/docs/rules/no-confusing-arrow)
