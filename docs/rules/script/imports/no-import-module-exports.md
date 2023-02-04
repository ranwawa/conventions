# 禁止存在未使用的模块文件

## Why?

> 删除未使用的模块文件,有利于减少项目复杂度.随着项目增长,如果存在大量未实际使用的代码,会增加维护成本.

## bad

```js
const name = "zmn";
```

## good

```js
const name = "zmn";
export default name;
```

## 参考:

- [import/no-unused-modules](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unused-modules.md)
