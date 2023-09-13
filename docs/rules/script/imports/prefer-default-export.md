# prefer-default-export

必须使用 default 导出惟一的模块

### 为什么?

文件只导出一个模块,使用 default 导出.调用方不用关心导出的模块名,更容易上手.

### 错误示例

```js
export const name = 'zmn';
```

### 正确示例

```js
const name = 'zmn';
export default name;
```

### 参考

- [import/prefer-default-export](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md)
