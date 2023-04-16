import{_ as e,c as a,o as s,a as n}from"./app.81b55141.js";const _=JSON.parse('{"title":"eqeqeq","description":"","frontmatter":{},"headers":[{"level":3,"title":"为什么?","slug":"为什么","link":"#为什么","children":[]},{"level":3,"title":"错误示例","slug":"错误示例","link":"#错误示例","children":[]},{"level":3,"title":"正确示例","slug":"正确示例","link":"#正确示例","children":[]},{"level":3,"title":"参考","slug":"参考","link":"#参考","children":[]}],"relativePath":"rules/script/javascript/eqeqeq.md","lastUpdated":1676798319000}'),l={name:"rules/script/javascript/eqeqeq.md"},t=n(`<h1 id="eqeqeq" tabindex="-1">eqeqeq <a class="header-anchor" href="#eqeqeq" aria-hidden="true">#</a></h1><p>要求点操作符和属性放在同一行</p><h3 id="为什么" tabindex="-1">为什么? <a class="header-anchor" href="#为什么" aria-hidden="true">#</a></h3><p>防止既在点号操作之前也在之后使用换行符。</p><h3 id="错误示例" tabindex="-1">错误示例 <a class="header-anchor" href="#错误示例" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> foo </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> object</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">property</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="正确示例" tabindex="-1">正确示例 <a class="header-anchor" href="#正确示例" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> foo </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> object</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">property</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> bar </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> object</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">property</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-hidden="true">#</a></h3><ul><li><a href="https://eslint.org/docs/rules/eqeqeq" target="_blank" rel="noreferrer">eqeqeq</a></li></ul>`,10),r=[t];function o(p,c,i,d,h,D){return s(),a("div",null,r)}const q=e(l,[["render",o]]);export{_ as __pageData,q as default};
