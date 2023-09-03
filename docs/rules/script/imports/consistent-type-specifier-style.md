# consistent-type-specifier-style

必须使用顶级类型导入语法导入ts类型

### 为什么?

将类型导入语句和变量导入语句分开放置,有利于提升代码可阅读性和可维护性.

请将局部类型导入语法修改成顶级类型导入语法

### 错误示例

```ts
import { type FC, Component } from 'react';
```

### 正确示例

```ts
import { Component } from 'react';

import type { FC } from 'react';
```

### 参考

- [no-var-requires](https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md)
