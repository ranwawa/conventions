# 禁止多余的相对路径符号

## Why?

> 增加理解和维护难度,始终保持最简洁的路径.

## bad

```js
import outer from "./../outer.js";
```

## good

```js
import outer from "../outer.js";
```

## 参考:

- [import/no-useless-path-segments](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md)
