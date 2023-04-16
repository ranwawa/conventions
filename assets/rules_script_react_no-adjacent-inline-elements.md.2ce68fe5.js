import{_ as s,c as n,o as a,a as l}from"./app.81b55141.js";const A=JSON.parse('{"title":"no-adjacent-inline-elements","description":"","frontmatter":{},"headers":[{"level":3,"title":"正确示例","slug":"正确示例","link":"#正确示例","children":[]},{"level":3,"title":"参考","slug":"参考","link":"#参考","children":[]}],"relativePath":"rules/script/react/no-adjacent-inline-elements.md","lastUpdated":1676798319000}'),p={name:"rules/script/react/no-adjacent-inline-elements.md"},o=l(`<h1 id="no-adjacent-inline-elements" tabindex="-1">no-adjacent-inline-elements <a class="header-anchor" href="#no-adjacent-inline-elements" aria-hidden="true">#</a></h1><p>禁止不必要的 fragments</p><p>why?</p><p>避免代码冗余</p><blockquote><p>bad</p></blockquote><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;&gt;{</span><span style="color:#A6ACCD;">foo</span><span style="color:#89DDFF;">}&lt;/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;&gt;&lt;</span><span style="color:#FFCB6B;">Foo</span><span style="color:#89DDFF;"> /&gt;&lt;/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;&lt;&gt;</span><span style="color:#A6ACCD;">foo</span><span style="color:#89DDFF;">&lt;/&gt;&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;&gt;&lt;/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Fragment</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">foo</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Fragment</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">React.Fragment</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">foo</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">React.Fragment</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">section</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">section</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">showFullName</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;&gt;{</span><span style="color:#A6ACCD;">fullName</span><span style="color:#89DDFF;">}&lt;/&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;&gt;{</span><span style="color:#A6ACCD;">firstName</span><span style="color:#89DDFF;">}&lt;/&gt;}</span></span>
<span class="line"></span></code></pre></div><h3 id="正确示例" tabindex="-1">正确示例 <a class="header-anchor" href="#正确示例" aria-hidden="true">#</a></h3><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">foo</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Foo</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Foo</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Bar</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;&gt;</span><span style="color:#A6ACCD;">foo </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">bar</span><span style="color:#89DDFF;">}&lt;/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">foo</span><span style="color:#89DDFF;">}&lt;/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> cat </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&gt;</span><span style="color:#A6ACCD;">meow</span><span style="color:#89DDFF;">&lt;/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">SomeComponent</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">SomeComponent</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Fragment</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">key</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">}&gt;{</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#FFCB6B;">Fragment</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">showFullName</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">fullName</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">firstName</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-hidden="true">#</a></h3><ul><li><a href="https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/no-adjacent-inline-elements" target="_blank" rel="noreferrer">no-adjacent-inline-elements</a></li></ul>`,10),e=[o];function t(c,r,F,D,y,i){return a(),n("div",null,e)}const g=s(p,[["render",t]]);export{A as __pageData,g as default};
