# no-unresolved

no-unresolved

必须导入可解析的模块

### 为什么?

引用的文件必须已创建或安装,否则运行时会报错

package.json

```json
{
  "dependencies": {
    "md5": "*"
  }
}
```

### 错误示例

```js
import moment from "moment";
```

### 正确示例

```js
import md5 from "md5";
```

### 参考

- [no-var-requires](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md)
