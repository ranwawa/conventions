# no-process-exit

禁止使用 process.exit()函数

### 为什么?

process.exit()会导致整个 node 进程立即退出,请用异常替代可增强程序的稳定性

### 错误示例

```js
if (process.exitCode === 1) {
  process.exit(1);
}
```

### 正确示例

```js
if (process.exitCode === 1) {
  throw new Error("有异常,请处理");
}
```

## 参考

- [node/no-process-exit](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-process-exit.md)
