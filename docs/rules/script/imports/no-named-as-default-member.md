# 禁用使用已存在的具名模块导入默认模块

## Why?

> 绝大部分情况是忘记输入花括号导致.如果确实是导入默认模块,这种样命名很容易使其他同事产生误解,应该要换个名字

outer.js

```js
export default "zmn";
export const name = "ranwawa";
```

## bad

```js
import name from "./outer.js";
```

## good

```js
// good
import myName from "./outer.js";
```

## 参考:

- [import/no-named-as-default](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md)
