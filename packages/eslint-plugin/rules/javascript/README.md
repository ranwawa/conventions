<!--
 * @Author: LiuchangHao
 * @Description: javascript规则说明文档
 * @Date: 2022-08-03 13:39:37
 * @LastEditTime: 2022-10-02 19:33:56
-->

# javascript

## 对象和类中强制成对使用 getter 和 setter 方法

Why?

> 通常只设置 setter 方法，这是一个常见错误，如不定义 getter 方法，就没有读取器，就不能读取属性，最终不会被使用

bad

```js
let o = {
  set a(value) {
    this.val = value;
  },
};
```

good

```js
let o = {
  get a() {
    return this.val;
  },
  set a(value) {
    this.val = value;
  },
};
```

## 数组回调函数必须有返回值

Why?

> 数组上许多函数(如 map, filter)的回调函数都需要返回值,如果没有返回值很可能会导致结果异常

bad

```js
// ['张三', '李四', '王五'] -> [{ name: '张三' }, { name: '李四' }, { name: '王五' }]
const names = ['张三', '李四', '王五'];

names.map((name) => {
  const newName = { name };
});
```

good

```js
names.map((name) => {
  return { name };
});
```

## 强制把变量的使用限制在其定义的作用域范围内

Why?

> 用来减少变量跨作用域使用情况的发生,可避免因变量声明提升而产生的 bug。

bad

```js
function doIfElse() {
  if (true) {
    var build = true;
  } else {
    var build = false;
  }
}
```

good

```js
function doIfElse() {
  var build;

  if (true) {
    build = true;
  } else {
    build = false;
  }
}
```

## 限制圈复杂度

Why?

> 通过在项目中设置一个圈复杂度阈值来控制代码的复杂度,它将会在圈复杂度超过配置的阈值时发出警告 (默认是 20)

bad

```js
// 最大阈值为 2 代码示例

function a(x) {
  if (true) {
    return x;
  } else if (false) {
    return x + 1;
  } else {
    return 4; // 3rd path
  }
}
```

good

```js
function a(x) {
  if (true) {
    return x;
  } else {
    return 4;
  }
}
```

## 类函数必须使用 this,或者使用静态函数

Why?

> 静态函数不用实例化可以直接调用,去掉了实例化步骤可以减少代码量和提升运行时性能

bad

```js
class Bad {
  sayHi() {
    console.log('hi');
  }
}
const bad = new Bad();
bad.sayHi();
```

good

```js
class Good {
  static sayHi() {
    console.log('hi');
  }
}
Good.sayHi();
```

## 函数返回语句始终或从不指定值

Why?

> JavaScript 允许在一个函数中不同的代码路径返回不同类的值

bad

```js
function doSomething(condition) {
  if (condition) {
    return true;
  } else {
    return;
  }
}
```

good

```js
function doSomething(condition) {
  if (condition) {
    return true;
  } else {
    return false;
  }
}
```

## 控件语句使用一致的大括号样式

Why?

> 当一个块只包含一条语句时，JavaScript 允许省略花括号，但会导致错误并降低代码的清晰度。但我们定的规则是：允许使用不带大括号的单行 if、else if、else、for、while 或 do，同时对其他实例仍然强制使用花括号。

bad

```js
if (foo) doSomething();
else doSomethingElse();
```

good

```js
if (foo) foo++;
else doSomething();
```

## switch 语句中必须定义 default 分支

Why?

> 可能会忘记定义默认分支而导致程序发生错误。

bad

```js
switch (a) {
  case 1:
    /* code */
    break;
}
```

good

```js
switch (a) {
  case 1:
    /* code */
    break;

  default:
    /* code */
    break;
}
```

## 强制 switch 语句中的默认子句位于最后

Why?

> 如果一个 switch 语句应该有一个 default 子句，那最好将它定义为最后一个子句。

bad

```js
switch (foo) {
  default:
    bar();
    break;
  case 'a':
    baz();
    break;
}
```

good

```js
switch (foo) {
  case 'a':
    baz();
    break;
  default:
    bar();
    break;
}
```

## 强制默认参数放在最后

Why?

> 将默认形参置于最后允许函数调用省略可选的尾部参数。

bad

```js
function f(a = 0, b) {}
```

good

```js
function f(a, b = 0) {}
```

## 使用点表示法访问属性

Why?

> 在 JavaScript 中，可以使用点表示法(foo.bar)或方括号表示法(foo["bar"])访问属性。但是，点表示法通常是首选的，因为它更容易阅读，更少冗长，并且与激进的 JavaScript 最小化器一起工作更好。

bad

```js
var x = foo['bar'];
```

good

```js
var x = foo.bar;
```

## 要求点操作符和属性放在同一行

Why?

> 防止既在点号操作之前也在之后使用换行符。

bad

```js
var foo = object.property;
```

good

```js
var foo = object.property;
var bar = object.property;
```

## 使用 === 和 !== 代替 == 和 != 操作符

Why?

> 消除非类型安全的相等操作符。

bad

```js
foo == true;
typeof foo == 'undefined';
```

good

```js
foo === true;
typeof foo === 'undefined';
```

## 相同属性的访问器函数进行分组定义

Why?

> 更直观，逻辑更清晰不容易出错。

bad

```js
var foo = {
  get a() {
    return this.val;
  },
  b: 1,
  set a(value) {
    this.val = value;
  },
};
```

good

```js
var foo = {
  get a() {
    return this.val;
  },
  set a(value) {
    this.val = value;
  },
  b: 1,
};
```

## for in 循环要用 if 语句过滤

Why?

> 可能导致 for 循环中出现意想不到的情况。

bad

```js
for (key in foo) {
  doSomething(key);
}
```

good

```js
for (key in foo) {
  if (Object.prototype.hasOwnProperty.call(foo, key)) {
    doSomething(key);
  }
}
```

## 限制每个文件包含最大数量的类

Why?

> 包含多个类的文件通常会导致代码库的导航性和结构化较差。

bad

```js
class Foo {}
class Bar {}
```

good

```js
class Foo {}
```

## 禁止直接使用 alert

Why?

> alert 被广泛认为是突兀的 UI 元素。

bad

```js
alert('here!');
```

good

```js
customAlert('Something happened!');
```

## 禁用 caller 或 callee(no-caller)

Why?

> 禁止使用 arguments.caller 和 arguments.callee 来阻止使用不推荐的和次优化的代码。

bad

```js
function foo(n) {
  if (n <= 0) {
    return;
  }
  arguments.callee(n - 1);
}
```

good

```js
function foo(n) {
  if (n <= 0) {
    return;
  }
  foo(n - 1);
}
```

## 禁止在 case 或 default 子句中声明词法

Why?

> 词法声明在整个 switch 语句块中是可见的，但是它只有在运行到它定义的 case 语句时，才会进行初始化操作。

bad

```js
switch (foo) {
  case 1:
    let x = 1;
    break;
  case 2:
    const y = 2;
    break;
  case 3:
    function f() {}
    break;
  default:
    class C {}
}
```

good

```js
switch (foo) {
  // The following case clauses are wrapped into blocks using brackets
  case 1: {
    let x = 1;
    break;
  }
  case 2: {
    const y = 2;
    break;
  }
  case 3: {
    function f() {}
    break;
  }
  case 4:
    // Declarations using var without brackets are valid due to function-scope hoisting
    var z = 4;
    break;
  default: {
    class C {}
  }
}
```

## 禁止从构造函数中返回值

Why?

> 在 JavaScript 中，在类的构造函数中返回值是错误的，它会由于不熟悉语言或复制粘贴而产生错误。

bad

```js
class A {
  constructor(a) {
    this.a = a;
    return a;
  }
}
```

good

```js
class C {
  constructor(c) {
    this.c = c;
  }
}
```

## 禁止使用看起来像除法的正则表达式

Why?

> 使用除法操作符对理解阅读 JavaScript 代码有歧义。

bad

```js
function bar() {
  return /=foo/;
}
```

good

```js
function bar() {
  return /[=]foo/;
}
```

## 禁止 if 语句中 return 语句后的 else 块

Why?

> 更好的理解阅读 JavaScript 代码。

bad

```js
function foo() {
  if (error) {
    return 'It failed';
  } else if (loading) {
    return "It's still loading";
  }
}
```

good

```js
function foo() {
  if (error) {
    return 'It failed';
  }

  if (loading) {
    return "It's still loading";
  }
}
```

## 不允许空函数

Why?

> 空函数会降低可读性，箭头函数、普通函数、类方法除外。

bad

```js
function* foo() {}
```

good

```js
function* foo() {
  // do nothing.
}
```

## 禁止使用空解构模式

Why?

> 当使用解构赋值时，可能创建了一个不起作用的模式，可能会产生未知错误。

bad

```js
var {} = foo;
```

good

```js
var { a = {} } = foo;
```

## 禁止与 null 进行比较

Why?

> 与 null 进行比较时，null 其本身以及 null 与 undefined 比较结果都为 true。

bad

