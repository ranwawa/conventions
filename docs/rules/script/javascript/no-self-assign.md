# 禁用 Script URL

## Why?

> 链接中的代码必须由浏览器解析和赋值，其处理方式与 eval 一样。

## bad

```js
async function foo() {
  return await bar();
}
```

## good

```js
async function foo() {
  try {
    return await bar();
  } catch (error) {}
}
```

## 参考:

- [no-self-assign](https://eslint.org/docs/rules/no-self-assign)
