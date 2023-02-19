# aria-activedescendant-has-tabindex

确保 a 标签是有效的

why?

使用锚点作为按钮很容易造成混乱，而不需要相对复杂的 ARIA 和 CSS 实现，这些实现仅用于创建 HTML 已经提供的元素并且浏览器已经完全可访问地实现

### 错误示例

```jsx
<a onClick={foo} />
<a href="#" onClick={foo} />
<a href={"#"} onClick={foo} />
<a href={`#`} onClick={foo} />
<a href="javascript:void(0)" onClick={foo} />
<a href={"javascript:void(0)"} onClick={foo} />
<a href={`javascript:void(0)`} onClick={foo} />
```

### 正确示例

```jsx
<a href="https://github.com" />
<a href="#section" />
<a href="foo" />
<a href="/foo/bar" />
<a href={someValidPath} />
<a href="https://github.com" onClick={foo} />
<a href="#section" onClick={foo} />
<a href="foo" onClick={foo} />
<a href="/foo/bar" onClick={foo} />
<a href={someValidPath} onClick={foo} />
```

### 参考

- [aria-activedescendant-has-tabindex](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/aria-activedescendant-has-tabindex)
