# no-unused-labels

禁止使用未被引用的标签

### 为什么

声明但未在代码中使用的标签,就和占着茅坑不拉屎一样,要他干嘛

### 建议

删除未被引用的标签

### 错误示例

```js
A: var foo = 0;
```

### 正确示例

```js
A: {
  if (foo()) {
    break A;
  }
  bar();
}
```

### 参考

- [no-unused-labels](https://eslint.org/docs/rules/no-unused-labels)
