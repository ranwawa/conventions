# 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字

## Why?

> ES2015 允许在 import ，export 和结构赋值时对引用进行重命名, 这和没有重命名是等价的，因此这种操作完全冗余。

## bad

```js
import { foo as foo } from "bar";
export { foo as foo };
export { foo as foo } from "bar";
let { foo: foo } = bar;
let { foo: foo } = bar;
function foo({ bar: bar }) {}
({ foo: foo }) => {};
```

## good

```js
import * as foo from "foo";
import { foo } from "bar";
import { foo as bar } from "baz";

export { foo };
export { foo as bar };
export { foo as bar } from "foo";

let { foo } = bar;
let { foo: bar } = baz;
let { [foo]: foo } = bar;

function foo({ bar }) {}
function foo({ bar: baz }) {}

({ foo }) => {};
({ foo: bar }) => {};
```

## 参考:

- [no-var](https://eslint.org/docs/rules/no-var)
