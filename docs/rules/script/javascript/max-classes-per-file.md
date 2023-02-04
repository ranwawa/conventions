# for in 循环要用 if 语句过滤

## Why?

> 可能导致 for 循环中出现意想不到的情况。

## bad

```js
for (key in foo) {
  doSomething(key);
}
```

## good

```js
for (key in foo) {
  if (Object.prototype.hasOwnProperty.call(foo, key)) {
    doSomething(key);
  }
}
```

## 参考:

- [max-classes-per-file](https://eslint.org/docs/rules/max-classes-per-file)
