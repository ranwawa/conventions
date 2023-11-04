 # no-proto

禁止使用__proto__属性

### 为什么

__proto__属性在ECMAScript 3.1中已被弃用，不应在代码中使用。

### 建议

使用Object.getPrototypeOf获取对象的原型，使用Object.setPrototypeOf修改对象的原型。

### 错误示例

```js
const obj = {};

const a = obj.__proto__;

obj["__proto__"] = {name: 'ranwawa'};
```

### 正确示例

```js
const obj = {};

const a = Object.getPrototypeOf(obj);

Object.setPrototypeOf(obj, {name: 'ranwawa'});

```

### 参考

- [no-proto](https://eslint.org/docs/rules/no-proto)