# no-inferrable-types

禁止给可推导的变量添加类型

### 为什么?

ts 可明确推导的变量加上类型,增加了代码噪音,请删除掉

### 错误示例

```ts
const name: string = "zmn";
```

### 正确示例

```ts
const name = "zmn";
```

## 参考

- [@typescript-eslint/no-inferrable-types](https://typescript-eslint.io/rules/no-inferrable-types)
