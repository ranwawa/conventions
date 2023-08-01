import{_ as s,c as a,o as n,a as e}from"./app.71c7e370.js";const y=JSON.parse('{"title":"no-unexpected-multiline","description":"","frontmatter":{},"headers":[{"level":3,"title":"为什么?","slug":"为什么","link":"#为什么","children":[]},{"level":3,"title":"错误示例","slug":"错误示例","link":"#错误示例","children":[]},{"level":3,"title":"正确示例","slug":"正确示例","link":"#正确示例","children":[]},{"level":3,"title":"参考","slug":"参考","link":"#参考","children":[]}],"relativePath":"rules/script/javascript/no-unexpected-multiline.md","lastUpdated":1676798319000}'),l={name:"rules/script/javascript/no-unexpected-multiline.md"},o=e('<h1 id="no-unexpected-multiline" tabindex="-1">no-unexpected-multiline <a class="header-anchor" href="#no-unexpected-multiline" aria-hidden="true">#</a></h1><p>禁止在常规字符串中使用模板文字占位符语法</p><h3 id="为什么" tabindex="-1">为什么? <a class="header-anchor" href="#为什么" aria-hidden="true">#</a></h3><p>当想要使用模板字面量时，很容易使用错误的引号。</p><h3 id="错误示例" tabindex="-1">错误示例 <a class="header-anchor" href="#错误示例" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello ${name}!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello ${name}!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Time: ${12 * 60 * 60 * 1000}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span></code></pre></div><h3 id="正确示例" tabindex="-1">正确示例 <a class="header-anchor" href="#正确示例" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">Hello </span><span style="color:#89DDFF;">${</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">!</span><span style="color:#89DDFF;">`</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">Time: </span><span style="color:#89DDFF;">${</span><span style="color:#F78C6C;">12</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">60</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">60</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1000</span><span style="color:#89DDFF;">}`</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#82AAFF;">templateFunction</span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">Hello </span><span style="color:#89DDFF;">${</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">}`</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span></code></pre></div><h3 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-hidden="true">#</a></h3><ul><li><a href="https://eslint.org/docs/rules/no-unexpected-multiline" target="_blank" rel="noreferrer">no-unexpected-multiline</a></li></ul>',10),p=[o];function t(c,r,i,D,d,F){return n(),a("div",null,p)}const h=s(l,[["render",t]]);export{y as __pageData,h as default};