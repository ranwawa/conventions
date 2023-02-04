# 禁止在默认模块上访问已存在的具名模块

## Why?

> 在默认模块上访问具名模块,通常是因为对模块系统原理不熟悉导致.应当在导入时直接导入具名模块

outer.js

```js
export default "zmn";
export const name = "ranwawa";
```

## bad

```js
import index from "./outer.js";
const { name } = index;
```

## good

```js
import { name } from "./outer.js";
```

## 参考:

- [import/no-named-as-default-member](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md)
