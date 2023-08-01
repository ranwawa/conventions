import{_ as e,c as a,o as s,a as n}from"./app.71c7e370.js";const m=JSON.parse('{"title":"at-rule-name-case","description":"","frontmatter":{},"headers":[{"level":3,"title":"为什么?","slug":"为什么","link":"#为什么","children":[]},{"level":3,"title":"错误示例","slug":"错误示例","link":"#错误示例","children":[]},{"level":3,"title":"正确示例","slug":"正确示例","link":"#正确示例","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"relativePath":"rules/style/naming/at-rule-name-case.md","lastUpdated":1676798319000}'),l={name:"rules/style/naming/at-rule-name-case.md"},t=n(`<h1 id="at-rule-name-case" tabindex="-1">at-rule-name-case <a class="header-anchor" href="#at-rule-name-case" aria-hidden="true">#</a></h1><p>@规则必须使用小写字母</p><h3 id="为什么" tabindex="-1">为什么? <a class="header-anchor" href="#为什么" aria-hidden="true">#</a></h3><p>scss 中只能使用小写,在所有语言中统一规范,有利于提高可阅读性</p><h3 id="错误示例" tabindex="-1">错误示例 <a class="header-anchor" href="#错误示例" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">@MEDIA screen {</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="正确示例" tabindex="-1">正确示例 <a class="header-anchor" href="#正确示例" aria-hidden="true">#</a></h3><div class="language-scss"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">@media</span><span style="color:#A6ACCD;"> screen </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-hidden="true">#</a></h2><ul><li><a href="https://stylelint.io/user-guide/rules/list/at-rule-name-case" target="_blank" rel="noreferrer">at-rule-name-case</a></li></ul>`,10),r=[t];function i(c,o,d,p,h,u){return s(),a("div",null,r)}const g=e(l,[["render",i]]);export{m as __pageData,g as default};