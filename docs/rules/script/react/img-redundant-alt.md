# iframe 元素必须具有唯一的标题属性以向用户指示其内容

why?

> 屏幕阅读器用户依靠框架标题来描述 frame. 如果标记不包含属性，则快速浏览 frame 和元素对于该技术的用户来说变得困难和混乱

## bad

```jsx
<iframe />
<iframe {...props} />
<iframe title="" />
<iframe title={''} />
<iframe title={``} />
<iframe title={undefined} />
<iframe title={false} />
<iframe title={true} />
<iframe title={42} />
```

## good

```jsx
<iframe title="This is a unique title" />
<iframe title={uniqueTitle} />
```

## 参考:

- [img-redundant-alt](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/img-redundant-alt)
