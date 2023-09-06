# import/first

必须将所有导入语句放在文件顶部

### 为什么?

将所有导入语句放在文件顶部可以防止由于模块提升导致的意外情况。

### 建议

将所有导入语句放在文件顶部。

### 错误示例

```js
import ranwawa from './moduleA.js';

// 一些模块级别的初始化器
initWith(ranwawa);

import zhangshan from './moduleB.js'; // <- 这里会报错
```

### 正确示例

```js
import ranwawa from './moduleA.js';
import zhangshan from './moduleB.js';

// 一些模块级别的初始化器
initWith(ranwawa);
```

### 参考

- [import/export](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md)
