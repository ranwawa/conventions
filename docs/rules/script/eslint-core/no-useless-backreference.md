# no-useless-backreference

禁止无效的正则表达式反向引用

### 为什么

在JavaScript的正则表达式中，定义一个反向引用到属于模式的另一个可选部分的组，或者定义一个反向引用到出现在反向引用之后的组，或者定义一个反向引用到包含该反向引用的组，或者定义一个反向引用到位于负向前瞻中的组，这些都是语法上有效的。然而，根据规范，无论反向引用和组出现在哪种上下文中，这些情况下的反向引用总是只匹配零长度（空字符串）。

总是成功匹配零长度且不能匹配其他任何东西的反向引用是无用的。它们基本上被忽略了，可以在不改变正则表达式行为的情况下被移除。

无效的反向引用可能是代码中的错误。它通常表示正则表达式并未按照预期工作。

### 建议

如果反向引用总是匹配零长度，就干掉它。

### 错误示例

```js
/^(?:(a)|\1b)$/; // reference to (a) into another alternative

/^(?:(a)|b(?:c|\1))$/; // reference to (a) into another alternative

/^(?:a|b(?:(c)|\1))$/; // reference to (c) into another alternative

/\1(a)/; // forward reference to (a)

RegExp('(a)\\2(b)'); // forward reference to (b)

/(?:a)(b)\2(c)/; // forward reference to (c)

/\k<foo>(?<foo>a)/; // forward reference to (?<foo>a)

/(?<=(a)\1)b/; // backward reference to (a) from within the same lookbehind

/(?<!(a)\1)b/; // backward reference to (a) from within the same lookbehind

new RegExp('(\\1)'); // nested reference to (\1)

/^((a)\1)$/; // nested reference to ((a)\1)

/a(?<foo>(.)b\1)/; // nested reference to (?<foo>(.)b\1)

/a(?!(b)).\1/; // reference to (b) into a negative lookahead

/(?<!(a))b\1/; // reference to (a) into a negative lookbehind
```

### 正确示例

```js
/^(?:(a)|(b)\2)$/; // reference to (b)

/(a)\1/; // reference to (a)

RegExp('(a)\\1(b)'); // reference to (a)

/(a)(b)\2(c)/; // reference to (b)

/(?<foo>a)\k<foo>/; // reference to (?<foo>a)

/(?<=\1(a))b/; // reference to (a), correctly before the group as they're in the same lookbehind

/(?<=(a))b\1/; // reference to (a), correctly after the group as the backreference isn't in the lookbehind

new RegExp('(.)\\1'); // reference to (.)

/^(?:(a)\1)$/; // reference to (a)

/^((a)\2)$/; // reference to (a)

/a(?<foo>(.)b\2)/; // reference to (.)

/a(?!(b|c)\1)./; // reference to (b|c), correct as it's from within the same negative lookahead

/(?<!\1(a))b/; // reference to (a), correct as it's from within the same negative lookbehind
```

### 参考

- [no-useless-backreference](https://eslint.org/docs/rules/no-useless-backreference)
