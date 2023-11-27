# no-misused-new

禁止错误地定义`new`和`constructor`

### 为什么

JavaScript类可以定义一个`constructor`方法，在初始化类的实例时会运行这个方法。

对JavaScript类和/或TypeScript接口不熟悉的人可能会混淆何时使用`constructor`或`new`。

### 建议

在类中使用`constructor`，在接口中使用不允许使用`new`和`constructor`

### 错误示例

```ts
declare class Foo {
  new(): Foo;
}

interface Bar {
  constructor();
}
```

### 正确示例

```ts
declare class Foo {
  constructor();
}

interface Bar {
  new (): Foo;
}
```

### 参考

- [no-misused-new](https://typescript-eslint.io/rules/no-misused-new)
