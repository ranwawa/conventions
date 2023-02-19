# vars-on-top

强制在 RegExp 上使用 u 标志

### 为什么?

使字符范围语法获得正确的行为。

### 错误示例

```js
const a = /aaa/;
```

### 正确示例

```js
const a = /aaa/u;
```

### 参考

- [vars-on-top](https://eslint.org/docs/rules/vars-on-top)
