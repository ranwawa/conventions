# no-prototype-builtins

禁止直接调用Object.prototype的方法

### 为什么

在js中Object是所有类型的基类,理所当然可以调用Object上的实例方法

但有些对象可能没有从Object.prototype继承属性，对象可能有属性覆盖Object.prototype的内置方法，直接调用就很可能出问题。

### 建议

应该总是从Object.prototype调用这些方法。

### 错误示例

```js
const foo = {};

foo.hasOwnProperty('bar');
```

### 正确示例

```js
const foo = {};

Object.prototype.hasOwnProperty.call(foo, 'bar');
```

### 参考

- [no-prototype-builtins](https://eslint.org/docs/rules/no-prototype-builtins)
