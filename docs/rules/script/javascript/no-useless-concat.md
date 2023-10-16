# no-useless-concat

禁止无用的字符串拼接

### 为什么

拼接两个字符串，就像脱了裤子放屁,多此一举。

### 建议

将可以合并的字符串直接写成一个字符串。

### 错误示例

```js
var a = 'ranwawa' + '520';
```

### 正确示例

```js
var a = 'ranwawa520';
```

### 参考

- [no-useless-concat](https://eslint.org/docs/rules/no-useless-concat)
