# no-new-require

禁止混合常规变量声明和 require 调用

### 为什么?

在 Node.js 社区，通常习惯把调用 require 模块的初始化和其它变量声明分开，有时也根据模块类型对它们进行分组。该规则帮助你强制执行这种约定。

### 错误示例

```js
var fs = require("fs"),
  i = 0;

var async = require("async"),
  debug = require("diagnostics").someFunction("my-module"),
  eslint = require("eslint");
```

### 正确示例

```js
// only require declarations (grouping off)
var eventEmitter = require("events").EventEmitter,
  myUtils = require("./utils"),
  util = require("util"),
  bar = require(getBarModuleName());

// only non-require declarations
var foo = 42,
  bar = "baz";

// always valid regardless of grouping because all declarations are of the same type
var foo = require("foo" + VERSION),
  bar = require(getBarModuleName()),
  baz = require();
```

### 参考

- [no-new-require](https://eslint.org/docs/rules/no-new-require)
