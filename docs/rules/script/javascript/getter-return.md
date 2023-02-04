# 强制 “for” 循环中更新子句的计数器朝着正确的方向移动

## Why?

> 如果一个 for 循环的停止条件永远无法到达，比如，计数器在错误的方向上移动，将陷入无限循环。

## bad

```js
for (var i = 0; i < 10; i--) {}

for (var i = 10; i >= 0; i++) {}
```

## good

```js
for (var i = 0; i < 10; i++) {}
```

## 参考:

- [getter-return](https://eslint.org/docs/rules/getter-return)
