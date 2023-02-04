# 禁止在“ finally”块中使用控制流语句

## Why?

> 当在 finally 中使用 return、throw、break 或 continue 时，try 和 catch 内部的控制流语句将被覆盖，这被认为是意外行为。

## bad

```js
let foo = function () {
  try {
    return 1;
  } catch (err) {
    return 2;
  } finally {
    return 3;
  }
};
```

## good

```js
let foo = function () {
  try {
    return 1;
  } catch (err) {
    return 2;
  } finally {
    console.log("hola!");
  }
};
```

## 参考:

- [no-unsafe-negation](https://eslint.org/docs/rules/no-unsafe-negation)
