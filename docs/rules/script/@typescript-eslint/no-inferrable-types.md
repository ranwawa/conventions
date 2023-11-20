# no-inferrable-types

禁止对初始化为数字、字符串或布尔值的变量或参数进行显式类型声明

### 为什么

TypeScript能够从它们的默认值或初始值推断出类型。ts的一大问题就是会污染原始代码,大量类型代码已经降低了源代码的可阅读性,所以能够省略的类型就让它省略掉吧。

### 建议

不要对初始化为数字、字符串或布尔值的变量或参数进行显式类型声明。

### 错误示例

```ts
const a: number = 520;
```

### 正确示例

```ts
const a = 520;
```

### 参考

- [no-inferrable-types](https://typescript-eslint.io/rules/no-inferrable-types)
