# no-empty-character-class

禁止在正则表达式中使用空字符类

### 为什么

因为在正则表达式中，空字符类不会匹配任何内容，占着茅坑不拉屎反而给其他阅读代码的人带来困扰。

### 建议

`[]`字符类中必须有东西,否则就把它删除掉.

### 错误示例

```js
'ranwawa'.match(/^abc[]/);
```

### 正确示例

```js
'ranwawa'.match(/^abc[d]/);
```

### 参考

- [no-empty-character-class](https://eslint.org/docs/rules/no-empty-character-class)
