# no-sync

禁用通过 require 加载的指定模块

### 为什么?

加载的模块名称不是预定义的/静态的，或者只有在真正需要的情况下才有条件地加载模块。

### 错误示例

```js
var fs = require("fs");
var cluster = require("cluster");
var pick = require("lodash/pick");
```

### 正确示例

```js
var crypto = require("crypto");
var pick = require("lodash/pick");
```

### 参考

- [no-sync](https://eslint.org/docs/rules/no-sync)
