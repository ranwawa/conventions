# no-empty-function

禁止使用空函数

### 为什么?

空函数不会产生任何作用,没存在的意思.如果有特殊用途,请在函数体内加个注释以说明用途

### 错误示例

```ts
function loop() {}
```

### 正确示例

```ts
function loop() {
  // 用于指定默认函数
}
```

## 参考

- [@typescript-eslint/no-empty-function](https://typescript-eslint.io/rules/no-empty-function)
