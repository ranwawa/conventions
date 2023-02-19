# no-fallthrough

禁止不必要的标签

### 为什么?

循环不包含嵌套循环或开关，则没有必要对循环进行标记。

### 错误示例

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

### 正确示例

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

### 参考

- [no-fallthrough](https://eslint.org/docs/rules/no-fallthrough)
