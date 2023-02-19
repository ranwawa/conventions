# no-restricted-modules

禁用 process.exit()

### 为什么?

process.exit() 方法在 Node.js 中被用于立即终止 Node.js 进程且退出。这是非常危险的操作，因为他能在任何方法任何时候出现，当发生错误时可能完全停止 Node.js 应用。

### 错误示例

```js
process.exit(1);
process.exit(0);
```

### 正确示例

```js
Process.exit();
var exit = process.exit;
```

### 参考

- [no-restricted-modules](https://eslint.org/docs/rules/no-restricted-modules)
