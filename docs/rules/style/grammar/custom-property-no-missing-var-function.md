# 必须使用 var 包裹自定义变量

## Why?

> scss,less 等预处理器用多了容易忘记输入 var 函数,这是个明显的语法错误.请补上.

## bad

```css
:root {
  --foo: red;
}
a {
  color: --foo;
}
```

## good

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
