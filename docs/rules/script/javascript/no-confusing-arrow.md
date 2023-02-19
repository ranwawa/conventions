# no-confusing-arrow

禁止修改类声明的变量

### 为什么?

ClassDeclaration 创建一个变量，可以修改这个变量。

### 错误示例

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

### 正确示例

```js
let A = class A {};
A = 0; // A is a variable.

class A {
  b(A) {
    A = 0; // A is a parameter.
  }
}
```

### 参考

- [no-confusing-arrow](https://eslint.org/docs/rules/no-confusing-arrow)
