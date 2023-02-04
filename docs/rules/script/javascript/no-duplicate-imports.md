# 禁止类成员中出现重复的名称

## Why?

> 如果类成员中有同名的声明，最后一个声明将会默默地覆盖其它声明。 它可能导致意外的行为。

## bad

```js
class Foo {
  bar() {}
  bar() {}
}

class Foo {
  bar() {}
  get bar() {}
}

class Foo {
  static bar() {}
  static bar() {}
}
```

## good

```js
class Foo {
  bar() {}
  qux() {}
}

class Foo {
  get bar() {}
  set bar(value) {}
}

class Foo {
  static bar() {}
  bar() {}
}
```

## 参考:

- [no-duplicate-imports](https://eslint.org/docs/rules/no-duplicate-imports)
