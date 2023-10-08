# no-unresolved

必须导入可解析的模块

### 为什么?

引用的模块必须已创建或安装,否则运行时会报错

### 建议

检查拼写错误,或者依赖是否正确安装,然后重新导入

> package.json

```json
{
  "dependencies": {
    "md5": "*"
  }
}
```

### 错误示例

```js
import md5 from 'md55';
```

### 正确示例

```js
import md5 from 'md5';
```

### 参考

- [no-var-requires](https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md)
