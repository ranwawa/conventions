# 强制定义具有显式或隐式角色的元素仅包含 aria-\*受其支持的属性 role

why?

> 许多 ARIA 属性（状态和属性）只能用于具有特定角色的元素。一些元素具有隐含的角色，例如< a href="#" />，将解析为 role="link"。

## bad

```jsx
<!-- Bad: the radio role does not support the aria-required property -->
<ul role="radiogroup" aria-labelledby="foo">
    <li aria-required tabIndex="-1" role="radio" aria-checked="false">Rainbow Trout</li>
    <li aria-required tabIndex="-1" role="radio" aria-checked="false">Brook Trout</li>
    <li aria-required tabIndex="0" role="radio" aria-checked="true">Lake Trout</li>
</ul>
```

## good

```jsx
<!-- Good: the radiogroup role does support the aria-required property -->
<ul role="radiogroup" aria-required aria-labelledby="foo">
    <li tabIndex="-1" role="radio" aria-checked="false">Rainbow Trout</li>
    <li tabIndex="-1" role="radio" aria-checked="false">Brook Trout</li>
    <li tabIndex="0" role="radio" aria-checked="true">Lake Trout</li>
</ul>
```

## 参考:

- [scope](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/scope)
