# ban-ts-comment

禁止使用`@ts-<directive>`注释

### 为什么

TypeScript提供了几个指令注释，可以用来禁用ts检验。最好是纠正代码的类型，而不是禁用规则。

- @ts-expect-error
- @ts-ignore
- @ts-nocheck
- @ts-check

人生信条: 面对问题,迎难而上

### 建议

去掉ts禁用规则。如果短时间内实在搞不定,可以临时禁用,但抽空的时候一定要搞清楚原理,解决掉它.

### 错误示例

```ts
// @ts-ignore 使用了any类型
const name: any = 'ranwawa';
```

### 正确示例

```ts
const name = 'ranwawa';
```

### 参考

- [ban-ts-comment](https://typescript-eslint.io/rules/ban-ts-comment)
