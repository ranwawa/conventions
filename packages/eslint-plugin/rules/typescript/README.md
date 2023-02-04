# typescript

## 必须把同个函数的重载签名放一起

Why?

> 函数重载是针对一个函数的多种调用形式,集中管理有利于代码维护.

bad

```ts
export function foo(s: string): void;
export function foo(n: number): void;
export function bar(): void;
export function foo(sn: string | number): void;
```

good

```ts
export function foo(s: string): void;
export function foo(n: number): void;
export function foo(sn: string | number): void;

export function bar(): void;
```

参考:

- [@typescript-eslint/adjacent-overload-signatures](https://typescript-eslint.io/rules/adjacent-overload-signatures)

## 禁用单行注释关闭 ts 检测功能

Why?

> @ts-ignore,@ts-nocheck,@ts-expect-error 和 any 一样,会破坏类型推导.请使用正确的类型定义,时间来不及可以临时用 unknown 替代

bad

```ts
// @ts-expect-error
// @ts-ignore
// @ts-nocheck
```

good

```ts
// @ts-check
```

参考:

- [@typescript-eslint/ban-ts-comment](https://typescript-eslint.io/rules/ban-ts-comment)

## 禁止使用内置类做为类型

Why?

> 混合使用 String,string 会使代码产生混乱,请统一使用小写的 ts 内置类型

bad

```ts
type MyType = String | Boolean;
```

good

```ts
type MyType = string | boolean;
```

参考

- [@typescript-eslint/ban-types](https://typescript-eslint.io/rules/ban-types/)

## no-array-constructor

Why?

> 数组构造函数在一个参数时是创建指定长度的数组,而在多个参数时则是创建指定元素的数组,容易使人产生混淆,请统一使用字面量语法创建数组

bad

```ts
const arr = new Array(1, 2, 3);
```

good

```ts
const arr = [1, 2, 3];
```

参考

- [no-array-constructor](https://typescript-eslint.io/rules/no-array-constructor)

## 禁止使用空函数

Why?

> 空函数不会产生任何作用,没存在的意思.如果有特殊用途,请在函数体内加个注释以说明用途

bad

```ts
function loop() {}
```

good

```ts
function loop() {
  // 用于指定默认函数
}
```

参考

- [@typescript-eslint/no-empty-function](https://typescript-eslint.io/rules/no-empty-function)

## 禁止使用空类型

Why?

> 空类型相当于其父类,没存在的必要,直接使用父类即可

bad

```ts
interface Foo {
  name: string;
}

interface Bar extends Foo {}

type Baz = Bar;
```

good

```ts
interface Foo {
  name: string;
}

type Baz = Foo;
```

参考

- [@typescript-eslint/no-empty-interface](https://typescript-eslint.io/rules/no-empty-interface)

## 禁止使用 any

Why?

> ts 的主要目的就是类型检测,any 则会破坏类型检测.请使用具体类型或者 unknown 替代

bad

```ts
const foo: any = __dirname;
```

good

```ts
const foo: string = __dirname;
```

参考

- [@typescript-eslint/no-explicit-any](https://typescript-eslint.io/rules/no-explicit-any)

## 禁止多余的非空断言

Why?

> 非空断言在运行时可能会报错,如果确定类型不为空,请使用条件判断推导或直接修改类型

bad

```ts
let a: string | null;

a!.split('');
```

good

```ts
let a: string | null;

if (a) {
  a.split('');
}
```

参考

- [@typescript-eslint/no-non-null-assertion](https://typescript-eslint.io/rules/no-non-null-assertion)

## 禁止将 this 赋值给其他变量

Why?

> es6 里面这样做一般都是作用域没控制好,请使用箭头函数替换

bad

```ts
const that = this;
function func() {
  that.doSomething();
}
```

good

```ts
const func = () => {
  this.doSomething();
};
```

参考

- [@typescript-eslint/no-this-alias](https://typescript-eslint.io/rules/no-this-alias)

## 禁止给可推导的变量添加类型

Why?

> ts 可明确推导的变量加上类型,增加了代码噪音,请删除掉

bad

```ts
const name: string = 'zmn';
```

good

```ts
const name = 'zmn';
```

参考

- [@typescript-eslint/no-inferrable-types](https://typescript-eslint.io/rules/no-inferrable-types)

## 禁止使用超出范围的数值

Why?

> js 使用双精度浮点数做为数值,超出这个范围的会自动被丢弃,请使用范围内的值

bad

```ts
type MaxNumber = 51230000000000011;
```

good

```ts
type MaxNumber = 5123000000000001;
```

参考

- [@typescript-eslint/no-loss-of-precision](https://typescript-eslint.io/rules/no-loss-of-precision)

## 禁止在类上使用 new 约束

Why?

> 类可以作为类型使用,声明构造器约束时会自动根据 constructor 推断,而 interface 则必须显示指定 new,请不要搞混了

bad

```ts
class C {
  new(): C;
}

interface I {
  constructor(): void;
}
```

good

```ts
class C {
  constructor() {}
}
interface I {
  new (): C;
}
```

参考

- [@typescript-eslint/no-misused-new](https://typescript-eslint.io/rules/no-misused-new)

## 禁止使用 module/namespace 关键字

Why?

> 这两个关键字已经过期了,请使用 declare module 声明外部模块

bad

```ts
module foo {}
namespace foo {}
```

good

```ts
declare module 'foo' {}
```

参考

- [@typescript-eslint/no-namespace](https://typescript-eslint.io/rules/no-namespace)

## 禁止不必要的类型约束

Why?

> 泛型会默认为 unknown 类型,如果将泛型约束为 unknown/any 则是多此一举,可删掉

bad

```ts
interface Foo<T extends unknown> {}
```

good

```ts
interface Foo<T> {}
```

参考

- [@typescript-eslint/no-unnecessary-type-constraint](https://typescript-eslint.io/rules/no-unnecessary-type-constraint)

## 禁止存在未使用的变量

Why?

> 随着代码的增长,如果存在过多未使用的变量会影响代码的可读性和可维护性,请删掉未使用的变量

bad

```ts
type Prop = string;
type State = number;

let prop: Prop;
```

good

```ts
type Prop = string;

let prop: Prop;
```

参考

- [@typescript-eslint/no-unused-vars](https://typescript-eslint.io/rules/no-unused-vars)

## 禁止使用 node 的 require 语法

Why?

> ts 不支持 node 的 require 语法,会导致引入的模块类型使用,请使用 ts 的 import 语法或者 esm 替代

bad

```ts
const foo = require('foo');
```

good

```ts
import foo = require('foo');
```

参考

- [@typescript-eslint/no-var-requires](https://typescript-eslint.io/rules/no-var-requires)

## 禁止使用原始值字面量作为类型

Why?

> 使用原始值字面量作为类型影响可阅读性,请使用常量断言替代

bad

```ts
let bar: 2 = 2;
```

good

```ts
let bar = 2 as const;
```

参考

- [@typescript-eslint/prefer-as-const](https://typescript-eslint.io/rules/prefer-as-const)

## 禁止使用斜线语法引入类型

Why?

> 混用斜线语法和 import 语法增加了使用难度,请统一使用 import 语法导致外部类型

bad

```ts
/// <reference path="foo" />
```

good

```ts
import type { SomeType } from 'foo';
```

参考

- [@typescript-eslint/triple-slash-reference](https://typescript-eslint.io/rules/triple-slash-reference)

## 禁止使用父作用域相同的变量

Why?

> 使用父作用域相同的变量容易产生混淆并引发潜在 bug,子域请使用不同的变量

bad

```ts
type Prop = string;

function func() {
  type Prop = number;
}
```

good

```ts
type Prop = string;

function func() {
  type PropChild = number;
}
```

参考

- [@typescript-eslint/no-shadow](https://typescript-eslint.io/rules/no-shadow)
