import{_ as s,c as a,o as n,a as l}from"./app.cc712e45.js";const F=JSON.parse('{"title":"共同维护","description":"","frontmatter":{},"headers":[{"level":2,"title":"翻译文档","slug":"翻译文档","link":"#翻译文档","children":[{"level":3,"title":"翻译文档的流程","slug":"翻译文档的流程","link":"#翻译文档的流程","children":[]},{"level":3,"title":"文档格式","slug":"文档格式","link":"#文档格式","children":[]},{"level":3,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]},{"level":3,"title":"文档示例","slug":"文档示例","link":"#文档示例","children":[]}]}],"relativePath":"guide/script/contribute.md","lastUpdated":1680572974000}'),e={name:"guide/script/contribute.md"},i=l(`<h1 id="共同维护" tabindex="-1">共同维护 <a class="header-anchor" href="#共同维护" aria-hidden="true">#</a></h1><h2 id="翻译文档" tabindex="-1">翻译文档 <a class="header-anchor" href="#翻译文档" aria-hidden="true">#</a></h2><h3 id="翻译文档的流程" tabindex="-1">翻译文档的流程 <a class="header-anchor" href="#翻译文档的流程" aria-hidden="true">#</a></h3><ol><li>找到启用的规则</li><li>找到对应规则的英文文档</li><li>在对应目录下创建对应的中文文档</li></ol><h3 id="文档格式" tabindex="-1">文档格式 <a class="header-anchor" href="#文档格式" aria-hidden="true">#</a></h3><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">规则英文名称</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">用中文描述规则的作用</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">### </span><span style="color:#FFCB6B;">为什么?</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">产生这个规则的原因,以及怎么解决这个问题.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">### </span><span style="color:#FFCB6B;">错误示例</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">用代码示例说明这个规则的错误用法</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">### </span><span style="color:#FFCB6B;">正确示例</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">用代码示例说明这个规则的正确用法</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">### </span><span style="color:#FFCB6B;">参考</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">用无序列表列出参考文档的链接</span></span>
<span class="line"></span></code></pre></div><h3 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-hidden="true">#</a></h3><ol><li>翻译文件必须放在对应插件目录下</li><li>翻译文件必须以规则名命名</li><li>描述规则的作用时,必须包含以下关键字: <code>禁止</code>, <code>必须</code>, <code>建议</code>, <code>不建议</code></li><li>描述为什么时,必须包含如下内容 <ul><li>产生这个规则的原因</li><li>问题引起的后果</li><li>怎么解决这个问题</li></ul></li><li>示例代码必须包含语言标识</li></ol><h3 id="文档示例" tabindex="-1">文档示例 <a class="header-anchor" href="#文档示例" aria-hidden="true">#</a></h3><p>请参考 <code>./docs/guide/script/imports/export.md</code> 文件</p>`,10),p=[i];function c(t,o,r,d,h,u){return n(),a("div",null,p)}const C=s(e,[["render",c]]);export{F as __pageData,C as default};
