# 禁止使用空类型

## Why?

> 空类型相当于其父类,没存在的必要,直接使用父类即可

## bad

```ts
interface Foo {
  name: string;
}

interface Bar extends Foo {}

type Baz = Bar;
```

## good

```ts
interface Foo {
  name: string;
}

type Baz = Foo;
```

## 参考

- [@typescript-eslint/no-empty-interface](https://typescript-eslint.io/rules/no-empty-interface)
