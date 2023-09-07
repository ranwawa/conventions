# import/no-amd

禁止使用AMD模块定义

### 为什么?

AMD模块定义方式已经过时，现在推荐使用ES6模块定义方式。

### 建议

将AMD模块定义方式改为ES6模块定义方式。

### 错误示例

```js
define(['react', 'lodash'], function (react, lodash) {
  /* ... */
});

require(['lodash', 'react'], function (lodash, react) {
  /* ... */
});
```

### 正确示例

```js
import React from 'react';
import _ from 'lodash';
```

### 参考

- [import/no-amd](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md)
