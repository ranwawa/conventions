# no-unreachable

禁止混淆多行表达式

### 为什么?

在换行符没有结束语句的例外情况下，省略分号的键入错误会导致两个不相关的连续行被解释为一个表达式。特别是对于没有分号的编码风格，读者可能会忽略这个错误。尽管在语法上是正确的，但代码在执行时可能会抛出异常。

### 错误示例

```js
var foo = bar(1 || 2).baz();
```

### 正确示例

```js
var foo = bar;
(1 || 2).baz();
```

### 参考

- [no-unreachable](https://eslint.org/docs/rules/no-unreachable)
