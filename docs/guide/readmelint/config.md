# @ranwawa/readmelint

如果默认配置无法满足实际项目需求,可自定义 readme 配置文件

## 4.1 配置文件

配置文件可以使用如下名称

- .readmelintrc
- .readmelintrc.js
- .readmelintrc.json
- .readmelintrc.yaml

## 4.2 配置项

配置是一个对象数组`Config[]`

Config 配置项属性

- type: `enum` 必填
  - heading: 标题
  - paragraph: 段落
  - table: 表格
  - code: 代码块
- depth: `[enum]`
  - 1-7: 标题级别
- text: `[string]` 节点内容,如果填了节点内容就必须保持一致
- description: `[string]` 节点描述,用于示例和错误提示

配置示例

````json
[
  {
    "type": "heading",
    "depth": 1,
    "text": "readmelint"
  },
  {
    "type": "code",
    "description": "使用代码块```,输出项目目录结构并加以说明主要功能,如:src/,pages/,.husky"
  }
]
````
