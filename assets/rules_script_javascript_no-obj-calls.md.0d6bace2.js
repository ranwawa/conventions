import{_ as a,c as s,o as e,a as l}from"./app.71c7e370.js";const _=JSON.parse('{"title":"no-obj-calls","description":"","frontmatter":{},"headers":[{"level":3,"title":"为什么?","slug":"为什么","link":"#为什么","children":[]},{"level":3,"title":"错误示例","slug":"错误示例","link":"#错误示例","children":[]},{"level":3,"title":"正确示例","slug":"正确示例","link":"#正确示例","children":[]},{"level":3,"title":"参考","slug":"参考","link":"#参考","children":[]}],"relativePath":"rules/script/javascript/no-obj-calls.md","lastUpdated":1676798319000}'),n={name:"rules/script/javascript/no-obj-calls.md"},t=l(`<h1 id="no-obj-calls" tabindex="-1">no-obj-calls <a class="header-anchor" href="#no-obj-calls" aria-hidden="true">#</a></h1><p>禁止使用字符类语法中由多个代码点组成的字符</p><h3 id="为什么" tabindex="-1">为什么? <a class="header-anchor" href="#为什么" aria-hidden="true">#</a></h3><p>Unicode 包含由多个编码点组成的字符。RegExp 字符类语法(/[abc]/)不能处理由多个代码点构成的字符;这些字符将分解为每个代码点。</p><h3 id="错误示例" tabindex="-1">错误示例 <a class="header-anchor" href="#错误示例" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">👍</span><span style="color:#89DDFF;">]</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="正确示例" tabindex="-1">正确示例 <a class="header-anchor" href="#正确示例" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">👍</span><span style="color:#89DDFF;">]</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">u</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-hidden="true">#</a></h3><ul><li><a href="https://eslint.org/docs/rules/no-obj-calls" target="_blank" rel="noreferrer">no-obj-calls</a></li></ul>`,10),o=[t];function c(r,i,p,d,h,D){return e(),s("div",null,o)}const u=a(n,[["render",c]]);export{_ as __pageData,u as default};