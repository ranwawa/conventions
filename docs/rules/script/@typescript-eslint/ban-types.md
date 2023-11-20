# ban-types

禁止使用特定类型

### 为什么

一些内置类型有别名，夹杂使用大写和小写的类型,让人看起来有点儿头昏眼花的。

人生信条: 能简单的就别搞复杂了

### 建议

不要使用大写的原始类型，统一使用小写类型。

- String -> string
- Number -> Number
- Boolean -> boolean
- Symbol -> symbol
- BigInt -> bigint
- Function -> () => void
- Object -> Record<string, string>

### 错误示例

```ts
const name: String = 'ranwawa';
```

### 正确示例

```ts
const name: string = 'ranwawa';
```

### 参考

- [ban-types](https://typescript-eslint.io/rules/ban-types)
