# import/no-relative-packages

禁止通过相对路径导入同级包

### 为什么?

在工作区(monorepo/packages)中，通过`../package`相对路径导入同级包，发布到到npm仓库后可能会失效,因为不同的子包是作为不同的npm包发布。

### 建议

请使用npm包名而非相对路径进行导入。

### 错误示例

> my-project/packages/foo.js

```js
import bar from '../bar'; // 使用相对路径导入同级包
```

> my-project/entry.js

```js
import bar from './packages/bar'; // 使用相对路径导入子包
```

### 正确示例

> my-project/packages/foo.js

```js
import bar from 'bar'; // 使用包名导入同级包
```

> my-project/entry.js

```js
import bar from 'bar'; // 使用包名导入同级包
```

### 参考

- [import/no-relative-packages](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-packages.md)
