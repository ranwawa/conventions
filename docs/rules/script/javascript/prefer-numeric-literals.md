# 优先使用数组和对象解构

## Why?

> 可能会出现访问键值为整数的对象属性将属于 array 析构的类别和通过计算索引访问数组元素属于 object 析构的类别两种情况。

## bad

```js
// With `array` enabled
var foo = array[0];

// With `object` enabled
var foo = object.foo;
var foo = object["foo"];

var foo = object.bar;
```

## good

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

## 参考:

- [prefer-numeric-literals](https://eslint.org/docs/rules/prefer-numeric-literals)
