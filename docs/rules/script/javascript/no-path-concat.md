# no-path-concat

禁止在Node.js中使用字符串拼接路径

### 为什么

在Node.js中，`__dirname`和`__filename`全局变量分别包含当前执行脚本文件的目录路径和文件路径。新版本已经废弃了这两个全局变量。

### 建议

使用`path.join()`或`path.resolve()`替代。

### 错误示例

```js
const fullPath = __dirname + '/foo.js';
```

### 正确示例

```js
const fullPath = path.join(__dirname, 'foo.js');
```

### 参考

- [no-path-concat](https://eslint.org/docs/rules/no-path-concat)
