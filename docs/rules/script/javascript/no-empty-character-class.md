# 禁止空块语句

## Why?

> 空块语句在阅读代码时会造成混淆。

## bad

```js
if (foo) {
}
```

## good

```js
if (foo) {
  // empty
}
```

## 参考:

- [no-empty-character-class](https://eslint.org/docs/rules/no-empty-character-class)
