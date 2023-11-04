# no-await-in-loop

禁止在循环中使用await

### 为什么

在每个操作中执行`await`表示程序没有充分利用`async`/`await`的并行化优势。每个后续操作都不会开始，直到前一个操作完成。

### 建议

在循环中创建所有的promise，然后使用`Promise.all()`获取结果。

### 错误示例

```js
const bar = async (param) => {};

async function foo(things) {
  const results = [];
  for (const thing of things) {
    results.push(await bar(thing));
  }
}
```

### 正确示例

```js
const bar = async (param) => {};

async function foo(things) {
  const results = [];
  for (const thing of things) {
    results.push(bar(thing));
  }

  await Promise.all(results);
}
```

### 参考

- [no-await-in-loop](https://eslint.org/docs/rules/no-await-in-loop)
