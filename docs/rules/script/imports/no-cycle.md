# 禁止引用同一文件自身的模块

## Why?

> 同个文件的模块,直接使用即可,不需要通过 import 语法引入,容易产生混淆.

## bad

```js
// index.js
import newName from "./index.js";

const name = "zmn";
export default name;

console.log(newName);
```

## good

```js
const name = "zmn";
export default name;

console.log(newName);
```

## 参考:

- [import//no-self-import](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules//no-self-import.md)
