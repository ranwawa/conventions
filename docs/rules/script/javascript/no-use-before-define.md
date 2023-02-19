# no-use-before-define

禁止出现未使用过的变量

### 为什么?

已声明的变量在代码里未被使用过，就像是由于不完整的重构而导致的遗漏错误。这样的变量增加了代码量，并且混淆读者。

### 错误示例

```js
// It checks variables you have defined as global
some_unused_var = 42;
var x;
// Write-only variables are not considered as used.
var y = 10;
y = 5;
// A read for a modification of itself is not considered as used.
var z = 0;
z = z + 1;
// By default, unused arguments cause warnings.
(function (foo) {
  return 5;
})();
```

### 正确示例

```js
var x = 10;
alert(x);

// foo is considered used here
myFunc(
  function foo() {
    // ...
  }.bind(this)
);

(function (foo) {
  return foo;
})();

var myFunc;
myFunc = setTimeout(function () {
  // myFunc is considered used
  myFunc();
}, 50);
```

### 参考

- [no-use-before-define](https://eslint.org/docs/rules/no-use-before-define)
