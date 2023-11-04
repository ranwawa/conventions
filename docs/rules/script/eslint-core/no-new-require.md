# no-new-require

禁止使用new require

### 为什么

虽然语法上new require没问题,但这看上去是把require当成了一个构造函数在使用,容易误导人。

### 建议

将require和new操作分开，先引入模块，再使用new操作。

### 错误示例

```js
const appHeader = new require('react');
```

### 正确示例

```js
const AppHeader = require('react');

const appHeader = new AppHeader();
```

### 参考

- [no-new-require](https://eslint.org/docs/rules/no-new-require)
