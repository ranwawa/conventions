import{_ as e,c as n,o as t,a}from"./app.71c7e370.js";const u=JSON.parse('{"title":"no-interactive-element-to-noninteractive-role","description":"","frontmatter":{},"headers":[{"level":3,"title":"错误示例","slug":"错误示例","link":"#错误示例","children":[]},{"level":3,"title":"正确示例","slug":"正确示例","link":"#正确示例","children":[]},{"level":3,"title":"参考","slug":"参考","link":"#参考","children":[]}],"relativePath":"rules/script/react/no-interactive-element-to-noninteractive-role.md","lastUpdated":1676798319000}'),s={name:"rules/script/react/no-interactive-element-to-noninteractive-role.md"},l=a(`<h1 id="no-interactive-element-to-noninteractive-role" tabindex="-1">no-interactive-element-to-noninteractive-role <a class="header-anchor" href="#no-interactive-element-to-noninteractive-role" aria-hidden="true">#</a></h1><p>强制不使用分散注意力的元素</p><p>why?</p><p>分散视觉注意力的元素可能会导致视障用户出现可访问性问题。此类元素很可能已被弃用，应避免使用</p><h3 id="错误示例" tabindex="-1">错误示例 <a class="header-anchor" href="#错误示例" aria-hidden="true">#</a></h3><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">marquee</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">blink</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="正确示例" tabindex="-1">正确示例 <a class="header-anchor" href="#正确示例" aria-hidden="true">#</a></h3><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-hidden="true">#</a></h3><ul><li><a href="https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/no-interactive-element-to-noninteractive-role" target="_blank" rel="noreferrer">no-interactive-element-to-noninteractive-role</a></li></ul>`,10),i=[l];function r(o,c,p,d,h,v){return t(),n("div",null,i)}const m=e(s,[["render",r]]);export{u as __pageData,m as default};