# no-self-assign

禁用 Script URL

### 为什么?

链接中的代码必须由浏览器解析和赋值，其处理方式与 eval 一样。

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

- [no-self-assign](https://eslint.org/docs/rules/no-self-assign)
