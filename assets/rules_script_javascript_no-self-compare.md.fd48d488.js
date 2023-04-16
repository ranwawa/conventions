import{_ as s,c as a,o as n,a as l}from"./app.81b55141.js";const A=JSON.parse('{"title":"no-self-compare","description":"","frontmatter":{},"headers":[{"level":3,"title":"为什么?","slug":"为什么","link":"#为什么","children":[]},{"level":3,"title":"错误示例","slug":"错误示例","link":"#错误示例","children":[]},{"level":3,"title":"正确示例","slug":"正确示例","link":"#正确示例","children":[]},{"level":3,"title":"参考","slug":"参考","link":"#参考","children":[]}],"relativePath":"rules/script/javascript/no-self-compare.md","lastUpdated":1676798319000}'),o={name:"rules/script/javascript/no-self-compare.md"},p=l(`<h1 id="no-self-compare" tabindex="-1">no-self-compare <a class="header-anchor" href="#no-self-compare" aria-hidden="true">#</a></h1><p>禁止自身赋值</p><h3 id="为什么" tabindex="-1">为什么? <a class="header-anchor" href="#为什么" aria-hidden="true">#</a></h3><p>自身赋值不起任何作用，可能是由于不完整的重构造成的错误。</p><h3 id="错误示例" tabindex="-1">错误示例 <a class="header-anchor" href="#错误示例" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">foo </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> foo</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">[a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> b] </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> b]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">[a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">b] </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">b]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> b </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="正确示例" tabindex="-1">正确示例 <a class="header-anchor" href="#正确示例" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> obj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> obj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">obj[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">] </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> obj[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">obj[a] </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> obj[a]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-hidden="true">#</a></h3><ul><li><a href="https://eslint.org/docs/rules/no-self-compare" target="_blank" rel="noreferrer">no-self-compare</a></li></ul>`,10),e=[p];function t(r,c,D,C,y,i){return n(),a("div",null,e)}const d=s(o,[["render",t]]);export{A as __pageData,d as default};
