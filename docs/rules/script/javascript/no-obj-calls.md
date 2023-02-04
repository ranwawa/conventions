# 禁止使用字符类语法中由多个代码点组成的字符

## Why?

> Unicode 包含由多个编码点组成的字符。RegExp 字符类语法(/[abc]/)不能处理由多个代码点构成的字符;这些字符将分解为每个代码点。

## bad

```js
/^[👍]$/;
```

## good

```js
/^[👍]$/u;
```

## 参考:

- [no-obj-calls](https://eslint.org/docs/rules/no-obj-calls)
