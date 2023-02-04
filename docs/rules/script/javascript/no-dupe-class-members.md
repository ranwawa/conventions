# 禁止修改 const 声明的变量

## Why?

> 我们不能修改使用 const 关键字声明的变量。 它会引发一个运行时错误。

## bad

```js
const a = 0;
a = 1;
a += 1;
++a;
```

## good

```js
const a = 0;
console.log(a);

for (const a in [1, 2, 3]) {
  // `a` is re-defined (not modified) on each loop step.
  console.log(a);
}
for (const a of [1, 2, 3]) {
  // `a` is re-defined (not modified) on each loop step.
  console.log(a);
}
```

## 参考:

- [no-dupe-class-members](https://eslint.org/docs/rules/no-dupe-class-members)
