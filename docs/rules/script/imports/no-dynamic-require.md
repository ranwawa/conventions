# import/no-dynamic-require

禁止使用动态require

### 为什么?

动态require会使静态代码分析变得困难，也难以找出模块在代码库中的使用情况。

### 建议

请使用静态字符串作为require的参数。

### 错误示例

```js
require('foo');
require('../' + 'foo');
require(`../${'foo'}`);
require('foo'());
```

### 正确示例

```js
require('../foo');
require(`../foo`);
```

### 参考

- [import/no-dynamic-require](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md)
