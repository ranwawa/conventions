# no-new-wrappers

禁止使用原始包装类型

### 为什么

在JavaScript中，有三种原始类型有包装对象：字符串，数字和布尔值。他们的构造函数分别是`String`，`Number`和`Boolean`。每当读取这些原始值之一时，都会使用原始包装类型创建一个关联的对象，然后销毁它，这就是为什么你可以在原始值上调用方法，例如number的toFixed方法。

虽然可以手动创建一个新的包装实例，但几乎没人这么弄过，直接使用字面量形式就行了。

### 建议

避免使用`new`操作符与原始包装类型一起使用。

### 错误示例

```js
const name = new String('ranwawa');
const age = new Number(520);
const male = new Boolean(true);
```

### 正确示例

```js
const name = 'ranwawa';
```

### 参考

- [no-new-wrappers](https://eslint.org/docs/rules/no-new-wrappers)
