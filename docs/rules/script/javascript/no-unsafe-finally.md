# no-unsafe-finally

禁止在finally代码块中使用流程控制语句

### 为什么

JavaScript会暂停try和catch块的控制流语句，直到finally块的执行结束。因此，当在finally中使用return、throw、break或continue时，try和catch内的控制流语句会被覆盖。

### 建议

在finally代码块中避免使用return、throw、break或continue语句。

### 错误示例

```js
const foo = function () {
  try {
    throw new Error('error');
  } catch (err) {
    return 'zhangshan';
  } finally {
    return 'lisi';
  }
};

foo(); // -> lisi
```

### 正确示例

```js
let foo = function () {
  try {
    throw new Error('error');
  } catch (err) {
    return 'zhangshan';
  } finally {
    console.log('wangwu');
  }
};

foo(); // -> zhangshan
```

### 参考

- [no-unsafe-finally](https://eslint.org/docs/rules/no-unsafe-finally)
