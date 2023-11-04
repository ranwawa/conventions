# no-dupe-class-members

禁止在类成员中使用重复的名称

### 为什么

如果类成员中存在相同名称的声明，最后的声明会默默地覆盖其他声明，一般是手抖搞出来的。

### 建议

确保每个类成员的名称都是唯一的。换个新名字,或者删除重复的属性.

### 错误示例

```js
class Foo {
  static bar() {
    console.log('ranwawa');
  }
  static bar() {
    console.log('zhangshan');
  }
}
```

### 正确示例

```js
class Foo {
  static bar() {
    console.log('ranwawa');
  }
  static baz() {
    console.log('zhangshan');
  }
}
```

### 参考

- [no-dupe-class-members](https://eslint.org/docs/rules/no-dupe-class-members)
