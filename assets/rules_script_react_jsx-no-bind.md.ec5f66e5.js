import{_ as s,c as a,o as n,a as l}from"./app.81b55141.js";const h=JSON.parse('{"title":"jsx-no-bind","description":"","frontmatter":{},"headers":[{"level":3,"title":"为什么?","slug":"为什么","link":"#为什么","children":[]},{"level":3,"title":"错误示例","slug":"错误示例","link":"#错误示例","children":[]},{"level":3,"title":"正确示例","slug":"正确示例","link":"#正确示例","children":[]},{"level":3,"title":"参考","slug":"参考","link":"#参考","children":[]}],"relativePath":"rules/script/react/jsx-no-bind.md","lastUpdated":1676798319000}'),e={name:"rules/script/react/jsx-no-bind.md"},o=l(`<h1 id="jsx-no-bind" tabindex="-1">jsx-no-bind <a class="header-anchor" href="#jsx-no-bind" aria-hidden="true">#</a></h1><p>在 jsx 中限制单行上的 prop 的数量</p><h3 id="为什么" tabindex="-1">为什么? <a class="header-anchor" href="#为什么" aria-hidden="true">#</a></h3><p>检查所有 jsx 元素并验证每行的 prop 数量不超过允许的最大值。如果 prop 的开始和前一个道具的结束之间有换行符，则认为 prop 在新行中。，此规则是关闭的，并且在默认情况下，一行上的最多的 prop 是 1.</p><h3 id="错误示例" tabindex="-1">错误示例 <a class="header-anchor" href="#错误示例" aria-hidden="true">#</a></h3><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Hello</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lastName</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Smith</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">firstName</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">John</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Hello</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">foo</span><span style="color:#89DDFF;">={{</span></span>
<span class="line"><span style="color:#A6ACCD;">    bar</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}}</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">baz</span></span>
<span class="line"><span style="color:#89DDFF;">/&gt;;</span></span>
<span class="line"></span></code></pre></div><h3 id="正确示例" tabindex="-1">正确示例 <a class="header-anchor" href="#正确示例" aria-hidden="true">#</a></h3><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Hello</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">firstName</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">John</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lastName</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Smith</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Hello</span><span style="color:#89DDFF;"> {...this.</span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">} </span><span style="color:#C792EA;">firstName</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">John</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lastName</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Smith</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;;</span></span>
<span class="line"></span></code></pre></div><h3 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-hidden="true">#</a></h3><ul><li><a href="https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/jsx-no-bind" target="_blank" rel="noreferrer">jsx-no-bind</a></li></ul>`,10),p=[o];function t(r,c,i,D,F,d){return n(),a("div",null,p)}const u=s(e,[["render",t]]);export{h as __pageData,u as default};
