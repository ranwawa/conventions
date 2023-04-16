import{_ as s,c as a,o as p,a as n}from"./app.81b55141.js";const C=JSON.parse('{"title":"prefer-read-only-props","description":"","frontmatter":{},"headers":[{"level":3,"title":"正确示例","slug":"正确示例","link":"#正确示例","children":[]},{"level":3,"title":"参考","slug":"参考","link":"#参考","children":[]}],"relativePath":"rules/script/react/prefer-read-only-props.md","lastUpdated":1676798319000}'),o={name:"rules/script/react/prefer-read-only-props.md"},l=n(`<h1 id="prefer-read-only-props" tabindex="-1">prefer-read-only-props <a class="header-anchor" href="#prefer-read-only-props" aria-hidden="true">#</a></h1><p>禁止 JSX props 传播</p><p>why?</p><p>强制任何 JSX 属性都没有传播，有利于可维护性</p><blockquote><p>bad</p></blockquote><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">App</span><span style="color:#89DDFF;"> {...</span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">} /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">MyCustomComponent</span><span style="color:#89DDFF;"> {...</span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">} </span><span style="color:#C792EA;">some_other_prop</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">some_other_prop</span><span style="color:#89DDFF;">} /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">img</span><span style="color:#89DDFF;"> {...</span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">} /&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="正确示例" tabindex="-1">正确示例 <a class="header-anchor" href="#正确示例" aria-hidden="true">#</a></h3><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">src</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> alt</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> props</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">one_prop</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> two_prop</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> otherProps</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">MyCustomComponent</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">one_prop</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">one_prop</span><span style="color:#89DDFF;">} </span><span style="color:#C792EA;">two_prop</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">two_prop</span><span style="color:#89DDFF;">} /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">img</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">src</span><span style="color:#89DDFF;">} </span><span style="color:#C792EA;">alt</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">alt</span><span style="color:#89DDFF;">} /&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-hidden="true">#</a></h3><ul><li><a href="https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/prefer-read-only-props" target="_blank" rel="noreferrer">prefer-read-only-props</a></li></ul>`,10),e=[l];function r(t,c,D,y,F,i){return p(),a("div",null,e)}const A=s(o,[["render",r]]);export{C as __pageData,A as default};
