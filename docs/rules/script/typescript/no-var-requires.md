# no-var-requires

禁止使用 node 的 require 语法

### 为什么?

ts 不支持 node 的 require 语法,会导致引入的模块类型使用,请使用 ts 的 import 语法或者 esm 替代

### 错误示例

```ts
const foo = require("foo");
```

### 正确示例

```ts
import foo = require("foo");
```

## 参考

- [@typescript-eslint/no-var-requires](https://typescript-eslint.io/rules/no-var-requires)
