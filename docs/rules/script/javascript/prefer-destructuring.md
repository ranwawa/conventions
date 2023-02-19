# prefer-destructuring

要求使用 const 声明那些声明后不再被修改的变量

### 为什么?

const 声明告诉读者，“这个变量从不会被重新赋值”，从而减少认知负荷，提高可维护性。

### 错误示例

```js
let a = 3;
console.log(a);

let { a, b } = obj; /*error 'b' is never reassigned, use 'const' instead.*/
a = a + 1;

let { a, b } = obj;
```

### 正确示例

```js
// using const.
const a = 0;

// it's never initialized.
let a;
console.log(a);

const { a: a0, b } = obj;
const a = a0 + 1;

let { a, b } = obj;
a = a + 1;
```

### 参考

- [prefer-destructuring](https://eslint.org/docs/rules/prefer-destructuring)
