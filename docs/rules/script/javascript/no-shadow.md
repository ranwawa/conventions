# 禁用特定的全局变量

## Why?

> 如果你通过启用一个环境想允许使用一组全局变量，但想禁用其中的一部分，那么该规则会很有用。

## bad

```js
function onClick() {
  console.log(event);
}
fdescribe("foo", function () {});
```

## good

```js
import event from "event-module";
var event = 1;
```

## 参考:

- [no-shadow](https://eslint.org/docs/rules/no-shadow)
