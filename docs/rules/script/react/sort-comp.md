# 防止没有子组件的额外结束标签

why?

> 没有子组件的组件可以自行关闭，以避免不必要的额外结束标记。
> bad

```jsx
var HelloJohn = <Hello name="John"></Hello>;

var HelloJohnCompound = <Hello.Compound name="John"></Hello.Compound>;
```

## good

```jsx
var contentContainer = <div className="content"></div>;

var intentionalSpace = <div> </div>;

var HelloJohn = <Hello name="John" />;

var HelloJohnCompound = <Hello.Compound name="John" />;

var Profile = (
  <Hello name="John">
    <img src="picture.png" />
  </Hello>
);

var ProfileCompound = (
  <Hello.Compound name="John">
    <img src="picture.png" />
  </Hello.Compound>
);

var HelloSpace = <Hello> </Hello>;
```

## 参考:

- [sort-comp](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/sort-comp)
