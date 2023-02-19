# no-warning-comments

禁止使用 void 操作符

### 为什么?

使用 void 操作符的通常情况是要得到一个单纯的 undefined 值，因为之前的 ES5 undefined 值是可变的。

### 错误示例

```js
var foo = void bar();
function baz() {
  return void 0;
}
```

### 正确示例

```js
void foo;
void someFunction();
```

### 参考

- [no-warning-comments](https://eslint.org/docs/rules/no-warning-comments)
