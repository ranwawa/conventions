# 禁止使用斜线语法引入类型

## Why?

> 混用斜线语法和 import 语法增加了使用难度,请统一使用 import 语法导致外部类型

## bad

```ts
/// <reference path="foo" />
```

## good

```ts
import type { SomeType } from "foo";
```

## 参考

- [@typescript-eslint/triple-slash-reference](https://typescript-eslint.io/rules/triple-slash-reference)
