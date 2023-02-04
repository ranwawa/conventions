# 禁止使用未使用的私有类成员

## Why?

> 在代码中声明且未使用的私有类成员很可能是由于重构不完全而导致的错误。这样的类成员会占用代码中的空间，并可能导致读者的困惑。

## bad

```js
class Foo {
  #usedOnlyInWrite = 5;
  method() {
    this.#usedOnlyInWrite = 42;
  }
}
```

## good

```js
class Foo {
  #usedMember = 42;
  method() {
    return this.#usedMember;
  }
}
```

## 参考:

- [no-useless-backreference](https://eslint.org/docs/rules/no-useless-backreference)
