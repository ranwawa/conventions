# symbol-description

强制模块内的 import 排序

### 为什么?

mport 语句用来引入外部模块输出的成员 (函数、对象或原语)。

### 错误示例

```js
import b from "foo.js";
import a from "bar.js";
import { b, c } from "foo.js";
import { a, b } from "bar.js";
import { b, a, c } from "foo.js";
```

### 正确示例

```js
import a from "foo.js";
import b from "bar.js";
import "foo.js";
import * as bar from "bar.js";
import { a, b } from "baz.js";
import c from "qux.js";
import { a, b, c } from "foo.js";
```

### 参考

- [symbol-description](https://eslint.org/docs/rules/symbol-description)
