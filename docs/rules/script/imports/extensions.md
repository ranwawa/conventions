# export/extensions

必须去掉文件扩展名

### 为什么?

webpack等打包工具可以自动处理忽略的文件扩展名,统一去掉扩展名可保持代码风格统一,

### 建议

请删除文件扩展名

### 错误示例

```js
import './moduleA.js';
```

### 正确示例

```js
import './moduleA';
```

### 参考

- [import/export](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md)
