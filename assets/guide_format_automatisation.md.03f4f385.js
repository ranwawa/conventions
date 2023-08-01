import{_ as s,c as a,o as n,a as l}from"./app.71c7e370.js";const D=JSON.parse('{"title":"自动格式化","description":"","frontmatter":{},"headers":[{"level":2,"title":"安装依赖","slug":"安装依赖","link":"#安装依赖","children":[]},{"level":2,"title":"在 npm 生命周期中自动激活 husky","slug":"在-npm-生命周期中自动激活-husky","link":"#在-npm-生命周期中自动激活-husky","children":[]},{"level":2,"title":"手动激活 husky","slug":"手动激活-husky","link":"#手动激活-husky","children":[]},{"level":2,"title":"初始化 lint-staged 配置文件","slug":"初始化-lint-staged-配置文件","link":"#初始化-lint-staged-配置文件","children":[]},{"level":2,"title":"在 commit 前自动执行 prettier 命令","slug":"在-commit-前自动执行-prettier-命令","link":"#在-commit-前自动执行-prettier-命令","children":[]},{"level":2,"title":"验证 husky 配置是否生效","slug":"验证-husky-配置是否生效","link":"#验证-husky-配置是否生效","children":[]}],"relativePath":"guide/format/automatisation.md","lastUpdated":1680915224000}'),e={name:"guide/format/automatisation.md"},p=l(`<h1 id="自动格式化" tabindex="-1">自动格式化 <a class="header-anchor" href="#自动格式化" aria-hidden="true">#</a></h1><p>通过<code>npm run lint:style</code>命令手动格式化代码,比较繁琐,一次性格式化所有代码也会引起心智负担,也不利于代码审查</p><p>可通过 <a href="https://github.com/typicode/husky" target="_blank" rel="noreferrer">husky</a> 配合 <a href="https://github.com/okonet/lint-staged" target="_blank" rel="noreferrer">lint-staged</a> 在每次提交信息(commit)之前,对当前更改的文件进行格式化,减少重复的人工操作,避免一次性格式化所有代码引起的心智负担</p><h2 id="安装依赖" tabindex="-1">安装依赖 <a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a></h2><p>npm</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--save-dev</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">husky</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lint-staged</span></span>
<span class="line"></span></code></pre></div><h2 id="在-npm-生命周期中自动激活-husky" tabindex="-1">在 npm 生命周期中自动激活 husky <a class="header-anchor" href="#在-npm-生命周期中自动激活-husky" aria-hidden="true">#</a></h2><p>npm<code>7+</code></p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">set-script</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">prepare</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">husky install</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><p>手动添加到<code>package.json</code>文件中</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">prepare</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">husky install</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="手动激活-husky" tabindex="-1">手动激活 husky <a class="header-anchor" href="#手动激活-husky" aria-hidden="true">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">prepare</span></span>
<span class="line"></span></code></pre></div><h2 id="初始化-lint-staged-配置文件" tabindex="-1">初始化 lint-staged 配置文件 <a class="header-anchor" href="#初始化-lint-staged-配置文件" aria-hidden="true">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{&quot;*.{js,jsx,ts,tsx,vue,json,css,scss,sass,html,md,yaml,yml}&quot;: &quot;prettier --ignore-unknown --write&quot;}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.lintstagedrc</span></span>
<span class="line"></span></code></pre></div><h2 id="在-commit-前自动执行-prettier-命令" tabindex="-1">在 commit 前自动执行 prettier 命令 <a class="header-anchor" href="#在-commit-前自动执行-prettier-命令" aria-hidden="true">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">npx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">husky</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.husky/pre-commit</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">npx lint-staged --allow-empty</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><h2 id="验证-husky-配置是否生效" tabindex="-1">验证 husky 配置是否生效 <a class="header-anchor" href="#验证-husky-配置是否生效" aria-hidden="true">#</a></h2><p>提交工作区代码到暂存区</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">package.json</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">build: 初始化lintstage配置文件</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><p>输出以下信息,表示配置生效</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">✔</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Preparing...</span></span>
<span class="line"><span style="color:#FFCB6B;">✔</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Running</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tasks...</span></span>
<span class="line"><span style="color:#FFCB6B;">✔</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Applying</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">modifications...</span></span>
<span class="line"><span style="color:#FFCB6B;">✔</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Cleaning</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">up...</span></span>
<span class="line"></span></code></pre></div>`,22),t=[p];function o(c,r,i,y,d,C){return n(),a("div",null,t)}const u=s(e,[["render",o]]);export{D as __pageData,u as default};