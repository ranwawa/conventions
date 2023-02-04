# 禁止在正则表达式中使用无用的反向引用

## Why?

> 在 JavaScript 正则表达式中，定义一个对属于该模式另一个可选部分的组的反向引用是语法上有效的，一个对出现在反向引用之后的组的反向引用，一个对包含该反向引用的组的反向引用，或者一个对处于负向查找范围内的组的反向引用。

## bad

```js
RegExp("(a)\\2(b)"); // forward reference to (b)
/\1(a)/; // forward reference to (a)
```

## good

```js
/^(?:(a)|(b)\2)$/; // reference to (b)
/(a)\1/; // reference to (a)
```

## 参考:

- [no-negated-in-lhs](https://eslint.org/docs/rules/no-negated-in-lhs)
