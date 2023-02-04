# 禁止对 **dirname 和 **filename 进行字符串连接

## Why?

> 在 Node.js 中，全局变量 \_dirname 和 \_filename 分别代表当前执行脚本的目录路径以及文件路径。

## bad

```js
var fullPath = __dirname + "/foo.js";
var fullPath = __filename + "/foo.js";
```

## good

```js
var fullPath = dirname + "/foo.js";
```

## 参考:

- [no-process-env](https://eslint.org/docs/rules/no-process-env)
