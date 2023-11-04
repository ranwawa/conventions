# global-require

推荐在模块顶层调用require

### 为什么

`require()`执行同步加载，如果在其他位置使用，可能会导致性能问题。

统一放在顶层,便于快速识别文件的依赖项.

### 建议

将所有的`require()`调用放在模块的顶层，类似于ES6的`import`和`export`语句，它们也只能出现在顶层。

### 错误示例

```js
function readFile(filename, callback) {
  var fs = require('fs');
  fs.readFile(filename, callback);
}
```

### 正确示例

```js
var fs = require('fs');

function readFile(filename, callback) {
  fs.readFile(filename, callback);
}
```

### 参考

- [global-require](https://eslint.org/docs/rules/global-require)
