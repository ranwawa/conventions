结果输出为：
 # no-multi-spaces

禁止使用多个空格

### 为什么

连续多个空格通常是错误，除非用于缩进。例如，foo和===之间有两个空格，应该使用单个空格。

### 建议

只使用一个空格进行分隔。

### 错误示例

```js
const foo =  520;
if(foo   === 'ranwawa') {}
```

### 正确示例

```js
const foo = 520;
if(foo === 'ranwawa') {}
```

### 参考

- [no-multi-spaces](https://eslint.org/docs/rules/no-multi-spaces)