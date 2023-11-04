# no-undef

禁止使用未声明的变量

### 为什么

很明显嘛,如果不小心使用了一个未声明的变量,运行时肯定会报错.

### 建议

如果你需要使用一些第三方注入的全局变量，可以在在配置文件的`globals`键中指定。

### 错误示例

```js
const bar = a + 520;
```

### 正确示例

```js
const a = 1314;
const bar = a + 520;
```

### 参考

- [no-undef](https://eslint.org/docs/rules/no-undef)
