import{_ as s,c as a,o as n,a as l}from"./app.71c7e370.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"4.2 一行最宽 80 个字符","slug":"_4-2-一行最宽-80-个字符","link":"#_4-2-一行最宽-80-个字符","children":[]}],"relativePath":"rules/format/print-width.md","lastUpdated":1680654961000}'),e={name:"rules/format/print-width.md"},p=l(`<h3 id="_4-2-一行最宽-80-个字符" tabindex="-1">4.2 一行最宽 80 个字符 <a class="header-anchor" href="#_4-2-一行最宽-80-个字符" aria-hidden="true">#</a></h3><ul><li>BAD</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Ran wawa is a frontend developer that have more than three years expirence in vue &amp; react.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Will you hire him to your company?</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li>GOOD</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Ran wawa is a frontend developer that have more than three years expirence in vue &amp; react.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Will you hire him to your company?</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li>WHY <ul><li>前端一般都是分屏开发,HTML,SCRIPT,CSS 独占一个编辑器窗口</li><li>太宽了难以滚动阅读.</li><li>所以超过 80 个字符就要换行</li></ul></li></ul>`,6),t=[p];function o(r,c,i,D,y,d){return n(),a("div",null,t)}const C=s(e,[["render",o]]);export{_ as __pageData,C as default};