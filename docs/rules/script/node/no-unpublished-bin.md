# 禁止使用 process.exit()函数

## Why?

> process.exit()会导致整个 node 进程立即退出,请用异常替代可增强程序的稳定性

## bad

```js
if (process.exitCode === 1) {
  process.exit(1);
}
```

## good

```js
if (process.exitCode === 1) {
  throw new Error("有异常,请处理");
}
```

## 参考

- [node/no-process-exit](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-process-exit.md)
