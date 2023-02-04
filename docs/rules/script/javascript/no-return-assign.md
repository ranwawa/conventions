# 禁止使用对象的某些属性

## Why?

> 在代码库中，对象的某些属性可能被禁止使用。

## bad

```js
var example = disallowedObjectName.disallowedPropertyName;
disallowedObjectName.disallowedPropertyName();
```

## good

```js
var example = disallowedObjectName.somePropertyName;
allowedObjectName.disallowedPropertyName();
```

## 参考:

- [no-return-assign](https://eslint.org/docs/rules/no-return-assign)
