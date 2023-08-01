import{_ as s,c as a,o as n,a as e}from"./app.71c7e370.js";const h=JSON.parse('{"title":"tabindex-no-positive","description":"","frontmatter":{},"headers":[{"level":3,"title":"错误示例","slug":"错误示例","link":"#错误示例","children":[]},{"level":3,"title":"正确示例","slug":"正确示例","link":"#正确示例","children":[]},{"level":3,"title":"参考","slug":"参考","link":"#参考","children":[]}],"relativePath":"rules/script/react/tabindex-no-positive.md","lastUpdated":1676798319000}'),l={name:"rules/script/react/tabindex-no-positive.md"},o=e(`<h1 id="tabindex-no-positive" tabindex="-1">tabindex-no-positive <a class="header-anchor" href="#tabindex-no-positive" aria-hidden="true">#</a></h1><p>强制 tabIndex 值不大于零</p><p>why?</p><p>避免使用正 tabIndex 属性值以使页面流与键盘 Tab 键顺序同步</p><h3 id="错误示例" tabindex="-1">错误示例 <a class="header-anchor" href="#错误示例" aria-hidden="true">#</a></h3><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">tabIndex</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">foo</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">tabIndex</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">-1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">bar</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">tabIndex</span><span style="color:#89DDFF;">={</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">baz</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="正确示例" tabindex="-1">正确示例 <a class="header-anchor" href="#正确示例" aria-hidden="true">#</a></h3><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">th</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">scope</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">col</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">th</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">scope</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">scope</span><span style="color:#89DDFF;">} /&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-hidden="true">#</a></h3><ul><li><a href="https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/tabindex-no-positive" target="_blank" rel="noreferrer">tabindex-no-positive</a></li></ul>`,10),t=[o];function p(c,r,i,D,F,d){return n(),a("div",null,t)}const b=s(l,[["render",p]]);export{h as __pageData,b as default};