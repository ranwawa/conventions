# 禁止使用 void 操作符

## Why?

> 使用 void 操作符的通常情况是要得到一个单纯的 undefined 值，因为之前的 ES5 undefined 值是可变的。

## bad

```js
var foo = void bar();
function baz() {
  return void 0;
}
```

## good

```js
void foo;
void someFunction();
```

## 参考:

- [no-warning-comments](https://eslint.org/docs/rules/no-warning-comments)
