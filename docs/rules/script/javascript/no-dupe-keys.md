# no-dupe-keys

在 if-else-if 链中禁止重复条件

### 为什么?

If-else-if 链通常用于根据特定条件只需要执行几个可能分支中的一个分支(或最多一个分支)的情况。

### 错误示例

```js
if (isSomething(x)) {
  foo();
} else if (isSomething(x)) {
  bar();
}
```

### 正确示例

```js
if (isSomething(x)) {
  foo();
} else if (isSomethingElse(x)) {
  bar();
}
```

### 参考

- [no-dupe-keys](https://eslint.org/docs/rules/no-dupe-keys)
