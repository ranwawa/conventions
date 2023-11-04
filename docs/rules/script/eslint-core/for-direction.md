# for-direction

禁止for循环中的计数器错误方向

### 为什么

for循环中如果计数器方向设置错误，会导致死循环bug。

### 建议

确保for循环中的计数器方向和停止条件匹配。

即小于的时候要++,大于的时候要--

### 错误示例

```js
for (let foo = 0; foo < 10; foo--) {}
```

### 正确示例

```js
for (let foo = 0; foo < 10; foo++) {}
```

### 参考

- [for-direction](https://eslint.org/docs/rules/for-direction)
