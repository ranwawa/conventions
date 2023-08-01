import{_ as s,c as a,o as n,a as l}from"./app.71c7e370.js";const d=JSON.parse('{"title":"自动验证 commit 信息","description":"","frontmatter":{},"headers":[{"level":2,"title":"安装依赖","slug":"安装依赖","link":"#安装依赖","children":[]},{"level":2,"title":"在 npm 生命周期中自动激活 husky","slug":"在-npm-生命周期中自动激活-husky","link":"#在-npm-生命周期中自动激活-husky","children":[]},{"level":2,"title":"手动激活 husky","slug":"手动激活-husky","link":"#手动激活-husky","children":[]},{"level":2,"title":"在 commit 前自动执行 commitlint","slug":"在-commit-前自动执行-commitlint","link":"#在-commit-前自动执行-commitlint","children":[]},{"level":2,"title":"验证 husky 配置是否生效","slug":"验证-husky-配置是否生效","link":"#验证-husky-配置是否生效","children":[]}],"relativePath":"guide/commit/automatisation.md","lastUpdated":1680915224000}'),p={name:"guide/commit/automatisation.md"},o=l(`<h1 id="自动验证-commit-信息" tabindex="-1">自动验证 commit 信息 <a class="header-anchor" href="#自动验证-commit-信息" aria-hidden="true">#</a></h1><p>通过<code>npx commitlint --from HEAD~1 --to HEAD --verbose</code>命令手动验证提交信息,比较繁琐</p><p>可通过 <a href="https://github.com/typicode/husky" target="_blank" rel="noreferrer">husky</a> 在每次提交信息(commit)之前,对当前提前信息进行验证,从而避免提交错误的提交信息</p><h2 id="安装依赖" tabindex="-1">安装依赖 <a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a></h2><p>npm</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--save-dev</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">husky</span></span>
<span class="line"></span></code></pre></div><h2 id="在-npm-生命周期中自动激活-husky" tabindex="-1">在 npm 生命周期中自动激活 husky <a class="header-anchor" href="#在-npm-生命周期中自动激活-husky" aria-hidden="true">#</a></h2><p>npm<code>7+</code></p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">set-script</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">prepare</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">husky install</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><p>手动添加到<code>package.json</code>文件中</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">prepare</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">husky install</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="手动激活-husky" tabindex="-1">手动激活 husky <a class="header-anchor" href="#手动激活-husky" aria-hidden="true">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">prepare</span></span>
<span class="line"></span></code></pre></div><h2 id="在-commit-前自动执行-commitlint" tabindex="-1">在 commit 前自动执行 commitlint <a class="header-anchor" href="#在-commit-前自动执行-commitlint" aria-hidden="true">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">npx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">husky</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.husky/commit-msg</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">npx --no-install commitlint --edit $1</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="验证-husky-配置是否生效" tabindex="-1">验证 husky 配置是否生效 <a class="header-anchor" href="#验证-husky-配置是否生效" aria-hidden="true">#</a></h2><p>提交一个错误的 commit message</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.husky/commit-msg</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">通过husky自动运行commitlint进行验证</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><p>输出以下信息,表示配置生效</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">⧗</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">input:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">通过husky自动运行commitlint进行验证</span></span>
<span class="line"><span style="color:#FFCB6B;">✖</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">may</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">not</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">be</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">empty</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">type-empty</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#FFCB6B;">✖</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">subject</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">may</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">not</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">be</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">empty</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">subject-empty</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">husky</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit-msg</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">hook</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">exited</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">with</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">code</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">error</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div>`,20),e=[o];function t(c,r,i,y,C,D){return n(),a("div",null,e)}const m=s(p,[["render",t]]);export{d as __pageData,m as default};