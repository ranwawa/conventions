# 强制在 getter 属性中出现一个 return 语句

## Why?

> get 语法将对象属性绑定到一个函数，该函数在查找该属性时将被调用。

## bad

```js
p = {
  get name() {
    // no returns.
  },
};
```

## good

```js
p = {
  get name() {
    return "nicholas";
  },
};
```

## 参考:

- [no-async-promise-executor](https://eslint.org/docs/rules/no-async-promise-executor)
