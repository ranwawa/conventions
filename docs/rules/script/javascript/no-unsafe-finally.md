# no-unsafe-finally

不允许仅允许一次迭代的主体进行循环

### 为什么?

永远无法到达第二次迭代的循环是代码中可能出现的错误。

### 错误示例

```js
while (foo) {
  doSomething(foo);
  foo = foo.parent;
  break;
}
```

### 正确示例

```js
while (foo) {
  doSomething(foo);
  foo = foo.parent;
}
```

### 参考

- [no-unsafe-finally](https://eslint.org/docs/rules/no-unsafe-finally)
