# 共同维护

## 翻译文档

### 翻译文档的流程

1. 找到启用的规则
2. 找到对应规则的英文文档
3. 在对应目录下创建对应的中文文档

### 文档格式

```markdown
# 规则英文名称

用中文描述规则的作用

### 为什么?

产生这个规则的原因,以及怎么解决这个问题.

### 错误示例

用代码示例说明这个规则的错误用法

### 正确示例

用代码示例说明这个规则的正确用法

### 参考

用无序列表列出参考文档的链接
```

### 注意事项

1. 翻译文件必须放在对应插件目录下
2. 翻译文件必须以规则名命名
3. 描述规则的作用时,必须包含以下关键字: `禁止`, `必须`, `建议`, `不建议`
4. 描述为什么时,必须包含如下内容
   - 产生这个规则的原因
   - 问题引起的后果
   - 怎么解决这个问题
5. 示例代码必须包含语言标识

### 文档示例

请参考 `./docs/guide/script/imports/export.md` 文件