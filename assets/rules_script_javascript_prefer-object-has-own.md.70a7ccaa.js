import{_ as a,c as s,o as e,a as n}from"./app.81b55141.js";const y=JSON.parse('{"title":"prefer-object-has-own","description":"","frontmatter":{},"headers":[{"level":3,"title":"为什么?","slug":"为什么","link":"#为什么","children":[]},{"level":3,"title":"错误示例","slug":"错误示例","link":"#错误示例","children":[]},{"level":3,"title":"正确示例","slug":"正确示例","link":"#正确示例","children":[]},{"level":3,"title":"参考","slug":"参考","link":"#参考","children":[]}],"relativePath":"rules/script/javascript/prefer-object-has-own.md","lastUpdated":1676798319000}'),l={name:"rules/script/javascript/prefer-object-has-own.md"},t=n(`<h1 id="prefer-object-has-own" tabindex="-1">prefer-object-has-own <a class="header-anchor" href="#prefer-object-has-own" aria-hidden="true">#</a></h1><p>建议在正则表达式中使用命名捕获组</p><h3 id="为什么" tabindex="-1">为什么? <a class="header-anchor" href="#为什么" aria-hidden="true">#</a></h3><p>命名捕获组可以用于正则表达式中，这可以提高正则表达式的可读性。</p><h3 id="错误示例" tabindex="-1">错误示例 <a class="header-anchor" href="#错误示例" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> foo </span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/(</span><span style="color:#C3E88D;">ba</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">rz</span><span style="color:#89DDFF;">])/</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="正确示例" tabindex="-1">正确示例 <a class="header-anchor" href="#正确示例" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> foo </span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/(?&lt;</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">ba</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">rz</span><span style="color:#89DDFF;">])/</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-hidden="true">#</a></h3><ul><li><a href="https://eslint.org/docs/rules/prefer-object-has-own" target="_blank" rel="noreferrer">prefer-object-has-own</a></li></ul>`,10),r=[t];function o(p,c,i,d,h,D){return e(),s("div",null,r)}const f=a(l,[["render",o]]);export{y as __pageData,f as default};
