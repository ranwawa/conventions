# no-label-var

禁止删除变量

### 为什么?

delete 的目的是删除对象的属性。使用 delete 操作删除一个变量可能会导致意外情况发生。

### 错误示例

```js
var x;
delete x;
```

### 正确示例

```js
var x;
```

### 参考

- [no-label-var](https://eslint.org/docs/rules/no-label-var)
