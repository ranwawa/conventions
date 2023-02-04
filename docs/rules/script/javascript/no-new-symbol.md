# 禁止重复模块导入

## Why?

> 为每个模块使用单一的 import 语句会使代码更加清新。

## bad

```js
import { merge } from "module";
import something from "another-module";
import { find } from "module";
```

## good

```js
import { merge, find } from "module";
import something from "another-module";
```

## 参考:

- [no-new-symbol](https://eslint.org/docs/rules/no-new-symbol)
