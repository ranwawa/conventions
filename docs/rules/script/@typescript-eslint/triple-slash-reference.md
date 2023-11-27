# triple-slash-reference

禁止使用三斜线指令

### 为什么

TypeScript的`///`三斜线引用是一种表示文件中可用另一个模块的类型的方式。使用import语法显示的引入类型,使代码的可阅读性更高。

### 建议

使用ES6风格的import type声明替代三斜线指令

### 错误示例

```ts
/// <reference path="foo" />
```

### 正确示例

```ts
import type { Foo } from 'foo';
```

### 参考

- [triple-slash-reference](https://typescript-eslint.io/rules/triple-slash-reference)
