# 禁止使用魔术数字

## Why?

> 魔术数字是在代码中多次出现的没有明确含义的数字。它最好由命名常量取代。

## bad

```js
var dutyFreePrice = 100,
  finalPrice = dutyFreePrice + dutyFreePrice * 0.25;
```

## good

```js
var TAX = 0.25;

var dutyFreePrice = 100,
  finalPrice = dutyFreePrice + dutyFreePrice * TAX;
```

## 参考:

- [no-multi-spaces](https://eslint.org/docs/rules/no-multi-spaces)
