# no-class-assign

禁止修改类声明的变量

### 为什么

类声明会创建一个变量，我们可以修改这个变量，但这个变量通过会被用来和new操作配合使用,重新赋值就会引起类型异常。

### 建议

不要修改类声明的变量。

### 错误示例

```js
class Foo {}
Foo = 520;
```

### 正确示例

```js
let Foo = 520; // Foo是一个变量
Foo = class Foo {};
```

### 参考

- [no-class-assign](https://eslint.org/docs/rules/no-class-assign)
