import{_ as a,c as s,o as e,a as l}from"./app.81b55141.js";const y=JSON.parse('{"title":"iframe-has-title","description":"","frontmatter":{},"headers":[{"level":3,"title":"错误示例","slug":"错误示例","link":"#错误示例","children":[]},{"level":3,"title":"正确示例","slug":"正确示例","link":"#正确示例","children":[]},{"level":3,"title":"参考","slug":"参考","link":"#参考","children":[]}],"relativePath":"rules/script/react/iframe-has-title.md","lastUpdated":1676798319000}'),n={name:"rules/script/react/iframe-has-title.md"},t=l(`<h1 id="iframe-has-title" tabindex="-1">iframe-has-title <a class="header-anchor" href="#iframe-has-title" aria-hidden="true">#</a></h1><p>元素必须有 lang 属性</p><p>why?</p><p>配置屏幕阅读器时，用户选择默认语言。如果未指定网页的语言，屏幕阅读器将采用用户设置的默认语言。对于说多种语言并以一种以上语言访问网站的用户来说，语言设置成为一个问题。必须指定一种语言并确保其有效，这样网站文本才能正确发音。</p><h3 id="错误示例" tabindex="-1">错误示例 <a class="header-anchor" href="#错误示例" aria-hidden="true">#</a></h3><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="正确示例" tabindex="-1">正确示例 <a class="header-anchor" href="#正确示例" aria-hidden="true">#</a></h3><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">en</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">en-US</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">language</span><span style="color:#89DDFF;">}&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-hidden="true">#</a></h3><ul><li><a href="https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/iframe-has-title" target="_blank" rel="noreferrer">iframe-has-title</a></li></ul>`,10),o=[t];function p(r,c,i,h,d,D){return e(),s("div",null,o)}const u=a(n,[["render",p]]);export{y as __pageData,u as default};
