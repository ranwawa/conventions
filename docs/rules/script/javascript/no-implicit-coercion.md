# no-implicit-coercion

禁止对对象或只读全局变量赋值

### 为什么?

可能会导致失去对重要功能的访问。

### 错误示例

```js
Object = null;
undefined = 1;
```

### 正确示例

```js
a = 1;
var b = 1;
b = 2;
```

### 参考

- [no-implicit-coercion](https://eslint.org/docs/rules/no-implicit-coercion)
