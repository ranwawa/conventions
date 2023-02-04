# 要求 require() 出现在顶层模块作用域中

## Why?

> 虽然 require() 可以在代码的任何地方被调用，一些风格指南规定，它只能在模块顶层被调用，这样更容易识别依赖关系。

## bad

```js
// calling require() inside of a function is not allowed
function readFile(filename, callback) {
  var fs = require("fs");
  fs.readFile(filename, callback);
}

// conditional requires like this are also not allowed
if (DEBUG) {
  require("debug");
}

// a require() in a switch statement is also flagged
switch (x) {
  case "1":
    require("1");
    break;
}
```

## good

```js
// all these variations of require() are ok
require("x");
var y = require("y");
var z;
z = require("z").initialize();

// requiring a module and using it in a function is ok
var fs = require("fs");
function readFile(filename, callback) {
  fs.readFile(filename, callback);
}
```

## 参考:

- [handle-callback-err](https://eslint.org/docs/rules/handle-callback-err)