```js
if (foo == null) {
  bar();
}
```

good

```js
if (foo === null) {
  bar();
}
```

## 禁用 eval()

Why?

> JavaScript 中的 eval()函数是有潜在危险的，而且经常被误用，还可能使程序受到不同的注入攻击。

bad

```js
window.eval('var a = 0');
```

good

```js
var obj = { x: 'foo' },
  key = 'x',
  value = obj[key];

class A {
  foo() {
    // This is a user-defined method.
    this.eval('var a = 0');
  }

  eval() {}
}
```

## 禁止扩展本机类型

Why?

> 可以扩展任何对象，包括内置对象或“原生”对象。

bad

```js
Object.prototype.a = 'a';
Object.defineProperty(Array.prototype, 'times', { value: 999 });
```

good

```js
Object.prototype.a = 'a';
```

## 禁止对.bind()的不必要调用

Why?

> 避免不必要地使用 bind()。

bad

```js
var x = function () {
  foo();
}.bind(bar);

var x = (() => {
  foo();
}).bind(bar);

var x = (() => {
  this.foo();
}).bind(bar);

var x = function () {
  (function () {
    this.foo();
  })();
}.bind(bar);

var x = function () {
  function foo() {
    this.bar();
  }
}.bind(baz);
```

good

```js
var x = function () {
  this.foo();
}.bind(bar);

var x = function (a) {
  return a + 1;
}.bind(foo, bar);
```

## 禁止不必要的标签

Why?

> 循环不包含嵌套循环或开关，则没有必要对循环进行标记。

bad

```js
A: while (a) {
  break A;
}

B: for (let i = 0; i < 10; ++i) {
  break B;
}

C: switch (a) {
  case 0:
    break C;
}
```

good

```js
while (a) {
  break;
}

for (let i = 0; i < 10; ++i) {
  break;
}

switch (a) {
  case 0:
    break;
}

A: {
  break A;
}

B: while (a) {
  while (b) {
    break B;
  }
}

C: switch (a) {
  case 0:
    while (b) {
      break C;
    }
    break;
}
```

## 禁止 case 语句的失败

Why?

> JavaScript 中的 switch 语句是该语言中最容易出错的结构之一，这在一定程度上是因为它能够从一种情况“穿越”到另一种情况。

bad

```js
switch (foo) {
  case 1:
    doSomething();

  case 2:
    doSomething();
}
```

good

```js
switch (foo) {
  case 1: {
    doSomething();
    // falls through
  }

  case 2: {
    doSomethingElse();
  }
}
```

## 禁止数字字面值的前导或尾随小数点

Why?

> JavaScript 中的 Float 值包含一个小数点，并且不要求小数点前面或后面必须有一个数字。

bad

```js
var num = 0.5;
```

good

```js
var num = 0.5;
```

## 禁止对对象或只读全局变量赋值

Why?

> 可能会导致失去对重要功能的访问。

bad

```js
Object = null;
undefined = 1;
```

good

```js
a = 1;
var b = 1;
b = 2;
```

## 禁止对对象或只读全局变量赋值

Why?

> 可能会导致失去对重要功能的访问。

bad

```js
Object = null;
undefined = 1;
```

good

```js
a = 1;
var b = 1;
b = 2;
```

## 禁止使用较短的符号实现类型转换

Why?

> 为了更好阅读和理解。

bad

```js
var n = +foo;
var n = 1 * foo;
```

good

```js
var n = Number(foo);
var n = parseFloat(foo);
var n = parseInt(foo, 10);
```

## 禁止在全局作用域中声明

Why?

> 避免使用脚本局部变量“污染”全局作用域。

bad

```js
var foo = 1;
function bar() {}
```

good

```js
window.foo = 1;
window.bar = function () {};
```

## 禁止使用 eval()类方法

Why?

> 这样做会涉及到安全性和性能问题。

bad

```js
setTimeout("alert('Hi!');", 100);
```

good

```js
setTimeout(function () {
  alert('Hi!');
}, 100);
```

## 禁止在 this 的值未定义的上下文中使用 this

Why?

> 在严格模式下，类或类类对象之外的这个关键字可能是未定义的，并引发 TypeError。

bad

```js
'use strict';
(function () {
  this.a = 0;
  baz(() => this);
})();
```

good

```js
('use strict');
this.a = 0;
baz(() => this);
```

## 禁止使用**iterator**属性

Why?

> JavaScript 的 for in 和 for 每种构造与**iterator**属性创建的自定义迭代器兼容，可以将其取代。

bad

```js
foo.__iterator__ = function () {};
```

good

```js
var __iterator__ = foo; // Not using the `__iterator__` property.
```

## 禁止标记语句

Why?

> 在 JavaScript 中，abel 语句与 break 和 continue 一起使用，以控制多个循环的流。

bad

```js
label: while (true) {
  // ...
}
```

good

```js
var f = {
  label: 'foo',
}; // Not using the `__iterator__` property.
```

## 禁止不必要的嵌套块

Why?

> 在 ES6 之前，由花括号分隔的独立代码块不会创建新的作用域，也没有任何用处。

bad

```js
if (foo) {
  bar();
  {
    baz();
  }
}
```

good

```js
if (foo) {
  if (bar) {
    baz();
  }
}
```

## 禁止循环中存在函数

Why?

> 由于函数在循环中创建闭包的方式不同，在循环中编写函数往往会导致错误。

bad

```js
for (var i = 10; i; i--) {
  (function () {
    return i;
  })();
}
```

good

```js
var a = function () {};

for (var i = 10; i; i--) {
  a();
}
```

## 禁止使用魔术数字

Why?

> 魔术数字是在代码中多次出现的没有明确含义的数字。它最好由命名常量取代。

bad

```js
var dutyFreePrice = 100,
  finalPrice = dutyFreePrice + dutyFreePrice * 0.25;
```

good

```js
var TAX = 0.25;

var dutyFreePrice = 100,
  finalPrice = dutyFreePrice + dutyFreePrice * TAX;
```

## 禁止出现多个空格

Why?

> 在某行中，出现多个空格而且不是用来作缩进的，通常是个错误。

bad

```js
var a = 1;
if (foo === 'bar') {
}
```

good

```js
var a = 1;
if (foo === 'bar') {
}
```

## 禁止多行字符串

Why?

> 在 JavaScript 中，可以在新行之前使用斜线创建多行字符串。

bad

```js
var x =
  'Line 1 \
  Line 2';
```

good

```js
var x = 'Line 1\n' + 'Line 2';
```

## 禁止使用 new 以避免产生副作用

Why?

> 对构造函数使用 new 的目的通常是创建一个特定类型的对象并且将该对象存储在变量中。

bad

```js
new Thing();
```

good

```js
var thing = new Thing();
Thing();
```

## 禁用 Function 构造函数

Why?

> 调试和阅读这种类型的函数比较困难。

bad

```js
var x = new Function('a', 'b', 'return a + b');
var x = Function('a', 'b', 'return a + b');
```

good

```js
var x = function (a, b) {
  return a + b;
};
```

## 禁止原始包装实例

Why?

> 会对 JavaScript 产生破坏性的问题。

bad

```js
var stringObject = new String('Hello world');
var numberObject = new Number(33);
var booleanObject = new Boolean(false);

var stringObject = new String();
var numberObject = new Number();
var booleanObject = new Boolean();
```

good

```js
var text = String(someValue);
var num = Number(someValue);

var object = new MyString();
```

## 禁止在字符串字面量中使用\8 和\9 转义序列

Why?

> 在大多数 JavaScript 引擎中，字符串字面值中的\8 和\9 转义序列是允许的，并被视为“无用的”转义。

bad

```js
var foo = 'w8less';
var bar = 'December 19';
```

good

```js
var foo = 'w8less';
var bar = 'December 19';
```

## 禁用八进制字面量

Why?

> 在 JavaScript 代码中，八进制的前导数字零作为其标示一致是导致混淆和错误的来源。

bad

```js
var num = 071;
var result = 5 + 07;
```

good

```js
var num = '071';
```

## 禁止在字符串字面量中使用八进制转义序列

Why?

> ECMAScript 规范第 5 版起，字符串字面量中的八进制转义序列已经被弃用。不应该被使用。应该使用 Unicode 转义序列。

bad

```js
var foo = 'Copyright \251';
```

good

```js
var foo = 'Copyright \u00A9'; // unicode
var foo = 'Copyright \xA9'; // hexadecimal
```

## 禁止对函数参数再赋值

Why?

> 修改函数入参,如果其他地方有使用这个入参,会因为引用类型的问题而影响外部代码,可能会产生很难排查的 bug.请不要直接修改入参,如果确定副作用不会影响到其他地方函数入参可以使用 effect 开头的参数名

bad

```js
function foo(param) {
  param.name = 'ranwawa';
}
```

good

```js
function foo(param) {
  const newParam = { ...param, name: 'ranwawa' };
}

function foo2(effectParam) {
  effectParam.name = 'ranwawa';
}
```

参考

