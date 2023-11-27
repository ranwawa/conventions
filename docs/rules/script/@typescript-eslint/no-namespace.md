# no-namespace

禁止使用TypeScript命名空间

### 为什么

TypeScript历史上允许一种叫做"自定义模块"的代码组织形式(`module Example {}`),后来被重命名为"命名空间"(`namespace Example`)。命名空间是一种过时的组织TypeScript代码的方式。现在推荐使用ES2015模块语法(`import`/`export`)。

### 建议

使用ES2015的模块语法(`import`/`export`)替代命名空间。

外部模块使用declare module进行声明

### 错误示例

```ts
module foo {}
namespace foo {}
```

### 正确示例

```ts
export interface Bar {}

declare module 'foo' {}
```

### 参考

- [no-namespace](https://typescript-eslint.io/rules/no-namespace)
