# 引入的文件必须包含后缀名

## Why?

> 虽然大部分编译器会自动补全,但始终会消耗额外的性能.明确后缀名也可避免同名但不同后缀文件时引发的异常

## bad

```js
import outer from "./outer";
```

## good

```js
import outer from "./outer.js";
```

## 参考:

- [import/extensions](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md)
