# 强制 typeof 表达式与有效字符串进行比较

## Why?

> 强制 typeof 表达式与有效的字符串文字进行比较。

## bad

```js
typeof foo === "strnig";
typeof foo == "undefimed";
typeof bar != "nunber";
typeof bar !== "fucntion";
```

## good

```js
typeof foo === "string";
typeof bar == "undefined";
typeof foo === baz;
typeof bar === typeof qux;
```

## 参考:

- [arrow-body-style](https://eslint.org/docs/rules/arrow-body-style)
