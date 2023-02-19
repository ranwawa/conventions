# no-unused-vars

禁止存在未使用的变量

### 为什么?

随着代码的增长,如果存在过多未使用的变量会影响代码的可读性和可维护性,请删掉未使用的变量

### 错误示例

```ts
type Prop = string;
type State = number;

let prop: Prop;
```

### 正确示例

```ts
type Prop = string;

let prop: Prop;
```

## 参考

- [@typescript-eslint/no-unused-vars](https://typescript-eslint.io/rules/no-unused-vars)
