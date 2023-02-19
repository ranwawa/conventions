# jsx-filename-extension

防止使用不安全的 target='\_blank'

why?

此规则旨在通过要求 rel='noreferrer noopener'外部链接以及可选的任何动态生成的链接来防止用户生成的链接创建安全漏洞

rules

> {"enforceDynamicLinks": "always"}如果 href 是动态链接，则强制执行规则（默认）
> {"enforceDynamicLinks": "never"}如果 href 是动态链接，则不执行规则

### 错误示例

```jsx
var Hello = <a target="_blank" href="http://example.com/"></a>;
var Hello = <a target="_blank" href={dynamicLink}></a>;
```

### 正确示例

```jsx
var Hello = <p target="_blank"></p>;
var Hello = (
  <a target="_blank" rel="noopener noreferrer" href="http://example.com"></a>
);
var Hello = <a target="_blank" href="relative/path/in/the/host"></a>;
var Hello = <a target="_blank" href="/absolute/path/in/the/host"></a>;
var Hello = <a></a>;
```

### 参考

- [jsx-filename-extension](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/jsx-filename-extension)
