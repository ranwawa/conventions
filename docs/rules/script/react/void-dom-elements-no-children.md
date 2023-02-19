# void-dom-elements-no-children

禁止使用未导出的 propTypes

why?

为了确保明确导出导入,此规则禁止使用其他组件的 prop 类型，除非它们被显式导入/导出

### 错误示例

```jsx
import SomeComponent from "./SomeComponent";
SomeComponent.propTypes;

var { propTypes } = SomeComponent;

SomeComponent["propTypes"];
```

### 正确示例

```jsx
import SomeComponent, {
  propTypes as someComponentPropTypes,
} from "./SomeComponent";
```

### 参考

- [void-dom-elements-no-children](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/void-dom-elements-no-children)
