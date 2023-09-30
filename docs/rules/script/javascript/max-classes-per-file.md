# max-classes-per-file

每个文件中只能有一个类

### 为什么

包含多个类的文件通常会导致代码库的导航性和结构性较差。

人生信条: 一次只做一件事

### 建议

多余的类单独用自己的文件存放,并且保持文件名和类名一致

### 错误示例

```js
// index.js
class Foo {}
class Bar {}
```

### 正确示例

```js
// foo.js
class Foo {}
```

```js
// bar.js
class Bar {}
```

### 参考

- [max-classes-per-file](https://eslint.org/docs/rules/max-classes-per-file)
