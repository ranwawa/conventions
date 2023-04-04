# export

禁止导出重复的模块

### 为什么?

重复导出相同的模块,后续导出的模块值会被忽略.
容易产生混淆,降低可维护性.
请删除重复的导出.

### 错误示例

```js
export default class a {};
export default class b {}
```

### 正确示例

```js
export default class a {}
export const b = class {};
```

### 参考

- [import/export](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md)
