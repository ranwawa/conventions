import{_ as s,c as a,o as l,a as n}from"./app.71c7e370.js";const A=JSON.parse('{"title":"jsx-max-props-per-line","description":"","frontmatter":{},"headers":[{"level":3,"title":"为什么?","slug":"为什么","link":"#为什么","children":[]},{"level":3,"title":"错误示例","slug":"错误示例","link":"#错误示例","children":[]},{"level":3,"title":"正确示例","slug":"正确示例","link":"#正确示例","children":[]},{"level":3,"title":"参考","slug":"参考","link":"#参考","children":[]}],"relativePath":"rules/script/react/jsx-max-props-per-line.md","lastUpdated":1676798319000}'),p={name:"rules/script/react/jsx-max-props-per-line.md"},o=n(`<h1 id="jsx-max-props-per-line" tabindex="-1">jsx-max-props-per-line <a class="header-anchor" href="#jsx-max-props-per-line" aria-hidden="true">#</a></h1><p>检测缺失 key 值</p><h3 id="为什么" tabindex="-1">为什么? <a class="header-anchor" href="#为什么" aria-hidden="true">#</a></h3><p>避免缺失 key 值，提高 diff 的同级比较的效率，避免原地复用带来的副作用，</p><h3 id="错误示例" tabindex="-1">错误示例 <a class="header-anchor" href="#错误示例" aria-hidden="true">#</a></h3><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">[</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Hello</span><span style="color:#89DDFF;"> /&gt;,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Hello</span><span style="color:#89DDFF;"> /&gt;,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Hello</span><span style="color:#89DDFF;"> /&gt;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">map</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">x</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Hello</span><span style="color:#89DDFF;">&gt;{</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#FFCB6B;">Hello</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Hello</span><span style="color:#89DDFF;"> {...{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> id</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> id</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> caption </span><span style="color:#89DDFF;">}} /&gt;;</span></span>
<span class="line"></span></code></pre></div><h3 id="正确示例" tabindex="-1">正确示例 <a class="header-anchor" href="#正确示例" aria-hidden="true">#</a></h3><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">[</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Hello</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">key</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">first</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Hello</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">key</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">second</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Hello</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">key</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">third</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">map</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">x</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Hello</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">key</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">}&gt;{</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#FFCB6B;">Hello</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Hello</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">key</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">} {...{</span><span style="color:#A6ACCD;"> id</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> caption </span><span style="color:#89DDFF;">}} /&gt;;</span></span>
<span class="line"></span></code></pre></div><h3 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-hidden="true">#</a></h3><ul><li><a href="https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/jsx-max-props-per-line" target="_blank" rel="noreferrer">jsx-max-props-per-line</a></li></ul>`,10),e=[o];function t(r,c,D,F,y,i){return l(),a("div",null,e)}const d=s(p,[["render",t]]);export{A as __pageData,d as default};