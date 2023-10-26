# no-unexpected-multiline

禁止出现容易引起误解的多行表达式

### 为什么

在JavaScript中，因为有自动分号插入(ASI)的机制,所以可以省略分号。然而，有些情况下省略分号，会导致两行无关的代码被解释为一个表达式。尽管在语法上是正确的，但在执行时会抛出异常。

### 建议

所有行结尾都加上分号

### 错误示例

```js
const foo = {
 name: 'ranwawa'
}

const bar = foo
(null || foo).name // 会抛出异常 Uncaught TypeError: foo is not a function
```

### 正确示例

```js
const foo = {
 name: 'ranwawa'
}

const bar = foo;
(null || foo).name;
```

### 参考

- [no-unexpected-multiline](https://eslint.org/docs/rules/no-unexpected-multiline)
