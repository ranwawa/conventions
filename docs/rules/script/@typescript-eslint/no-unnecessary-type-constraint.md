# no-unnecessary-type-constraint

禁止不必要的类型约束

### 为什么

在TypeScript中，泛型类型参数（`<T>`）可以使用[`extends`关键字](https://www.typescriptlang.org/docs/handbook/generics.html#generic-constraints)进行“约束”。当没有提供`extends`时，类型参数默认约束为`unknown`。因此，从`any`或`unknown`进行`extend`是多余的。

### 建议

删除不必要的类型约束

### 错误示例

```ts
interface FooAny<T extends any> {}
```

### 正确示例

```ts
interface Foo<T> {}
```

### 参考

- [no-unnecessary-type-constraint](https://typescript-eslint.io/rules/no-unnecessary-type-constraint)
