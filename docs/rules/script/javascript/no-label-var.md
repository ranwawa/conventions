# 禁止删除变量

## Why?

> delete 的目的是删除对象的属性。使用 delete 操作删除一个变量可能会导致意外情况发生。

## bad

```js
var x;
delete x;
```

## good

```js
var x;
```

## 参考:

- [no-label-var](https://eslint.org/docs/rules/no-label-var)
