# no-case-declarations

禁止在case/default子句中使用声明变量

### 为什么

词法声明在整个switch块中都是可见的，但只有在被赋值时才会初始化，在其他case子句中也能够访问当前case中声明的变量。

### 建议

将case子句包用花括号包裹起来,让每个case子句形成一个单独的块级作用域。

### 错误示例

```js
const foo = 1;

switch (foo) {
  case 520:
    let x = 1;
    break;
  case 1314:
    const y = 2;
    break;
  case 666:
    function f() {}
    break;
  default:
    class C {}
}
```

### 正确示例

```js
const foo = 1;

switch (foo) {
  // 以下case子句使用括号包装成块
  case 520: {
    let x = 1;
    break;
  }
  case 1314: {
    const y = 2;
    break;
  }
  case 666: {
    function f() {}
    break;
  }
  default: {
    class C {}
  }
}
```

### 参考

- [no-case-declarations](https://eslint.org/docs/rules/no-case-declarations)
