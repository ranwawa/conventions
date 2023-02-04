# 禁止使用 node 的 require 语法

## Why?

> ts 不支持 node 的 require 语法,会导致引入的模块类型使用,请使用 ts 的 import 语法或者 esm 替代

## bad

```ts
const foo = require("foo");
```

## good

```ts
import foo = require("foo");
```

## 参考

- [@typescript-eslint/no-var-requires](https://typescript-eslint.io/rules/no-var-requires)
