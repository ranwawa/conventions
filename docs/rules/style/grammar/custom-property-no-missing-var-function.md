# custom-property-no-missing-var-function

必须使用 var 包裹自定义变量

### 为什么?

scss,less 等预处理器用多了容易忘记输入 var 函数,这是个明显的语法错误.请补上.

### 错误示例

```css
:root {
  --foo: red;
}
a {
  color: --foo;
}
```

### 正确示例

```css
:root {
  --foo: red;
}
a {
  color: var(--foo);
}
```

## 参考

- [custom-property-no-missing-var-function](https://stylelint.io/user-guide/rules/list/custom-property-no-missing-var-function)
