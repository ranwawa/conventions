# no-unpublished-import

no-unpublished-import

禁止引入私有文件

### 为什么?

不会发布到 npm 仓库的文件就是私有文件,如果在包文件中引入了私有文件,其他人安装这个包时就会报错,请把依赖包添加到 package.json 的 files 字段中

package.json

```json
{
  "files": ["./src"]
}
```

### 错误示例

```js
import { name } from "./dist";
```

### 正确示例

```js
import { name } from "./src";
```

## 参考

- [no-unpublished-import](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-import.md)
