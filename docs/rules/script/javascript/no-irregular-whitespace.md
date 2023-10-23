# no-irregular-whitespace

禁止使用不规则的空白字符

### 为什么

无效或不规则的空白字符表面上看起来也是空格,比如中文空格,制表符等,但实际不一样,会在格式化代码和代码解析时引起冲突。

### 建议

统一使用英文空格

### 错误示例

```js
var foo = function () {
　// 前面是全角中文空格
　return 'zhangshan&nbsp;';
};
```

### 正确示例

```js
var foo = function () {
  return 'zhangshan';
};
```

### 参考

- [no-irregular-whitespace](https://eslint.org/docs/rules/no-irregular-whitespace)
