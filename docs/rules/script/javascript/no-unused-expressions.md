# no-unused-expressions

禁用一成不变的循环条件

### 为什么?

循环条件中的变量在循环中是要经常改变的。如果不是这样，那么可能是个错误。

### 错误示例

```js
while (node) {
  doSomething(node);
}
node = other;

for (var j = 0; j < items.length; ++i) {
  doSomething(items[j]);
}

while (node !== root) {
  doSomething(node);
}
```

### 正确示例

```js
while (node) {
  doSomething(node);
  node = node.parent;
}

for (var j = 0; j < items.length; ++j) {
  doSomething(items[j]);
}

// OK, the result of this binary expression is changed in this loop.
while (node !== root) {
  doSomething(node);
  node = node.parent;
}
```

### 参考

- [no-unused-expressions](https://eslint.org/docs/rules/no-unused-expressions)
