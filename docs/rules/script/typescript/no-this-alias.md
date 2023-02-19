# no-this-alias

no-this-alias

禁止将 this 赋值给其他变量

### 为什么?

es6 里面这样做一般都是作用域没控制好,请使用箭头函数替换

### 错误示例

```ts
const that = this;
function func() {
  that.doSomething();
}
```

### 正确示例

```ts
const func = () ={
  this.doSomething();
};
```

## 参考

- [@typescript-eslint/no-this-alias](https://typescript-eslint.io/rules/no-this-alias)
