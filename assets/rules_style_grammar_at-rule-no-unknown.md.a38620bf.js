import{_ as a,c as e,o as n,a as s}from"./app.81b55141.js";const k=JSON.parse('{"title":"at-rule-no-unknown","description":"","frontmatter":{},"headers":[{"level":3,"title":"为什么?","slug":"为什么","link":"#为什么","children":[]},{"level":3,"title":"错误示例","slug":"错误示例","link":"#错误示例","children":[]},{"level":3,"title":"正确示例","slug":"正确示例","link":"#正确示例","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"relativePath":"rules/style/grammar/at-rule-no-unknown.md","lastUpdated":1676798319000}'),l={name:"rules/style/grammar/at-rule-no-unknown.md"},t=s(`<h1 id="at-rule-no-unknown" tabindex="-1">at-rule-no-unknown <a class="header-anchor" href="#at-rule-no-unknown" aria-hidden="true">#</a></h1><p>禁止出现未知道的@规则</p><h3 id="为什么" tabindex="-1">为什么? <a class="header-anchor" href="#为什么" aria-hidden="true">#</a></h3><p>防止打错字导致样式失效,已知的标记如: <code>@media</code> <code>@charset</code>.请检查输入是否错误</p><h3 id="错误示例" tabindex="-1">错误示例 <a class="header-anchor" href="#错误示例" aria-hidden="true">#</a></h3><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">@unknown</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="正确示例" tabindex="-1">正确示例 <a class="header-anchor" href="#正确示例" aria-hidden="true">#</a></h3><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">@meida</span><span style="color:#A6ACCD;"> (max-width: 960px) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-hidden="true">#</a></h2><ul><li><a href="https://stylelint.io/user-guide/rules/list/at-rule-no-unknown" target="_blank" rel="noreferrer">at-rule-no-unknown</a></li></ul>`,10),r=[t];function o(i,c,d,p,h,u){return n(),e("div",null,r)}const m=a(l,[["render",o]]);export{k as __pageData,m as default};
