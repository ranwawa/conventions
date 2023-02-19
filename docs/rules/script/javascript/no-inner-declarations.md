# no-inner-declarations

禁止分配给导入的绑定

### 为什么?

ES Modules 对导入绑定的更新会导致运行时错误。

### 错误示例

```js
import mod, { named } from "./mod.mjs";
import * as mod_ns from "./mod.mjs";

mod = 1; // ERROR: 'mod' is readonly.
named = 2; // ERROR: 'named' is readonly.
```

### 正确示例

```js
import mod, { named } from "./mod.mjs";
import * as mod_ns from "./mod.mjs";

mod.prop = 1;
named.prop = 2;
```

### 参考

- [no-inner-declarations](https://eslint.org/docs/rules/no-inner-declarations)
