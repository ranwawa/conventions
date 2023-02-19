# no-new-symbol

禁止重复模块导入

### 为什么?

为每个模块使用单一的 import 语句会使代码更加清新。

### 错误示例

```js
import { merge } from "module";
import something from "another-module";
import { find } from "module";
```

### 正确示例

```js
import { merge, find } from "module";
import something from "another-module";
```

### 参考

- [no-new-symbol](https://eslint.org/docs/rules/no-new-symbol)
