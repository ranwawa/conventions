# no-namespace

禁止使用 module/namespace 关键字

### 为什么?

这两个关键字已经过期了,请使用 declare module 声明外部模块

### 错误示例

```ts
module foo {}
namespace foo {}
```

### 正确示例

```ts
declare module "foo" {}
```

## 参考

- [@typescript-eslint/no-namespace](https://typescript-eslint.io/rules/no-namespace)
