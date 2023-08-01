import{_ as a,c as e,o as n,a as s}from"./app.71c7e370.js";const D=JSON.parse('{"title":"media-feature-name-no-unknown","description":"","frontmatter":{},"headers":[{"level":3,"title":"为什么?","slug":"为什么","link":"#为什么","children":[]},{"level":3,"title":"错误示例","slug":"错误示例","link":"#错误示例","children":[]},{"level":3,"title":"正确示例","slug":"正确示例","link":"#正确示例","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"relativePath":"rules/style/grammar/media-feature-name-no-unknown.md","lastUpdated":1676798319000}'),l={name:"rules/style/grammar/media-feature-name-no-unknown.md"},t=s(`<h1 id="media-feature-name-no-unknown" tabindex="-1">media-feature-name-no-unknown <a class="header-anchor" href="#media-feature-name-no-unknown" aria-hidden="true">#</a></h1><p>禁止非法的媒体类型属性</p><h3 id="为什么" tabindex="-1">为什么? <a class="header-anchor" href="#为什么" aria-hidden="true">#</a></h3><p>当然是语法错误,请参照文档修改</p><h3 id="错误示例" tabindex="-1">错误示例 <a class="header-anchor" href="#错误示例" aria-hidden="true">#</a></h3><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">@media</span><span style="color:#A6ACCD;"> screen </span><span style="color:#89DDFF;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">unknown </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10px</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="正确示例" tabindex="-1">正确示例 <a class="header-anchor" href="#正确示例" aria-hidden="true">#</a></h3><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">@media</span><span style="color:#A6ACCD;"> screen </span><span style="color:#89DDFF;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">min-width</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10px</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-hidden="true">#</a></h2><ul><li><a href="https://stylelint.io/user-guide/rules/list/media-feature-name-no-unknown" target="_blank" rel="noreferrer">media-feature-name-no-unknown</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media#media_features" target="_blank" rel="noreferrer">media-features mdn</a></li></ul>`,10),o=[t];function r(p,i,c,d,h,u){return n(),e("div",null,o)}const y=a(l,[["render",r]]);export{D as __pageData,y as default};