import{_ as s,c as a,o as n,a as e}from"./app.71c7e370.js";const F=JSON.parse('{"title":"no-negated-in-lhs","description":"","frontmatter":{},"headers":[{"level":3,"title":"为什么?","slug":"为什么","link":"#为什么","children":[]},{"level":3,"title":"错误示例","slug":"错误示例","link":"#错误示例","children":[]},{"level":3,"title":"正确示例","slug":"正确示例","link":"#正确示例","children":[]},{"level":3,"title":"参考","slug":"参考","link":"#参考","children":[]}],"relativePath":"rules/script/javascript/no-negated-in-lhs.md","lastUpdated":1676798319000}'),l={name:"rules/script/javascript/no-negated-in-lhs.md"},t=e(`<h1 id="no-negated-in-lhs" tabindex="-1">no-negated-in-lhs <a class="header-anchor" href="#no-negated-in-lhs" aria-hidden="true">#</a></h1><p>禁止在正则表达式中使用无用的反向引用</p><h3 id="为什么" tabindex="-1">为什么? <a class="header-anchor" href="#为什么" aria-hidden="true">#</a></h3><p>在 JavaScript 正则表达式中，定义一个对属于该模式另一个可选部分的组的反向引用是语法上有效的，一个对出现在反向引用之后的组的反向引用，一个对包含该反向引用的组的反向引用，或者一个对处于负向查找范围内的组的反向引用。</p><h3 id="错误示例" tabindex="-1">错误示例 <a class="header-anchor" href="#错误示例" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">RegExp</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">(a)</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">2(b)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// forward reference to (b)</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">\\1</span><span style="color:#89DDFF;">(</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">)/</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// forward reference to (a)</span></span>
<span class="line"></span></code></pre></div><h3 id="正确示例" tabindex="-1">正确示例 <a class="header-anchor" href="#正确示例" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#89DDFF;">(?:(</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">)|(</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">)</span><span style="color:#F78C6C;">\\2</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// reference to (b)</span></span>
<span class="line"><span style="color:#89DDFF;">/(</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">)</span><span style="color:#F78C6C;">\\1</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// reference to (a)</span></span>
<span class="line"></span></code></pre></div><h3 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-hidden="true">#</a></h3><ul><li><a href="https://eslint.org/docs/rules/no-negated-in-lhs" target="_blank" rel="noreferrer">no-negated-in-lhs</a></li></ul>`,10),o=[t];function p(r,c,i,d,h,D){return n(),a("div",null,o)}const C=s(l,[["render",p]]);export{F as __pageData,C as default};