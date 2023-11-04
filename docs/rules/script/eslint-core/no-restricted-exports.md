# no-restricted-exports

禁止导出指定的名称

### 为什么

以下变量名禁止被导出,没有啥原因,就是要禁止

- then
- default

### 建议

换个名字

### 错误示例

```js
export function then() {}
```

### 正确示例

```js
export function foo() {}
```

### 参考

- [no-restricted-exports](https://eslint.org/docs/rules/no-restricted-exports)
