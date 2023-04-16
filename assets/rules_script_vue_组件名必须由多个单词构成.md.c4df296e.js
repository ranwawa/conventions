import{_ as s,c as a,o as n,a as e}from"./app.81b55141.js";const F=JSON.parse('{"title":"组件名必须由多个单词构成","description":"","frontmatter":{},"headers":[{"level":2,"title":"Why?","slug":"why","link":"#why","children":[]},{"level":2,"title":"bad","slug":"bad","link":"#bad","children":[]},{"level":2,"title":"good","slug":"good","link":"#good","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"relativePath":"rules/script/vue/组件名必须由多个单词构成.md","lastUpdated":1675645969000}'),l={name:"rules/script/vue/组件名必须由多个单词构成.md"},t=e(`<h1 id="组件名必须由多个单词构成" tabindex="-1">组件名必须由多个单词构成 <a class="header-anchor" href="#组件名必须由多个单词构成" aria-hidden="true">#</a></h1><h2 id="why" tabindex="-1">Why? <a class="header-anchor" href="#why" aria-hidden="true">#</a></h2><blockquote><p>html 标签全是一个单词,为了一目了然的区分 vue 组件和原生 html 标签,组件统一使用多个单词.</p></blockquote><h2 id="bad" tabindex="-1">bad <a class="header-anchor" href="#bad" aria-hidden="true">#</a></h2><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Order</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="good" tabindex="-1">good <a class="header-anchor" href="#good" aria-hidden="true">#</a></h2><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">CustomerOrder</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-hidden="true">#</a></h2><ul><li><a href="https://eslint.vuejs.org/rules/multi-word-component-names.html" target="_blank" rel="noreferrer">vue/multi-word-component-names</a></li></ul>`,9),o=[t];function p(r,c,i,d,D,h){return n(),a("div",null,o)}const u=s(l,[["render",p]]);export{F as __pageData,u as default};
