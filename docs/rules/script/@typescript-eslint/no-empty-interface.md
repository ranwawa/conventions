# no-empty-interface

禁止声明空接口

### 为什么

在TypeScript中，空接口没有什么作用：任何非空值都可以赋值给`{}`。

### 建议

接口应该包含至少一个成员，或者继承至少两个接口。

### 错误示例

```ts
// 一个空接口
interface Foo {}

// 一个只有一个超类型的接口 (Bar === Foo)
interface Bar extends Foo {}
```

### 正确示例

```ts
// 一个包含任意数量成员的接口
interface Foo {
  name: 'ranwawa';
}

// 和上面一样
interface Bar {
  age: 520;
}

// 一个有多于一个超类型的接口
// 在这种情况下，接口可以被用作交叉类型的替代。
interface Baz extends Foo, Bar {}
```

### 参考

- [no-empty-interface](https://typescript-eslint.io/rules/no-empty-interface)
