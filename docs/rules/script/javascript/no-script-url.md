# no-script-url

禁用不必要的 return await

### 为什么?

async function 的返回值总是封装在 Promise.resolve，return await 实际上并没有做任何事情，只是在 Promise resolve 或 reject 之前增加了额外的时间。

### 错误示例

```js
async function foo() {
  return await bar();
}
```

### 正确示例

```js
async function foo() {
  try {
    return await bar();
  } catch (error) {}
}
```

### 参考

- [no-script-url](https://eslint.org/docs/rules/no-script-url)
