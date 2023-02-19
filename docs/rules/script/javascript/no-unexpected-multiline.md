# no-unexpected-multiline

禁止在常规字符串中使用模板文字占位符语法

### 为什么?

当想要使用模板字面量时，很容易使用错误的引号。

### 错误示例

```js
"Hello ${name}!";
"Hello ${name}!";
"Time: ${12 * 60 * 60 * 1000}";
```

### 正确示例

```js
`Hello ${name}!`;
`Time: ${12 * 60 * 60 * 1000}`;

templateFunction`Hello ${name}`;
```

### 参考

- [no-unexpected-multiline](https://eslint.org/docs/rules/no-unexpected-multiline)
