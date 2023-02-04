# 禁止忽略 bin 中文件

## Why?

> package.json.bin 字段用于指定哪些文件推送到 npm 仓库.如果忽略文件,会导致推送失败,请移出`.npmignore`中的条目

package.json

```json
{
  "bin": ["./index.js"]
}
```

## bad

```shell
// .npmignore
./index.js
```

## good

```js

```

## 参考

- [node/no-unpublished-bin](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-bin.md)
