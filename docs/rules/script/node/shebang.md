# 禁止使用不支持的 ES/node 语法

## Why?

> 使用 node 版本不支持的语法,如果未经打包工具编译,则会在生产环境报错,请使用低版本 node 或修改 eslint ecmaVersion 配置项

.eslintrc

```json
{
  "parserOptions": {
    "ecmaVersion": "3"
  }
}
```

## bad

```js
[].filter(() => {});
```

## good

```js
[].forEach(() => {});
```

## 参考

- [no-unsupported-features/es-syntax](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-syntax.md)
