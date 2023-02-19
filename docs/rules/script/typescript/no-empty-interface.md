# no-empty-interface

禁止使用空类型

### 为什么?

空类型相当于其父类,没存在的必要,直接使用父类即可

### 错误示例

```ts
interface Foo {
  name: string;
}

interface Bar extends Foo {}

type Baz = Bar;
```

### 正确示例

```ts
interface Foo {
  name: string;
}

type Baz = Foo;
```

## 参考

- [@typescript-eslint/no-empty-interface](https://typescript-eslint.io/rules/no-empty-interface)
