# 必须将 import 语句放在最前面

## Why?

> import 语句运行时提升,即便放在代码后面,也会最开始执行.使其行为和视觉顺序保持一致,有利于减少混乱.

## bad

```js
const name = "zmn";
import lodash from "lodash";
```

## good

```js
import lodash from "lodash";
const name = "ran";
```

## 参考:

- [import/first](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md)
