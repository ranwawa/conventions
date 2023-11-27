# no-var-requires

禁止在import语句之外使用require

### 为什么

为了规范模块引入的方式，提倡使用ES6的import语法，或者`import foo = require("foo")`的形式。

### 建议

将`var foo = require("foo")`等形式改为`import foo from 'foo'`或`import foo = require('foo')`。

### 错误示例

```ts
const foo = require('foo');
```

### 正确示例

```ts
import foo from 'foo';

// 为了兼容commonjs
import foo = require('foo');
```

### 参考

- [no-var-requires](https://typescript-eslint.io/rules/no-var-requires)
