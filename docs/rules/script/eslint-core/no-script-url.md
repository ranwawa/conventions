# no-script-url

禁止在URL中执行js代码

### 为什么

传递给`javascript:`URLs的代码必须由浏览器解析和评估，就像处理`eval`一样。

### 建议

如果是想实现点击链接无反应,可使用`####`替代

如果是要执行js逻辑,可提出来在前面执行

### 错误示例

```js
window.location.href = 'javascript:void(0)';
```

### 确实示例

```js
window.location.href = '####';
```

### 参考

- [no-script-url](https://eslint.org/docs/rules/no-script-url)