- [no-param-reassign](https://eslint.org/docs/rules/no-param-reassign.html)

## 禁用**proto**

Why?

> **proto** 属性在 ECMAScript 3.1 中已经被弃用，并且不应该在代码中使用。使用 Object.getPrototypeOf 和 Object.setPrototypeOf 代替。

bad

```js
var a = obj.__proto__;
```

good

```js
var a = Object.getPrototypeOf(obj);
```

## 禁止重新声明变量

Why?

> 在 JavaScript 中，使用 var 可以对同一个变量再次声明。这会使变量实际声明和定义的位置混乱不堪。

bad

```js
var a = 3;
var a = 10;
```

good

```js
var a = 3;
// ...
a = 10;
```

## 禁止使用对象的某些属性

Why?

> 在代码库中，对象的某些属性可能被禁止使用。

bad

```js
var example = disallowedObjectName.disallowedPropertyName;
disallowedObjectName.disallowedPropertyName();
```

good

```js
var example = disallowedObjectName.somePropertyName;
allowedObjectName.disallowedPropertyName();
```

## 禁止在返回语句中赋值

Why?

> 在 JavaScript 中一个有趣有时有令人感到困惑的是几乎可以在任何位置进行赋值操作。

bad

```js
function doSomething() {
  return (foo = bar + 2);
}

function doSomething() {
  return (foo += 2);
}

function doSomething() {
  return (foo = bar + 2);
}
```

good

```js
function doSomething() {
  return foo == bar + 2;
}

function doSomething() {
  return foo === bar + 2;
}
```

## 禁用不必要的 return await

Why?

> async function 的返回值总是封装在 Promise.resolve，return await 实际上并没有做任何事情，只是在 Promise resolve 或 reject 之前增加了额外的时间。

bad

```js
async function foo() {
  return await bar();
}
```

good

```js
async function foo() {
  try {
    return await bar();
  } catch (error) {}
}
```

## 禁用 Script URL

Why?

> 链接中的代码必须由浏览器解析和赋值，其处理方式与 eval 一样。

bad

```js
async function foo() {
  return await bar();
}
```

good

```js
async function foo() {
  try {
    return await bar();
  } catch (error) {}
}
```

## 禁止自身赋值

Why?

> 自身赋值不起任何作用，可能是由于不完整的重构造成的错误。

bad

```js
foo = foo;
[a, b] = [a, b];
[a, ...b] = [x, ...b];
({ a, b } = { a, x });
```

good

```js
obj.a = obj.a;
obj.a.b = obj.a.b;
obj['a'] = obj['a'];
obj[a] = obj[a];
```

## 禁止自身比较

Why?

> 变量与其自身进行比较通常来说是一个错误，要么是打字错误要么是重构错误。它都会给读者造成困扰并且可能会引入运行错误。

bad

```js
var x = 10;
if (x === x) {
  x = 20;
}
```

good

```js
if (x === 10) {
  x = 20;
}
```

## 不允许使用逗号操作符

Why?

> 它从左到右计算每一个操作数并且返回最后一个操作数的值。然而，这往往掩盖了它的副作用，它的使用经常会发生事故。

bad

```js
(foo = doSomething()), val;
0, eval('doSomething();');
do {} while ((doSomething(), !!test));
```

good

```js
foo = (doSomething(), val);
(0, eval)('doSomething();');
do {} while ((doSomething(), !!test));
```

## 限制可以被抛出的异常

Why?

> 使用 Error 对象最基本的好处是它们能自动地追踪到异常产生和起源的地方。

bad

```js
throw 'error';
```

good

```js
throw new Error();
```

## 禁用一成不变的循环条件

Why?

> 循环条件中的变量在循环中是要经常改变的。如果不是这样，那么可能是个错误。

bad

```js
while (node) {
  doSomething(node);
}
node = other;

for (var j = 0; j < items.length; ++i) {
  doSomething(items[j]);
}

while (node !== root) {
  doSomething(node);
}
```

good

```js
while (node) {
  doSomething(node);
  node = node.parent;
}

for (var j = 0; j < items.length; ++j) {
  doSomething(items[j]);
}

// OK, the result of this binary expression is changed in this loop.
while (node !== root) {
  doSomething(node);
  node = node.parent;
}
```

## 禁止未使用过的表达式

Why?

> 对程序状态没有影响的未使用表达式往往是个逻辑错误。

bad

```js
0;
if (0) 0;
{
  0;
}
f(0), {};
a && b();
a, b();
(c = a), b;
injectGlobal`body{ color: red; }`;
```

good

```js
{
} // In this context, this is a block statement, not an object literal
{
  myLabel: someVar;
} // In this context, this is a block statement with a label and expression, not an object literal
function namedFunctionDeclaration() {}
(function aGenuineIIFE() {})();
f();
a = 0;
new C();
delete a.b;
void a;
```

## 禁用未使用过的标签

Why?

> 只声明却没有使用的标签可能是由于不完全的重构造成的错误。

bad

```js
A: var foo = 0;

B: {
  foo();
}

C: for (let i = 0; i < 10; ++i) {
  foo();
}
```

good

```js
A: {
  if (foo()) {
    break A;
  }
  bar();
}

B: for (let i = 0; i < 10; ++i) {
  if (foo()) {
    break B;
  }
  bar();
}
```

## 禁用不必要的 .call() 和 .apply()

Why?

> 函数的调用可以写成 Function.prototype.call() 和 Function.prototype.apply()，但是 Function.prototype.call() 和 Function.prototype.apply() 比正常的函数调用效率低。

bad

```js
foo.call(undefined, 1, 2, 3);
foo.apply(undefined, [1, 2, 3]);
```

good

```js
foo.call(obj, 1, 2, 3);
foo.apply(obj, [1, 2, 3]);
```

## 禁止不必要的 catch 子句

Why?

> 冗余子句可能会导致混乱和代码膨胀。

bad

```js
try {
  doSomethingThatMightThrow();
} catch (e) {
  throw e;
}
```

good

```js
try {
  doSomethingThatMightThrow();
} catch (e) {
  doSomethingBeforeRethrow();
  throw e;
}
```

## 禁止没有必要的字符拼接

Why?

> 把两个字符拼接在一起是没有必要的。

bad

```js
var a = `some` + `string`;
```

good

```js
var c = a + b;
```

## 禁用不必要的转义

Why?

> 对字符串、模板字面量和正则表达式中的常规字符进行转义，不会对结果产生任何影响。

bad

```js
"\'";
'\"';
'\#';
```

good

```js
"\"";
'\'';
'\x12';
```

## 禁止多余的 return 语句

Why?

> 语句是多余的，并且在函数执行过程中不会产生效果。这可能令人困惑，因此最好禁止使用这些多余的语句。

bad

```js
function foo() {
  return;
}
```

good

```js
function foo() {
  return 5;
}
```

## 禁止使用 void 操作符

Why?

> 使用 void 操作符的通常情况是要得到一个单纯的 undefined 值，因为之前的 ES5 undefined 值是可变的。

bad

```js
var foo = void bar();
function baz() {
  return void 0;
}
```

good

```js
void foo;
void someFunction();
```

## 禁用警告注释

Why?

> 开发者经常给代码添加注释，标明哪些没有完成或需要审查。

bad

```js
function callback(err, results) {
  if (err) {
    console.error(err);
    return;
  }
  // TODO
}
```

good

```js
function callback(err, results) {
  if (err) {
    console.error(err);
    return;
  }
  // NOT READY FOR PRIME TIME
  // but too bad, it is not a predefined warning term
}
```

## 禁用 with 语句

Why?

> with 是潜在的问题，因为它会在当前的域中增加对象成员，使得区分实际块中的变量指的是什么变的不可能。

bad

```js
with (point) {
  r = Math.sqrt(x * x + y * y); // is r a member of point?
}
```

good

```js
const r = ({ x, y }) => Math.sqrt(x * x + y * y);
```

## 要求使用 Error 对象作为 Promise 拒绝的原因

Why?

> 在 Promise 中只传递内置的 Error 对象实例给 reject() 函数作为自定义错误，被认为是个很好的实践。

bad

```js
Promise.reject('something bad happened');
```

good

```js
Promise.reject(new Error('something bad happened'));
```

## 建议在正则表达式中使用命名捕获组

Why?

> 命名捕获组可以用于正则表达式中，这可以提高正则表达式的可读性。

bad

```js
const foo = /(ba[rz])/;
```

good

```js
const foo = /(?<id>ba[rz])/;
```

## 使用 Object.hasOwn()

Why?

> 不允许使用 Object.prototype.hasOwnProperty.call()，而喜欢使用 Object.hasOwn()

bad

```js
Object.prototype.hasOwnProperty.call(obj, 'a');
```

good

```js
Object.hasOwn(obj, 'a');
```

## 禁止使用 RegExp 构造函数

Why?

> 禁止使用 RegExp 构造函数，而使用正则表达式字面量

bad

```js
new RegExp('abc');
```

good

```js
/abc/;
new RegExp(pattern);
RegExp('abc', flags);
```

## 要求必须有基数

Why?

> 在 parseInt()中始终使用基数以消除意想不到的后果。

bad

```js
var num = parseInt('071');
```

good

```js
var num = parseInt('071', 10);
```

## 禁止使用不带 await 表达式的 async 函数

Why?

> 使用异步函数的主要原因通常是使用 await 操作符。

bad

```js
bar(async () => {
  doSomething();
});
```

good

```js
bar(async () => {
  await doSomething();
});
```

## 强制在 RegExp 上使用 u 标志

Why?

> 使字符范围语法获得正确的行为。

bad

```js
const a = /aaa/;
```

good

```js
const a = /aaa/u;
```

## 要求将变量声明放在它们作用域的顶部

Why?

> avaScript 的解析器会隐式的将变量的声明移到它们所在作用域的顶部。

bad

```js
f();
var a;
```

good

```js
var a;
f();
```

## 需要把立即执行的函数包裹起来

Why?

> 创建一个立即执行函数 (IIFE) 的一个通用技术是用括号包裹一个函数声明。

bad

```js
var x = (function () {
  return { y: 1 };
})(); // unwrapped
var x = (function () {
  return { y: 1 };
})(); // wrapped function expression
```

good

```js
var x = (function () {
  return { y: 1 };
})(); // wrapped call expression
```

## 要求或者禁止 Yoda 条件

Why?

> 在条件判断中字面量在先而变量在第二的位置。

bad

```js
if ('red' === color) {
  // ...
}
```

good

```js
if (value === 'red') {
  // ...
}
```

## 强制 “for” 循环中更新子句的计数器朝着正确的方向移动

Why?

> 如果一个 for 循环的停止条件永远无法到达，比如，计数器在错误的方向上移动，将陷入无限循环。

bad

```js
for (var i = 0; i < 10; i--) {}

for (var i = 10; i >= 0; i++) {}
```

good

```js
for (var i = 0; i < 10; i++) {}
```

## 强制在 getter 属性中出现一个 return 语句

Why?

> get 语法将对象属性绑定到一个函数，该函数在查找该属性时将被调用。

bad

```js
p = {
  get name() {
    // no returns.
  },
};
```

good

```js
p = {
  get name() {
    return 'nicholas';
  },
};
```

## 禁止使用异步函数作为 Promise executor

Why?

> 异步 executor 函数抛出一个错误，这个错误将会丢失，并且不会导致新构造的 Promise 被拒绝。这可能使会调试和处理一些错误变得困难。

bad

```js
const result = new Promise(async (resolve, reject) => {
  resolve(await foo);
});
```

good

```js
const result = Promise.resolve(foo);
```

## 禁止在循环中 出现 await

Why?

> 会使程序并没有充分利用 async/await 并行的好处。

bad

```js
async function foo(things) {
  const results = [];
  for (const thing of things) {
    // Bad: each loop iteration is delayed until the entire asynchronous operation completes
    results.push(await bar(thing));
  }
  return baz(results);
}
```

good

````js
async function foo(things) {
  const results = [];
  for (const thing of things) {
    ```

good

```js: all asynchronous operations are immediately started.
    results.push(bar(thing));
  }
  // Now that all the asynchronous operations are running, here we wait until they all complete.
  return baz(await Promise.all(results));
}
````

## 禁止与 -0 进行比较

Why?

> 这样比较毫无意义。

bad

```js
if (x === -0) {
  // doSomething()...
}
```

good

```js
if (x === 0) {
  // doSomething()...
}
```

## 禁止在条件语句中出现赋值操作符

Why?

> 很难判断某个特定的赋值是否是有意为之。

bad

```js
var x;
if ((x = 0)) {
  var b = 1;
}
```

good

```js
var x;
if (x === 0) {
  var b = 1;
}
```

## 禁用 console

Why?

> console 是用于浏览器中调试用的，线上 web 应用应该剔除 console 的调用。

bad

```js
console.log('Log a debug level message.');
```

good

```js
// custom console
Console.log('Hello world!');
```

## 禁用操作不影响值的表达式

Why?

> 这些错误在操作符优先级容易误判的复杂表达式中尤其常见。

bad

```js
const value2 = condition ? x : {} || DEFAULT;
const objIsEmpty = someObj === {};
```

good

```js
Console.log('Hello world!');
const objIsEmpty = Object.keys(someObj).length === 0;
```

## 禁止在条件中使用常量表达式

Why?

> 将一个常量表达式（比如，一个字面值）作为一个测试条件可能是个书写错误或者为了触发某个特定的行为。

bad

```js
var result = 0 ? a : b;
```

good

```js
var result = x !== 0 ? a : b;
```

## 禁止在正则表达式中使用控制字符

Why?

> 在 ASCII 中，0-31 范围内的控制字符是特殊的、不可见的字符。这些字符很少被用在 JavaScript 字符串中，所以一个正则表达式如果包含这些字符的，很有可能一个错误。

bad

```js
var pattern1 = /\x1f/;
var pattern2 = new RegExp('\x1f');
```

good

```js
var pattern1 = /\x20/;
var pattern2 = new RegExp('\x20');
```

## 禁用 debugger

Why?

> debugger 是开发过程中的调试器，不应该部署到线上 web 应用中。

bad

```js
function isTruthy(x) {
  debugger;
  return Boolean(x);
}
```

good

```js
function isTruthy(x) {
  return Boolean(x); // set a breakpoint at this line
}
```

## 禁止在 function 定义中出现重复的参数

Why?

> 如果在一个函数定义中出现多个同名的参数，后面出现的会覆盖前面出现的参数。

bad

```js
function foo(a, b, a) {
  console.log('value of the second a:', a);
}
```

good

```js
function foo(a, b, c) {
  console.log(a, b, c);
}
```

## 在 if-else-if 链中禁止重复条件

Why?

> If-else-if 链通常用于根据特定条件只需要执行几个可能分支中的一个分支(或最多一个分支)的情况。

bad

```js
if (isSomething(x)) {
  foo();
} else if (isSomething(x)) {
  bar();
}
```

good

```js
if (isSomething(x)) {
  foo();
} else if (isSomethingElse(x)) {
  bar();
}
```

## 禁止在对象文字中使用重复键

Why?

> 在对象字面量中具有相同键的多个属性可能会导致应用程序中出现意外行为

bad

```js
var foo = {
  bar: 'baz',
  bar: 'qux',
};
```

good

```js
var foo = {
  bar: 'baz',
  quxx: 'qux',
};
```

## 禁止重复的案例标签

Why?

> 如果 switch 语句在 case 子句中有重复的测试表达式，很可能是程序员复制了 case 子句，但忘记更改测试表达式。

bad

```js
let a = 1;

switch (a) {
  case 1:
    break;
  case 2:
    break;
  case 1: // duplicate test expression
    break;
  default:
    break;
}
```

good

```js
let a = 1;

switch (a) {
  case 1:
    break;
  case 2:
    break;
  case 3:
    break;
  default:
    break;
}
```

## 禁止空块语句

Why?

> 空块语句在阅读代码时会造成混淆。

bad

```js
if (foo) {
}
```

good

```js
if (foo) {
  // empty
}
```

## 禁止在正则表达式中使用空字符类

Why?

> 因为正则表达式中的空字符类不匹配任何东西，所以它们可能会出现输入错误。

bad

```js
/^abc[]/.test('abcdefg'); // false
'abcdefg'.match(/^abc[]/); // null
```

good

```js
/^abc/.test('abcdefg'); // true
'abcdefg'.match(/^abc/); // ["abc"]
```

## 禁止在 catch 子句中重新分配异常

Why?

> 由于没有参数对象提供对该数据的可选访问，对形参赋值绝对是破坏性的。

bad

```js
try {
  // code
} catch (e) {
  e = 10;
}
```

good

```js
try {
  // code
} catch (e) {
  var foo = 10;
}
```

## 禁止不必要的布尔类型转换

Why?

> 在诸如 if 语句的测试这样的上下文中，表达式的结果已经被强制转换为布尔值，通过双否定(!!)或调用布尔值强制转换为布尔值是不必要的。

bad

```js
var foo = !!!bar;
```

good

```js
var foo = !!bar;
```

## 禁止不必要的括号

Why?

> 限制只在必要的地方使用括号，目的是使代码阅读起来更清晰。

bad

```js
const Component = <div />;
```

good

```js
const Component = (
  <div>
    <p />
  </div>
);
```

## 禁止不必要的分号

Why?

> 输入错误和对需要分号位置的误解会导致不必要的分号,额外的分号可能会造成混淆。

bad

```js
var x = 5;
function foo() {
  // code
}
```

good

```js
var x = 5;
function foo() {
  // code
}
```

## 禁止重新分配 function 声明

Why?

> 因为重写/重新分配以 FunctionDeclaration 形式编写的函数通常表明存在错误或问题。

bad

```js
function foo() {}
foo = bar;
```

good

```js
var foo = function () {};
foo = bar;
```

## 禁止分配给导入的绑定

Why?

> ES Modules 对导入绑定的更新会导致运行时错误。

bad

```js
import mod, { named } from './mod.mjs';
import * as mod_ns from './mod.mjs';

mod = 1; // ERROR: 'mod' is readonly.
named = 2; // ERROR: 'named' is readonly.
```

good

```js
import mod, { named } from './mod.mjs';
import * as mod_ns from './mod.mjs';

mod.prop = 1;
named.prop = 2;
```

## 禁止在嵌套块中使用变量或函数声明

Why?

> 在 ES6 之前的 JavaScript 中，函数声明只允许出现在程序的第一级或另一个函数体中，尽管解析器有时会在其他地方错误地接受它们。这只适用于函数声明;命名或匿名函数表达式可以出现在表达式允许的任何地方。

bad

```js
if (test) {
  function doSomething() {}
} // ERROR: 'named' is readonly.
```

good

```js
function doSomething() {}
```

## 禁止在 RegExp 构造函数中使用无效的正则表达式字符串

Why?

> 正则表达式字面量中的无效模式在代码解析时是 SyntaxError，但 RegExp 构造函数中的无效字符串仅在代码执行时抛出 SyntaxError。

bad

```js
RegExp('[');
RegExp('.', 'z');
new RegExp('\\'); // ERROR: 'named' is readonly.
```

good

```js
RegExp('.');
new RegExp();
this.RegExp('[');
```

## 禁止不规则空格

Why?

> 无效或不规则的空格会导致 ECMAScript 5 解析器出现问题，并使代码难以调试，类似于混合制表符和空格。

bad

```js
function thing() /*<NBSP>*/ {
  return 'test';
}
```

good

```js
function thing() {
  return ' <NBSP>thing';
}
```

## 禁止丢失精度的文字数字

Why?

> 该规则将不允许使用在运行时转换为 JS number 时由于 64 位浮点舍入而立即失去精度的数字字面值。

bad

```js
const x = 0.123;
const x = 0x20000000000001;
```

good

```js
const x = 12300000000000000000000000;
const x = 0x1fffffffffffff;
```

## 禁止使用字符类语法中由多个代码点组成的字符

Why?

> Unicode 包含由多个编码点组成的字符。RegExp 字符类语法(/[abc]/)不能处理由多个代码点构成的字符;这些字符将分解为每个代码点。

bad

```js
/^[👍]$/;
```

good

```js
/^[👍]$/u;
```

## 禁止将全局对象属性作为函数调用

Why?

> ECMAScript 提供了几个按原样使用的全局对象。由于它们的大写(如 Math 和 JSON)，其中一些对象看起来像是构造函数，但如果试图将它们作为函数执行，则会抛出错误。

bad

```js
var newMath = new Math();
var newReflect = new Reflect();
```

good

```js
var object = JSON.parse('{}');
var value = Reflect.get({ x: 1, y: 2 }, 'x');
```

## 禁止从 Promise 执行器函数返回值

Why?

> 从执行器函数返回一个值是一个可能的错误，因为返回的值不能被使用，而且它不会以任何方式影响承诺。

bad

```js
new Promise((resolve, reject) => {
  if (someCondition) {
    return defaultResult;
  }
  getSomething((err, result) => {
    if (err) {
      reject(err);
    } else {
      resolve(result);
    }
  });
});
```

good

```js
new Promise((resolve, reject) => {
  if (someCondition) {
    resolve(defaultResult);
    return;
  }
  getSomething((err, result) => {
    if (err) {
      reject(err);
    } else {
      resolve(result);
    }
  });
});
```

## 禁止直接在对象上创建方法原型

Why?

> 可能导致意外行为或拒绝服务安全漏洞。

bad

```js
var hasBarProperty = foo.hasOwnProperty('bar');
```

good

```js
var hasBarProperty = Object.prototype.hasOwnProperty.call(foo, 'bar');
```

## 禁止在正则表达式中使用多个空格

Why?

> 使用正则表达式最容易出错的事情之一是使用多个空格。

bad

```js
var re = /foo   bar/;
var re = new RegExp('foo   bar');
```

good

```js
var re = /foo {3}bar/;
var re = new RegExp('foo {3}bar');
```

## 禁止从设置器返回值

Why?

> 从 setter 返回值要么是不必要的，要么是可能的错误，因为返回的值不能使用。

bad

```js
var foo = {
  set a(value) {
    this.val = value;
    return value;
  },
};
```

good

```js
var foo = {
  set a(value) {
    this.val = value;
  },
};
```

## 禁止稀疏数组

Why?

> 稀疏数组包含空槽，最常见的原因是数组字面量中使用了多个逗号。

bad

```js
var items = [,];
var colors = ['red', , 'blue'];
```

good

```js
var items = [];
var items = new Array(23);
```

## 禁止在常规字符串中使用模板文字占位符语法

Why?

> 当想要使用模板字面量时，很容易使用错误的引号。

bad

```js
'Hello ${name}!';
'Hello ${name}!';
'Time: ${12 * 60 * 60 * 1000}';
```

good

```js
`Hello ${name}!`;
`Time: ${12 * 60 * 60 * 1000}`;

templateFunction`Hello ${name}`;
```

## 禁止混淆多行表达式

Why?

> 在换行符没有结束语句的例外情况下，省略分号的键入错误会导致两个不相关的连续行被解释为一个表达式。特别是对于没有分号的编码风格，读者可能会忽略这个错误。尽管在语法上是正确的，但代码在执行时可能会抛出异常。

bad

```js
var foo = bar(1 || 2).baz();
```

good

```js
var foo = bar;
(1 || 2).baz();
```

## 在 return，throw，continue 和 break 语句之后禁止不可访问的代码

Why?

> 因为 return、throw、break 和 continue 语句无条件地退出代码块，所以它们之后的任何语句都不能执行。无法到达的语句通常是错误的。

bad

```js
function foo() {
  return true;
  console.log('done');
}
```

good

```js
function foo() {
  return bar();
  function bar() {
    return 1;
  }
}
```

## 不允许仅允许一次迭代的主体进行循环

Why?

> 永远无法到达第二次迭代的循环是代码中可能出现的错误。

bad

```js
while (foo) {
  doSomething(foo);
  foo = foo.parent;
  break;
}
```

good

```js
while (foo) {
  doSomething(foo);
  foo = foo.parent;
}
```

## 禁止在“ finally”块中使用控制流语句

Why?

> 当在 finally 中使用 return、throw、break 或 continue 时，try 和 catch 内部的控制流语句将被覆盖，这被认为是意外行为。

bad

```js
let foo = function () {
  try {
    return 1;
  } catch (err) {
    return 2;
  } finally {
    return 3;
  }
};
```

good

```js
let foo = function () {
  try {
    return 1;
  } catch (err) {
    return 2;
  } finally {
    console.log('hola!');
  }
};
```

## 不允许否定关系运算符的左操作数

Why?

> 禁止对关系操作符的左操作数求反。

bad

```js
if (!key in object) {
  // operator precedence makes it equivalent to (!key) in object
  // and type conversion makes it equivalent to (key ? "false" : "true") in object
}
```

good

```js
if (!(key in object)) {
  // key is not in object
}
```

## 禁止在不允许使用“ undefined”值的情况下使用可选链接

Why?

> 禁止对关系操作符的左操作数求反。

bad

```js
(obj?.foo)();
(obj?.foo).bar;
(foo?.()).bar;
```

good

```js
obj?.foo?.();
obj?.foo();
(obj?.foo ?? bar)();
```

## 禁止使用未使用的私有类成员

Why?

> 在代码中声明且未使用的私有类成员很可能是由于重构不完全而导致的错误。这样的类成员会占用代码中的空间，并可能导致读者的困惑。

bad

```js
class Foo {
  #usedOnlyInWrite = 5;
  method() {
    this.#usedOnlyInWrite = 42;
  }
}
```

good

```js
class Foo {
  #usedMember = 42;
  method() {
    return this.#usedMember;
  }
}
```

## 禁止在正则表达式中使用无用的反向引用

Why?

> 在 JavaScript 正则表达式中，定义一个对属于该模式另一个可选部分的组的反向引用是语法上有效的，一个对出现在反向引用之后的组的反向引用，一个对包含该反向引用的组的反向引用，或者一个对处于负向查找范围内的组的反向引用。

bad

```js
RegExp('(a)\\2(b)'); // forward reference to (b)
/\1(a)/; // forward reference to (a)
```

good

```js
/^(?:(a)|(b)\2)$/; // reference to (b)
/(a)\1/; // reference to (a)
```

## 禁止在表达式中对左操作数求反

Why?

> 就像开发人员可能会输入-a + b 来表示负数-(a + b)一样，他们可能会错误地在 object 中输入!key 来测试键不在对象中。

bad

```js
if (!key in object) {
  // operator precedence makes it equivalent to (!key) in object
  // and type conversion makes it equivalent to (key ? "false" : "true") in object
}
```

good

```js
if (!(key in object)) {
  // key is not in object
}
```

## 禁止因使用 await 或 yield 而导致竞态条件的赋值

Why?

> 在编写异步代码时，可能会产生微妙的竞态条件 bug。

bad

```js
let result;

async function foo() {
  result += await something;
}
```

good

```js
let result;

async function foobar() {
  result = (await something) + result;
}
```

## 检查 NaN 时需要调用 isNaN()

Why?

> 因为 NaN 在 JavaScript 中是唯一的，它不等于任何东西，包括它自己，所以与 NaN 比较的结果是令人困惑的。

bad

```js
if (foo == NaN) {
  // ...
}
```

good

```js
if (isNaN(foo)) {
  // ...
}
```

## 有效的 jsdoc

Why?

> 强制执行有效的 JSDoc 注释。

bad

```js
/**
 *  Add two numbers.
 *  @param {number} num The first number.
 *  @returns The sum of the two numbers.
 */
function add(num1, num2) {
  return num1 + num2;
}
```

good

```js
/**
 * Add two numbers.
 * @param {number} num1 The first number.
 * @param {number} num2 The second number.
 * @returns {number} The sum of the two numbers.
 */
function add(num1, num2) {
  return num1 + num2;
}
```

## 强制 typeof 表达式与有效字符串进行比较

Why?

> 强制 typeof 表达式与有效的字符串文字进行比较。

bad

```js
typeof foo === 'strnig';
typeof foo == 'undefimed';
typeof bar != 'nunber';
typeof bar !== 'fucntion';
```

good

```js
typeof foo === 'string';
typeof bar == 'undefined';
typeof foo === baz;
typeof bar === typeof qux;
```

## 要求箭头函数体使用大括号

Why?

> 可以强制或禁止箭头函数体使用大括号。

bad

```js
let foo = () => ({});
let foo = () => ({ bar: 0 });
```

good

```js
let foo = () => {};
let foo = () => {
  return { bar: 0 };
};
```

## 要求箭头函数的参数使用圆括号

Why?

> 箭头函数体只有一个参数时，可以省略圆括号。其它任何情况，参数都应被圆括号括起来。

bad

```js
(a) => {};
(a) => a;
(a) => {
  '\n';
};
a.then((foo) => {});
a.then((foo) => a);
a((foo) => {
  if (true) {
  }
});
```

good

```js
() => {};
(a) => {};
(a) => a;
(a) => {
  '\n';
};
a.then((foo) => {});
a.then((foo) => {
  if (true) {
  }
});
```

## 强制箭头函数的箭头前后使用一致的空格

Why?

> 规范化箭头函数的箭头之前或之后的空格风格。

bad

```js
() => {};
() => {};
(a) => {};
(a) => {};
(a) => a;
(a) => a;
() => {
  '\n';
};
() => {
  '\n';
};
```

good

```js
() => {};
(a) => {};
(a) => a;
() => {
  '\n';
};
```

## 要求在构造函数中有 super() 的调用

Why?

> 派生类中的构造函数必须调用 super()。非派生类的构造函数不能调用 super()JavaScript 引擎将引发一个运行时错误。

bad

```js
class A {
  constructor() {
    super(); // This is a SyntaxError.
  }
}

class A extends B {
  constructor() {} // Would throw a ReferenceError.
}
```

good

```js
class A {
  constructor() {}
}

class A extends B {
  constructor() {
    super();
  }
}
```

## 强制 generator 函数中 \* 号周围使用一致的空格

Why?

> 在 ECMAScript 6 中，Generators 是一个新的函数类型，随着时间的推移可以返回多个值。

bad

```js
function* generator() {}

var shorthand = { *generator() {} };
```

good

```js
function* generator() {}

var anonymous = function* () {};

var shorthand = { *generator() {} };
```

## 禁止修改类声明的变量

Why?

> ClassDeclaration 创建一个变量，可以修改这个变量。

bad

```js
class A {}
A = 0;

let A = class A {
  b() {
    A = 0;
    // `let A` is shadowed by the class name.
  }
};
```

good

```js
let A = class A {};
A = 0; // A is a variable.

class A {
  b(A) {
    A = 0; // A is a parameter.
  }
}
```

## 禁止在可能与比较操作符相混淆的地方使用箭头函数

Why?

> 箭头函数 (=>) 在语法上与一些比较操作符(>，<，<= 和 >=)相似,可能与比较操作符混淆导致报错。

bad

```js
var x = (a) => (1 ? 2 : 3);
var x = (a) => (1 ? 2 : 3);
var x = (a) => (1 ? 2 : 3);
```

good

```js
var x = (a) => (1 ? 2 : 3);
var x = (a) => (1 ? 2 : 3);
var x = (a) => {
  return 1 ? 2 : 3;
};
var x = (a) => {
  return 1 ? 2 : 3;
};
```

## 禁止修改 const 声明的变量

Why?

> 我们不能修改使用 const 关键字声明的变量。 它会引发一个运行时错误。

bad

```js
const a = 0;
a = 1;
a += 1;
++a;
```

good

```js
const a = 0;
console.log(a);

for (const a in [1, 2, 3]) {
  // `a` is re-defined (not modified) on each loop step.
  console.log(a);
}
for (const a of [1, 2, 3]) {
  // `a` is re-defined (not modified) on each loop step.
  console.log(a);
}
```

## 禁止类成员中出现重复的名称

Why?

> 如果类成员中有同名的声明，最后一个声明将会默默地覆盖其它声明。 它可能导致意外的行为。

bad

```js
class Foo {
  bar() {}
  bar() {}
}

class Foo {
  bar() {}
  get bar() {}
}

class Foo {
  static bar() {}
  static bar() {}
}
```

good

```js
class Foo {
  bar() {}
  qux() {}
}

class Foo {
  get bar() {}
  set bar(value) {}
}

class Foo {
  static bar() {}
  bar() {}
}
```

## 禁止重复模块导入

Why?

> 为每个模块使用单一的 import 语句会使代码更加清新。

bad

```js
import { merge } from 'module';
import something from 'another-module';
import { find } from 'module';
```

good

```js
import { merge, find } from 'module';
import something from 'another-module';
```

## 禁止 Symbolnew 操作符和 new 一起使用

Why?

> Symbol 不和 new 操作符一起使用，而是作为函数调用。

bad

```js
var foo = new Symbol('foo');
```

good

```js
var foo = Symbol('foo');

// Ignores shadowed Symbol.
function bar(Symbol) {
  const baz = new Symbol('baz');
}
```

## 在导出中禁止指定名称

Why?

> 不允许指定名称，会产生错误。

bad

```js
function foo() {}
export { foo as default };
export { default } from "some_module";

```

good

```js
export default function foo() {}
```

## 禁止使用指定的 import 加载的模块

Why?

> 某些 import 在特定的环境下毫无意义;有些模块提供相似或相同的功能,却要维护两个依赖，造成维护成本过高。

bad

```js
import fs from 'fs';
export { fs } from 'fs';
import { DisallowedObject as AllowedObject } from 'foo';
import { 'DisallowedObject' as AllowedObject } from 'foo';
```

good

```js
import crypto from 'crypto';
export { foo } from 'bar';
import crypto from 'crypto';
import eslint from 'eslint';
export * from 'path';
```

## 禁止在构造函数中，在调用 super() 之前使用 this 或 super

Why?

> 在派生类的构造函数中，如果在调用 super() 之前使用 this 或 super，它将会引发一个引用错误。

bad

```js
class A extends B {
  constructor() {
    this.a = 0;
    super();
  }
}

class A extends B {
  constructor() {
    this.foo();
    super();
  }
}
```

good

```js
class A {
  constructor() {
    this.a = 0; // OK, this class doesn't have an `extends` clause.
  }
}

class A extends B {
  constructor() {
    super();
    this.a = 0; // OK, this is after `super()`.
  }
}
```

## 禁止在对象中使用不必要的计算属性

Why?

> 使用不必要的计算属性是不必要的。

bad

```js
var a = { ['0']: 0 };
var a = { ['0+1,234']: 0 };
var a = { [0]: 0 };
var a = { ['x']: 0 };
var a = { ['x']() {} };
```

good

```js
var c = { a: 0 };
var c = { 0: 0 };
var a = { x() {} };
var c = { a: 0 };
var c = { '0+1,234': 0 };
```

## 禁用不必要的构造函数

Why?

> 没有必要提供一个空的构造函数或只是简单的调用父类这样的构造函数。

bad

```js
class A {
  constructor() {}
}

class A extends B {
  constructor(...args) {
    super(...args);
  }
}
```

good

```js
class A {}

class A {
  constructor() {
    doSomething();
  }
}

class A extends B {
  constructor() {
    super('foo');
  }
}

class A extends B {
  constructor() {
    super();
    doSomething();
  }
}
```

## 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字

Why?

> ES2015 允许在 import ，export 和结构赋值时对引用进行重命名, 这和没有重命名是等价的，因此这种操作完全冗余。

bad

```js
import { foo as foo } from 'bar';
export { foo as foo };
export { foo as foo } from 'bar';
let { foo: foo } = bar;
let { foo: foo } = bar;
function foo({ bar: bar }) {}
({ foo: foo }) => {};
```

good

```js
import * as foo from 'foo';
import { foo } from 'bar';
import { foo as bar } from 'baz';

export { foo };
export { foo as bar };
export { foo as bar } from 'foo';

let { foo } = bar;
let { foo: bar } = baz;
let { [foo]: foo } = bar;

function foo({ bar }) {}
function foo({ bar: baz }) {}

({ foo }) => {};
({ foo: bar }) => {};
```

## 要求使用 let 或 const 而不是 var

Why?

> ECMAScript 6 允许程序员使用 let 和 const 关键字在块级作用域而非函数作用域下声明变量。块级作用域在很多其他编程语言中很普遍，能帮助程序员避免错误。

bad

```js
var x = 'y';
var CONFIG = {};
```

good

```js
let x = 'y';
const CONFIG = {};
```

## 要求或禁止对象字面量中方法和属性使用简写语法

Why?

> ECMAScript 6 提供了简写的形式去定义对象中的方法和属性。这个语法可以更清洁地定义复杂对象字面量。

bad

```js
var foo = {
  'bar-baz'() {},
};
```

good

```js
var foo = {
  'bar-baz': function () {},
  qux: qux,
};
```

## 要求回调函数使用箭头函数

Why?

> 简洁，易推理; 无论何时何地调用它，都是作用域绑定的。

bad

```js
foo(function (a) {
  return a;
}); // ERROR
// prefer: foo(a => a)
foo(
  function () {
    return this.a;
  }.bind(this)
); // ERROR
// prefer: foo(() => this.a)
```

good

```js
// arrow function callback
foo((a) => a); // OK
// generator as callback
foo(function* () {
  yield;
}); // OK
// function expression not used as callback or function argument
var foo = function foo(a) {
  return a;
}; // OK
// unbound function expression callback
foo(function () {
  return this.a;
}); // OK
// recursive named function callback
foo(function bar(n) {
  return n && n + bar(n - 1);
}); // OK
```

## 要求使用 const 声明那些声明后不再被修改的变量

Why?

> const 声明告诉读者，“这个变量从不会被重新赋值”，从而减少认知负荷，提高可维护性。

bad

```js
let a = 3;
console.log(a);

let { a, b } = obj; /*error 'b' is never reassigned, use 'const' instead.*/
a = a + 1;

let { a, b } = obj;
```

good

```js
// using const.
const a = 0;

// it's never initialized.
let a;
console.log(a);

const { a: a0, b } = obj;
const a = a0 + 1;

let { a, b } = obj;
a = a + 1;
```

## 优先使用数组和对象解构

Why?

> 可能会出现访问键值为整数的对象属性将属于 array 析构的类别和通过计算索引访问数组元素属于 object 析构的类别两种情况。

bad

```js
// With `array` enabled
var foo = array[0];

// With `object` enabled
var foo = object.foo;
var foo = object['foo'];

var foo = object.bar;
```

good

```js
// With `array` enabled
var [foo] = array;
var foo = array[someIndex];

// With `object` enabled
var { foo } = object;
var foo = object.bar;

let foo;
({ foo } = object);

var { bar: foo } = object;
```

## 禁用 parseInt() 和 Number.parseInt()，使用二进制，八进制和十六进制字面量

Why?

> 由于 ES6 支持二进制，八进制，和十六进制字面量，所以该规则鼓励使用这些数字字面量而不是 parseInt()。

bad

```js
parseInt('111110111', 2) === 503;
parseInt('767', 8) === 503;
parseInt('1F7', 16) === 503;
Number.parseInt('111110111', 2) === 503;
Number.parseInt('767', 8) === 503;
Number.parseInt('1F7', 16) === 503;
```

good

```js
parseInt(1);
parseInt(1, 3);
Number.parseInt(1);
Number.parseInt(1, 3);

0b111110111 === 503;
0o767 === 503;
0x1f7 === 503;

a[parseInt](1, 2);

parseInt(foo);
parseInt(foo, 2);
Number.parseInt(foo);
Number.parseInt(foo, 2);
```

## 要求使用剩余参数而不是 arguments

Why?

> ES2015 里有剩余参数。我们可以利用这个特性代替变参函数的 arguments 变量。 arguments 没有 Array.prototype 方法，所以有点不方便。

bad

```js
function foo() {
  console.log(arguments);
}
function foo(action) {
  var args = Array.prototype.slice.call(arguments, 1);
  action.apply(null, args);
}
function foo(action) {
  var args = [].slice.call(arguments, 1);
  action.apply(null, args);
}
```

good

```js
function foo(...args) {
  console.log(args);
}
function foo(action, ...args) {
  action.apply(null, args); // or `action(...args)`, related to the `prefer-spread` rule.
}
// Note: the implicit arguments can be overwritten.
function foo(arguments) {
  console.log(arguments); // This is the first argument.
}
function foo() {
  var arguments = 0;
  console.log(arguments); // This is a local variable.
}
```

## 要求使用扩展运算符而非.apply()

Why?

> 在 ES2015 之前，必须使用 Function.prototype.apply() 调用可变参数函数。

bad

```js
foo.apply(undefined, args);
foo.apply(null, args);
obj.foo.apply(obj, args);
```

good

```js
// Using spread syntax
foo(...args);
obj.foo(...args);

// The `this` binding is different.
foo.apply(obj, args);
obj.foo.apply(null, args);
obj.foo.apply(otherObj, args);

// The argument list is not variadic.
// Those are warned by the `no-useless-call` rule.
foo.apply(undefined, [1, 2, 3]);
foo.apply(null, [1, 2, 3]);
obj.foo.apply(obj, [1, 2, 3]);
```

## 使用模板字面量而非字符串连接

Why?

> 在 ES2015 (ES6) 中，我们可以使用模板而非字符串连接。

bad

```js
var str = 'Hello, ' + name + '!';
var str = 'Time: ' + 12 * 60 * 60 * 1000;
```

good

```js
var str = 'Hello World!';
var str = `Hello, ${name}!`;
var str = `Time: ${12 * 60 * 60 * 1000}`;

// This is reported by `no-useless-concat`.
var str = 'Hello, ' + 'World!';
```

## 禁用函数内没有 yield 的 generator 函数

Why?

> 禁用函数内没有 yield 的 generator 函数

bad

```js
function* foo() {
  return 10;
}
```

good

```js
function* foo() {
  yield 5;
  return 10;
}

function foo() {
  return 10;
}

// This rule does not warn on empty generator functions.
function* foo() {}
```

## 强制剩余和扩展运算符及其表达式之间有空格

Why?

> ES2015 引入了 rest 和 spread 操作符，它们将可迭代结构扩展到各个部分.和其他运算符一样，若允许在剩余和扩展运算符及其运算表达式之间有空格，可能导致同一个代码库的空格不一致.

bad

```js
fn(... args)
[... arr, 4, 5, 6]
let [a, b, ... arr] = [1, 2, 3, 4, 5];
function fn(... args) { console.log(args); }
let { x, y, ... z } = { x: 1, y: 2, a: 3, b: 4 };
let n = { x, y, ... z };

```

good

```js
fn(...args)
[...arr, 4, 5, 6]
let [a, b, ...arr] = [1, 2, 3, 4, 5];
function fn(...args) { console.log(args); }
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
let n = { x, y, ...z };
```

## 强制模块内的 import 排序

Why?

> mport 语句用来引入外部模块输出的成员 (函数、对象或原语)。

bad

```js
import b from 'foo.js';
import a from 'bar.js';
import { b, c } from 'foo.js';
import { a, b } from 'bar.js';
import { b, a, c } from 'foo.js';
```

good

```js
import a from 'foo.js';
import b from 'bar.js';
import 'foo.js';
import * as bar from 'bar.js';
import { a, b } from 'baz.js';
import c from 'qux.js';
import { a, b, c } from 'foo.js';
```

## 要求 symbol 描述

Why?

> 使用 描述 更容易促进调试。

bad

```js
var foo = Symbol();
```

good

```js
var foo = Symbol('some description');
var someString = 'some description';
var bar = Symbol(someString);
```

## 要求或禁止模板字符串中的嵌入表达式周围空格的使用

Why?

> 我们可以在模板字符串中使用 ${ 和 } 嵌入表达式。

bad

```js
`hello, ${people.name}!`;
`hello, ${people.name}!`;
`hello, ${people.name}!`;
```

good

```js
`hello, ${people.name}!`;
`hello, ${people.name}!`;
```

## 强制在 yield* 表达式中 * 周围使用空格

Why?

> 强制在 yield* 表达式中 * 左右使用空格。

bad

```js
function* generator() {
  yield* other();
}
```

good

```js
function* generator() {
  yield* other();
}
```

## 要求或禁止使用严格模式指令

Why?

> 严格模式指令是在脚本或函数体开始位置放置一个 "use strict" 字面量。它启用了严格模式语义。

bad

```js
'use strict';
function foo() {}
function foo() {
  'use strict';
}
```

good

```js
function foo() {}
```

## 要求或禁止 var 声明中的初始化

Why?

> 在 JavaScript 中，变量可在声明时初始化，或者在赋值语句中初始化.

bad

```js
function foo() {
  var bar = 1;
  let baz = 2;

  for (var i = 0; i < 1; i++) {}
}
```

good

```js
function foo() {
  var bar;
  let baz;
  const buzz = 1;
}
```

## 禁止删除变量

Why?

> delete 的目的是删除对象的属性。使用 delete 操作删除一个变量可能会导致意外情况发生。

bad

```js
var x;
delete x;
```

good

```js
var x;
```

## 不允许标签与变量同名

Why?

> 该规则旨在通过禁止使用同一作用域下的同名的变量做为标签，来创建更清晰的代码。

bad

```js
var x = foo;
function bar() {
  x: for (;;) {
    break x;
  }
}
```

good

```js
function foo() {
  var q = t;
}

function bar() {
  q: for (;;) {
    break q;
  }
}
```

## 禁用特定的全局变量

Why?

> 如果你通过启用一个环境想允许使用一组全局变量，但想禁用其中的一部分，那么该规则会很有用。

bad

```js
function onClick() {
  console.log(event);
}
fdescribe('foo', function () {});
```

good

```js
import event from 'event-module';
var event = 1;
```

## 禁止变量声明与外层作用域的变量同名

Why?

> 覆盖是指在同一作用域里局部变量和全局变量同名。

bad

```js
if (true) {
  let b = 6;
}

function b() {}
```

good

```js
if (true) {
  let a = 3;
}
let a = 5;
```

## 禁止将标识符定义为受限的名字

Why?

> 将它们定义为其他含义可能会产生意想不到的结果，并使阅读代码的其他人感到困惑。

bad

```js
function NaN() {}
!function (Infinity) {};
var undefined = 5;
try {
} catch (eval) {}
```

good

```js
var Object;
function f(a, b) {}
// Exception: `undefined` may be shadowed if the variable is never assigned a value.
var undefined;
```

## 禁用未声明的变量，除非它们在 /_global _/ 注释中被提到

Why?

> 此规则可帮助你定位由变量漏写、参数名漏写和意外的隐式全局变量声明所导致的潜在引用错误。

bad

```js
var a = someFunction();
b = 10;
```

good

```js
var a = someFunction();
b = 10;
```

## 禁止将变量初始化为 undefined

Why?

> 在 JavaScript 中，声明一个变量但未初始化，变量会自动获得 undefined 作为初始值。

bad

```js
var foo = undefined;
let bar = undefined;
```

good

```js
var foo;
let bar;
const baz = undefined;
```

## 禁止将 undefined 作为标识符

Why?

> undefined 变量在 JavaScript 中是独一无二的，因为它实际上是一个全局对象属性。

bad

```js
var foo = undefined;
var undefined = 'foo';
if (foo === undefined) {
  // ...
}
function foo(undefined) {
  // ...
}
```

good

```js
var foo = void 0;
var Undefined = 'foo';
if (typeof foo === 'undefined') {
  // ...
}
global.undefined = 'foo';
```

## 禁止出现未使用过的变量

Why?

> 已声明的变量在代码里未被使用过，就像是由于不完整的重构而导致的遗漏错误。这样的变量增加了代码量，并且混淆读者。

bad

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

good

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

## 禁止在变量定义之前使用它们

Why?

> 在 ES6 标准之前的 JavaScript 中，某个作用域中变量和函数的声明会被提前到作用域顶部。

bad

```js
alert(a);
var a = 10;

f();
function f() {}

function g() {
  return b;
}
var b = 1;

{
  alert(c);
  let c = 1;
}
```

good

```js
var a;
a = 10;
alert(a);

function f() {}
f(1);

var b = 1;
function g() {
  return b;
}

{
  let c;
  c++;
}
```

## 强制数组方法的回调函数中有 return 语句

Why?

> 在 JavaScript 中，回调模式是大多数 I/O 和事件驱动编程的核心。

bad

```js
function foo(err, callback) {
  if (err) {
    callback(err);
  }
  callback();
}
```

good

```js
function foo(err, callback) {
  if (err) {
    return callback(err);
  }
  callback();
}
```

## 要求 require() 出现在顶层模块作用域中

Why?

> 虽然 require() 可以在代码的任何地方被调用，一些风格指南规定，它只能在模块顶层被调用，这样更容易识别依赖关系。

bad

```js
// calling require() inside of a function is not allowed
function readFile(filename, callback) {
  var fs = require('fs');
  fs.readFile(filename, callback);
}

// conditional requires like this are also not allowed
if (DEBUG) {
  require('debug');
}

// a require() in a switch statement is also flagged
switch (x) {
  case '1':
    require('1');
    break;
}
```

good

```js
// all these variations of require() are ok
require('x');
var y = require('y');
var z;
z = require('z').initialize();

// requiring a module and using it in a function is ok
var fs = require('fs');
function readFile(filename, callback) {
  fs.readFile(filename, callback);
}
```

## 要求回调函数中有容错处理

Why?

> 如果忘记处理这些错误会导致你的应用程序出现一些非常奇怪的行为。

bad

```js
function loadData(err, data) {
  doSomething();
}
```

good

```js
function loadData(error, data) {
  if (error) {
    console.log(error.stack);
  }
  doSomething();
}
```

## 禁用 Buffer() 构造函数

Why?

> 在 Node.js 中，Buffer 构造函数的行为取决于其参数的类型。

bad

```js
new Buffer(5);
new Buffer([1, 2, 3]);

Buffer(5);
Buffer([1, 2, 3]);

new Buffer(res.body.amount);
new Buffer(res.body.values);
```

good

```js
Buffer.alloc(5);
Buffer.allocUnsafe(5);
Buffer.from([1, 2, 3]);

Buffer.alloc(res.body.amount);
Buffer.from(res.body.values);
```

## 禁止混合常规变量声明和 require 调用

Why?

> 在 Node.js 社区，通常习惯把调用 require 模块的初始化和其它变量声明分开，有时也根据模块类型对它们进行分组。该规则帮助你强制执行这种约定。

bad

```js
var fs = require('fs'),
  i = 0;

var async = require('async'),
  debug = require('diagnostics').someFunction('my-module'),
  eslint = require('eslint');
```

good

```js
// only require declarations (grouping off)
var eventEmitter = require('events').EventEmitter,
  myUtils = require('./utils'),
  util = require('util'),
  bar = require(getBarModuleName());

// only non-require declarations
var foo = 42,
  bar = 'baz';

// always valid regardless of grouping because all declarations are of the same type
var foo = require('foo' + VERSION),
  bar = require(getBarModuleName()),
  baz = require();
```

## 禁止调用 require 时使用 new 操作符

Why?

> require 方法被用来引入不同文件中模块。

bad

```js
var appHeader = new require('app-header');
```

good

```js
var AppHeader = require('app-header');
var appHeader = new AppHeader();
```

## 禁止对 **dirname 和 **filename 进行字符串连接

Why?

> 在 Node.js 中，全局变量 \_dirname 和 \_filename 分别代表当前执行脚本的目录路径以及文件路径。

bad

```js
var fullPath = __dirname + '/foo.js';
var fullPath = __filename + '/foo.js';
```

good

```js
var fullPath = dirname + '/foo.js';
```

## 禁用 process.env

Why?

> Node.js 中的 process.env 对象用于存储部署或配置参数。在项目中随意使用它会作为另一个全局依赖会导致维护问题。

bad

```js
if (process.env.NODE_ENV === 'development') {
  //...
}
```

good

```js
var config = require('./config');

if (config.env === 'development') {
  //...
}
```

## 禁用 process.exit()

Why?

> process.exit() 方法在 Node.js 中被用于立即终止 Node.js 进程且退出。这是非常危险的操作，因为他能在任何方法任何时候出现，当发生错误时可能完全停止 Node.js 应用。

bad

```js
process.exit(1);
process.exit(0);
```

good

```js
Process.exit();
var exit = process.exit;
```

## 禁用通过 require 加载的指定模块

Why?

> 加载的模块名称不是预定义的/静态的，或者只有在真正需要的情况下才有条件地加载模块。

bad

```js
var fs = require('fs');
var cluster = require('cluster');
var pick = require('lodash/pick');
```

good

```js
var crypto = require('crypto');
var pick = require('lodash/pick');
```

## 禁用同步方法

Why?

> 在 Node.js 中，大多数的 I/O 操作是通过异步方法执行的。但是，经常有一些异步方法的同步版本。

bad

```js
fs.existsSync(somePath);
function foo() {
  var contents = fs.readFileSync(somePath).toString();
}
```

good

```js
obj.sync();
async(function () {
  // ...
});
```
