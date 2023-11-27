# max-classes-per-file

每个文件中只能有一个类

### 为什么

包含多个类的文件通常会导致代码库的导航性和结构性较差。最佳实践是每个文件只负责一个职责。

### 建议

每个文件只包含一个类，如果有多余的类，应该单独放在一个文件中。

### 错误示例

```js
// index.js
class Foo {}
class Bar {}
```

### 正确示例

```js
// Foo.js
class Foo {}
```

### 参考

- [max-classes-per-file](https://eslint.org/docs/rules/max-classes-per-file)
