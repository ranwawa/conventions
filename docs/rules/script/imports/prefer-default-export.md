# 必须在最后一条 import 语句后换行

## Why?

> 模块引入和业务代码分开,从视觉层面区分开他们的用途.

## bad

```js
import lodash from "lodash";
console.log(lodash);
```

## good

```js
import lodash from "lodash";

console.log(lodash);
```

## 参考:

- [import/newline-after-import](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md)
