# 禁用 parseInt() 和 Number.parseInt()，使用二进制，八进制和十六进制字面量

## Why?

> 由于 ES6 支持二进制，八进制，和十六进制字面量，所以该规则鼓励使用这些数字字面量而不是 parseInt()。

## bad

```js
parseInt("111110111", 2) === 503;
parseInt("767", 8) === 503;
parseInt("1F7", 16) === 503;
Number.parseInt("111110111", 2) === 503;
Number.parseInt("767", 8) === 503;
Number.parseInt("1F7", 16) === 503;
```

## good

```js
parseInt(1);
parseInt(1, 3);
Number.parseInt(1);
Number.parseInt(1, 3);

0b111110111 === 503;
0o767 === 503;
0x1f7 === 503;

a[parseInt](1, 2);

parseInt(foo);
parseInt(foo, 2);
Number.parseInt(foo);
Number.parseInt(foo, 2);
```

## 参考:

- [prefer-rest-params](https://eslint.org/docs/rules/prefer-rest-params)
