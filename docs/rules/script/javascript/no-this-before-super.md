# 禁止使用指定的 import 加载的模块

## Why?

> 某些 import 在特定的环境下毫无意义;有些模块提供相似或相同的功能,却要维护两个依赖，造成维护成本过高。

## bad

```js
import fs from "fs";
export { fs } from "fs";
import { DisallowedObject as AllowedObject } from "foo";
import { "DisallowedObject" as AllowedObject } from "foo";
```

## good

```js
import crypto from "crypto";
export { foo } from "bar";
import crypto from "crypto";
import eslint from "eslint";
export * from "path";
```

## 参考:

- [no-this-before-super](https://eslint.org/docs/rules/no-this-before-super)
