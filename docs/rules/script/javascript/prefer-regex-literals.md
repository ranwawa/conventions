# 使用 Object.hasOwn()

## Why?

> 不允许使用 Object.prototype.hasOwnProperty.call()，而喜欢使用 Object.hasOwn()

## bad

```js
Object.prototype.hasOwnProperty.call(obj, "a");
```

## good

```js
Object.hasOwn(obj, "a");
```

## 参考:

- [prefer-regex-literals](https://eslint.org/docs/rules/prefer-regex-literals)
