import{_ as a,c as s,o as e,a as n}from"./app.81b55141.js";const y=JSON.parse('{"title":"no-unreachable","description":"","frontmatter":{},"headers":[{"level":3,"title":"为什么?","slug":"为什么","link":"#为什么","children":[]},{"level":3,"title":"错误示例","slug":"错误示例","link":"#错误示例","children":[]},{"level":3,"title":"正确示例","slug":"正确示例","link":"#正确示例","children":[]},{"level":3,"title":"参考","slug":"参考","link":"#参考","children":[]}],"relativePath":"rules/script/javascript/no-unreachable.md","lastUpdated":1676798319000}'),l={name:"rules/script/javascript/no-unreachable.md"},o=n(`<h1 id="no-unreachable" tabindex="-1">no-unreachable <a class="header-anchor" href="#no-unreachable" aria-hidden="true">#</a></h1><p>禁止混淆多行表达式</p><h3 id="为什么" tabindex="-1">为什么? <a class="header-anchor" href="#为什么" aria-hidden="true">#</a></h3><p>在换行符没有结束语句的例外情况下，省略分号的键入错误会导致两个不相关的连续行被解释为一个表达式。特别是对于没有分号的编码风格，读者可能会忽略这个错误。尽管在语法上是正确的，但代码在执行时可能会抛出异常。</p><h3 id="错误示例" tabindex="-1">错误示例 <a class="header-anchor" href="#错误示例" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> foo </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">bar</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">baz</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="正确示例" tabindex="-1">正确示例 <a class="header-anchor" href="#正确示例" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> foo </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> bar</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">baz</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-hidden="true">#</a></h3><ul><li><a href="https://eslint.org/docs/rules/no-unreachable" target="_blank" rel="noreferrer">no-unreachable</a></li></ul>`,10),r=[o];function t(p,c,i,d,h,C){return e(),s("div",null,r)}const D=a(l,[["render",t]]);export{y as __pageData,D as default};
