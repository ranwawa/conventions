# 确保 useState hook 值和 setter 变量的解构和对称命名

why?

> 此规则检查从调用中解构的 value 和 setter 变量是否 React.useState()对称命名
> bad

```jsx
import React from "react";
export default function useColor() {
  // useState call is not destructured into value + setter pair
  const useStateResult = React.useState();
  return useStateResult;
}
```

## good

```jsx
import React from "react";
export default function useColor() {
  // useState call is destructured into value + setter pair whose identifiers
  // follow the [thing, setThing] naming convention
  const [color, setColor] = React.useState();
  return [color, setColor];
}
```

## 参考:

- [iframe-missing-sandbox](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/iframe-missing-sandbox)
