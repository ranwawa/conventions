# 禁止在循环中 出现 await

## Why?

> 会使程序并没有充分利用 async/await 并行的好处。

## bad

```js
async function foo(things) {
  const results = [];
  for (const thing of things) {
    // Bad: each loop iteration is delayed until the entire asynchronous operation completes
    results.push(await bar(thing));
  }
  return baz(results);
}
```

## good

````js
async function foo(things) {
  const results = [];
  for (const thing of things) {
    ```

## good

```js: all asynchronous operations are immediately started.
    results.push(bar(thing));
  }
  // Now that all the asynchronous operations are running, here we wait until they all complete.
  return baz(await Promise.all(results));
}
````

## 参考:

- [no-compare-neg-zero](https://eslint.org/docs/rules/no-compare-neg-zero)
