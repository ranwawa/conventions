# 当元素是多行时需要在 jsx 的第一个 prop 是在新的一行

why?

> 确保第一个属性的正确位置

rules

该规则检查所有 JSX 元素的第一个属性是否正确放置。有可能的配置：

> always：第一个属性应始终放在新行上。
> never: 第一个属性不应该放在新的一行，例如应该总是和组件开始标签在同一行。
> multiline：当 JSX 标签占用多行时，第一个属性应始终放在新行上。
> multiline-multiprop：如果 JSX 标记占用多行并且有多个属性，则应始终将第一个属性放在新行上。这就是默认值。

## 参考:

- [jsx-equals-spacing](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/jsx-equals-spacing)
