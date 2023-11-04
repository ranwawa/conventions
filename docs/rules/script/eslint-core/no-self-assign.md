# no-self-assign

禁止自我赋值

### 为什么

js语法是允许这样操作的,但毫无意义,肯定是手误.

### 建议

删掉这种无意义的代码

### 错误示例

```js
let foo = 'ranwawa';
foo = foo;
```

### 正确示例

```js
let foo = 'ranwawa';
foo = 'zhangsan';
```

### 参考

- [no-self-assign](https://eslint.org/docs/rules/no-self-assign)
