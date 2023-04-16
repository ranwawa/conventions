import{_ as s,c as a,o as l,a as n}from"./app.81b55141.js";const h=JSON.parse('{"title":"yield-star-spacing","description":"","frontmatter":{},"headers":[{"level":3,"title":"为什么?","slug":"为什么","link":"#为什么","children":[]},{"level":3,"title":"错误示例","slug":"错误示例","link":"#错误示例","children":[]},{"level":3,"title":"正确示例","slug":"正确示例","link":"#正确示例","children":[]},{"level":3,"title":"参考","slug":"参考","link":"#参考","children":[]}],"relativePath":"rules/script/javascript/yield-star-spacing.md","lastUpdated":1676798319000}'),e={name:"rules/script/javascript/yield-star-spacing.md"},p=n('<h1 id="yield-star-spacing" tabindex="-1">yield-star-spacing <a class="header-anchor" href="#yield-star-spacing" aria-hidden="true">#</a></h1><p>要求或禁止模板字符串中的嵌入表达式周围空格的使用</p><h3 id="为什么" tabindex="-1">为什么? <a class="header-anchor" href="#为什么" aria-hidden="true">#</a></h3><p>我们可以在模板字符串中使用 ${ 和 } 嵌入表达式。</p><h3 id="错误示例" tabindex="-1">错误示例 <a class="header-anchor" href="#错误示例" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">hello, </span><span style="color:#89DDFF;">${</span><span style="color:#A6ACCD;">people</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">!</span><span style="color:#89DDFF;">`</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">hello, </span><span style="color:#89DDFF;">${</span><span style="color:#A6ACCD;">people</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">!</span><span style="color:#89DDFF;">`</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">hello, </span><span style="color:#89DDFF;">${</span><span style="color:#A6ACCD;">people</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">!</span><span style="color:#89DDFF;">`</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span></code></pre></div><h3 id="正确示例" tabindex="-1">正确示例 <a class="header-anchor" href="#正确示例" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">hello, </span><span style="color:#89DDFF;">${</span><span style="color:#A6ACCD;">people</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">!</span><span style="color:#89DDFF;">`</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">hello, </span><span style="color:#89DDFF;">${</span><span style="color:#A6ACCD;">people</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">!</span><span style="color:#89DDFF;">`</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span></code></pre></div><h3 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-hidden="true">#</a></h3><ul><li><a href="https://eslint.org/docs/rules/yield-star-spacing" target="_blank" rel="noreferrer">yield-star-spacing</a></li></ul>',10),o=[p];function t(r,c,i,D,d,y){return l(),a("div",null,o)}const C=s(e,[["render",t]]);export{h as __pageData,C as default};
