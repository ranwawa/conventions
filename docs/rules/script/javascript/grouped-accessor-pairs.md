# 使用 === 和 !== 代替 == 和 != 操作符

## Why?

> 消除非类型安全的相等操作符。

## bad

```js
foo == true;
typeof foo == "undefined";
```

## good

```js
foo === true;
typeof foo === "undefined";
```

## 参考:

- [grouped-accessor-pairs](https://eslint.org/docs/rules/grouped-accessor-pairs)
