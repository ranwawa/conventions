# prefer-regex-literals

推荐使用正则表达式字面量

### 为什么

创建正则表达式有两种方式：正则表达式字面量和`RegExp`构造函数。如果预先知道正则表达式的内容，推荐使用正则表达式字面量而不是构造函数。

就像我们声明对象,数字字符串一样,都是用的字面量形式.

### 建议

使用正则表达式字面量，而不是`RegExp`构造函数。

### 错误示例

```js
const reg = new RegExp('ranwawa');
```

### 正确示例

```js
const reg = /ranwawa/;
```

### 参考

- [prefer-regex-literals](https://eslint.org/docs/rules/prefer-regex-literals)
