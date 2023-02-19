# no-cycle

禁止文件间互相引用模块

### 为什么?

不同的文件互相引用彼此模块,容易导致死循环.可通过拆分模块或全局变量的方式处理.

outer.js

```js
import age from "./index.js";

export default name = "zmn";
```

### 错误示例

```js
// index.js
import name from "../outer.js";

export default age = 18;
```

### 正确示例

```js
export default age = 18;
```

### 参考

- [import/no-cycle](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md)
