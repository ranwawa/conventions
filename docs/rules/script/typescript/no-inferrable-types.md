# 禁止将 this 赋值给其他变量

## Why?

> es6 里面这样做一般都是作用域没控制好,请使用箭头函数替换

## bad

```ts
const that = this;
function func() {
  that.doSomething();
}
```

## good

```ts
const func = () => {
  this.doSomething();
};
```

## 参考

- [@typescript-eslint/no-this-alias](https://typescript-eslint.io/rules/no-this-alias)
