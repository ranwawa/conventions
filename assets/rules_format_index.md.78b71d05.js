import{_ as s,c as a,o as n,a as l}from"./app.cc712e45.js";const h=JSON.parse('{"title":"代码格式化","description":"","frontmatter":{},"headers":[{"level":3,"title":"4.11 HTML 结点>多行时要换行显示","slug":"_4-11-html-结点-多行时要换行显示","link":"#_4-11-html-结点-多行时要换行显示","children":[]}],"relativePath":"rules/format/index.md","lastUpdated":1680654961000}'),e={name:"rules/format/index.md"},t=l(`<h1 id="代码格式化" tabindex="-1">代码格式化 <a class="header-anchor" href="#代码格式化" aria-hidden="true">#</a></h1><h3 id="_4-11-html-结点-多行时要换行显示" tabindex="-1">4.11 HTML 结点<code>&gt;</code>多行时要换行显示 <a class="header-anchor" href="#_4-11-html-结点-多行时要换行显示" aria-hidden="true">#</a></h3><ul><li>BAD</li></ul><div class="language-react"><button title="Copy Code" class="copy"></button><span class="lang">react</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">&lt;button</span></span>
<span class="line"><span style="color:#A6ACCD;">  className=&quot;prettier-class&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  id=&quot;prettier-id&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  onClick={this.handleClick}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  Click Here</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>-GOOD</p><div class="language-react"><button title="Copy Code" class="copy"></button><span class="lang">react</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">&lt;button</span></span>
<span class="line"><span style="color:#A6ACCD;">  className=&quot;prettier-class&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  id=&quot;prettier-id&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  onClick={this.handleClick}</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  Click Here</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>WHY <ul><li>属性和内容分开展示,便于 CR</li></ul></li></ul>`,7),p=[t];function o(c,i,r,d,C,u){return n(),a("div",null,p)}const _=s(e,[["render",o]]);export{h as __pageData,_ as default};
