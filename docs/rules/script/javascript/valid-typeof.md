# valid-typeof

有效的 jsdoc

### 为什么?

强制执行有效的 JSDoc 注释。

### 错误示例

```js
/**
 *  Add two numbers.
 *  @param {number} num The first number.
 *  @returns The sum of the two numbers.
 */
function add(num1, num2) {
  return num1 + num2;
}
```

### 正确示例

```js
/**
 * Add two numbers.
 * @param {number} num1 The first number.
 * @param {number} num2 The second number.
 * @returns {number} The sum of the two numbers.
 */
function add(num1, num2) {
  return num1 + num2;
}
```

### 参考

- [valid-typeof](https://eslint.org/docs/rules/valid-typeof)
