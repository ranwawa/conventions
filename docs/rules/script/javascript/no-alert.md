# no-alert

限制每个文件包含最大数量的类

### 为什么?

包含多个类的文件通常会导致代码库的导航性和结构化较差。

### 错误示例

```js
class Foo {}
class Bar {}
```

### 正确示例

```js
class Foo {}
```

### 参考

- [no-alert](https://eslint.org/docs/rules/no-alert)
