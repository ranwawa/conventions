# 禁止直接使用 alert

## Why?

> alert 被广泛认为是突兀的 UI 元素。

## bad

```js
alert("here!");
```

## good

```js
customAlert("Something happened!");
```

## 参考:

- [no-caller](https://eslint.org/docs/rules/no-caller)
