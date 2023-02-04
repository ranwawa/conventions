# 优先导入具名模块

## Why?

> 具名模块具有直接字面意思,使代码更容易维护.

outer.js

```js
export const name = "zmn";
export default name;
```

## bad

```js
import myName from "../outer.js";
```

## good

```js
import { name } from "../outer.js";
```

## 参考:

- [import/no-anonymous-default-export](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-anonymous-default-export.md)
