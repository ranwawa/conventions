# no-unnecessary-type-constraint

禁止不必要的类型约束

### 为什么?

泛型会默认为 unknown 类型,如果将泛型约束为 unknown/any 则是多此一举,可删掉

### 错误示例

```ts
interface Foo<T extends unknown> {}
```

### 正确示例

```ts
interface Foo<T> {}
```

## 参考

- [@typescript-eslint/no-unnecessary-type-constraint](https://typescript-eslint.io/rules/no-unnecessary-type-constraint)
