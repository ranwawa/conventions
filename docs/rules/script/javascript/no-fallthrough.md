# 禁止不必要的标签

## Why?

> 循环不包含嵌套循环或开关，则没有必要对循环进行标记。

## bad

```js
A: while (a) {
  break A;
}

B: for (let i = 0; i < 10; ++i) {
  break B;
}

C: switch (a) {
  case 0:
    break C;
}
```

## good

```js
while (a) {
  break;
}

for (let i = 0; i < 10; ++i) {
  break;
}

switch (a) {
  case 0:
    break;
}

A: {
  break A;
}

B: while (a) {
  while (b) {
    break B;
  }
}

C: switch (a) {
  case 0:
    while (b) {
      break C;
    }
    break;
}
```

## 参考:

- [no-fallthrough](https://eslint.org/docs/rules/no-fallthrough)
