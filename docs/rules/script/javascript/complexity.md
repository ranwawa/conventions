# 禁止引用其它块级作用域声明的 var 变量

## Why?

> 变量在哪个作用域声明,就只能在哪个作用域使用.因为 var 声明的变量会有作用域提升,所以可以跨块级作用域进行引用,但本规范禁止这样做.

## bad

```js
function doIf() {
  if (true) {
    var build = true;
  }

  console.log(build);
}
```

## good

```js
function doIf() {
  var build;

  if (true) {
    build = true;
  }

  console.log(build);
}
```

## 参考:

- [complexity](https://eslint.org/docs/rules/complexity)
