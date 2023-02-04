# 禁止对函数参数再赋值

## Why?

> 修改函数入参,如果其他地方有使用这个入参,会因为引用类型的问题而影响外部代码,可能会产生很难排查的 bug.请不要直接修改入参,如果确定副作用不会影响到其他地方函数入参可以使用 effect 开头的参数名

## bad

```js
function foo(param) {
  param.name = "ranwawa";
}
```

## good

```js
function foo(param) {
  const newParam = { ...param, name: "ranwawa" };
}

function foo2(effectParam) {
  effectParam.name = "ranwawa";
}
```

## 参考

- [no-param-reassign](https://eslint.org/docs/rules/no-param-reassign.html)
