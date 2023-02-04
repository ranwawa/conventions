# 禁止在正则表达式中使用多个空格

## Why?

> 使用正则表达式最容易出错的事情之一是使用多个空格。

## bad

```js
var re = /foo   bar/;
var re = new RegExp("foo   bar");
```

## good

```js
var re = /foo {3}bar/;
var re = new RegExp("foo {3}bar");
```

## 参考:

- [no-setter-return](https://eslint.org/docs/rules/no-setter-return)
