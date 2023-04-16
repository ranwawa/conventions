import{_ as s,c as a,o,a as n}from"./app.81b55141.js";const i=JSON.parse('{"title":"常见问题","description":"","frontmatter":{},"headers":[{"level":2,"title":"执行npx commitlint --from HEAD~1 --to HEAD --verbose报错","slug":"执行npx-commitlint-from-head-1-to-head-verbose报错","link":"#执行npx-commitlint-from-head-1-to-head-verbose报错","children":[{"level":3,"title":"报错信息","slug":"报错信息","link":"#报错信息","children":[]},{"level":3,"title":"解决方法","slug":"解决方法","link":"#解决方法","children":[]}]},{"level":2,"title":"执行 npm run commit 报错","slug":"执行-npm-run-commit-报错","link":"#执行-npm-run-commit-报错","children":[{"level":3,"title":"报错信息","slug":"报错信息-1","link":"#报错信息-1","children":[]},{"level":3,"title":"解决方法","slug":"解决方法-1","link":"#解决方法-1","children":[]}]}],"relativePath":"guide/commit/QA.md","lastUpdated":1680915224000}'),l={name:"guide/commit/QA.md"},p=n(`<h1 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-hidden="true">#</a></h1><h2 id="执行npx-commitlint-from-head-1-to-head-verbose报错" tabindex="-1">执行<code>npx commitlint --from HEAD~1 --to HEAD --verbose</code>报错 <a class="header-anchor" href="#执行npx-commitlint-from-head-1-to-head-verbose报错" aria-hidden="true">#</a></h2><h3 id="报错信息" tabindex="-1">报错信息 <a class="header-anchor" href="#报错信息" aria-hidden="true">#</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">Error</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">ERR_REQUIRE_ESM</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">: </span><span style="color:#C3E88D;">require</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">of</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ES</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Module</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.../commitlint.config.js</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.../node_modules/.pnpm/cosmiconfig@8.1.3/node_modules/cosmiconfig/dist/loaders.js</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">not</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">supported.</span></span>
<span class="line"><span style="color:#FFCB6B;">commitlint.config.js</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">is</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">treated</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">an</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ES</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">file</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">it</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">is</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">a</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.js</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">file</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">whose</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nearest</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">parent</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">package.json</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">contains</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">type</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">module</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">which</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">declares</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">all</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.js</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">files</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">that</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">scope</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ES</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">modules.</span></span>
<span class="line"><span style="color:#FFCB6B;">Instead</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rename</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commitlint.config.js</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">end</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.cjs,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">change</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">the</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">requiring</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">code</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">use</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dynamic</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">import</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">which</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">is</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">available</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">all</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">CommonJS</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">modules,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">or</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">change</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">type</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">module</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">type</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">commonjs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.../package.json</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">treat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">all</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.js</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">files</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">CommonJS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">using</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.mjs</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">all</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ES</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">modules</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">instead</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">.</span></span>
<span class="line"></span></code></pre></div><h3 id="解决方法" tabindex="-1">解决方法 <a class="header-anchor" href="#解决方法" aria-hidden="true">#</a></h3><p>将 <code>commitlint.config.js</code> 改为 <code>commitlint.config.cjs</code></p><h2 id="执行-npm-run-commit-报错" tabindex="-1">执行 <code>npm run commit</code> 报错 <a class="header-anchor" href="#执行-npm-run-commit-报错" aria-hidden="true">#</a></h2><h3 id="报错信息-1" tabindex="-1">报错信息 <a class="header-anchor" href="#报错信息-1" aria-hidden="true">#</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">✖</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">fatal</span><span style="color:#A6ACCD;">     </span><span style="color:#C3E88D;">Error</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">ERR_REQUIRE_ESM</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">: </span><span style="color:#C3E88D;">require</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">of</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ES</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Module</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.../changelog.config.js</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.../node_modules/.pnpm/git-cz@4.9.0/node_modules/git-cz/dist/cli.js</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">not</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">supported</span></span>
<span class="line"><span style="color:#FFCB6B;">changelog.config.js</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">is</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">treated</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">an</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ES</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">file</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">it</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">is</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">a</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.js</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">file</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">whose</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nearest</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">parent</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">package.json</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">contains</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">type</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">module</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">which</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">declares</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">all</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.js</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">files</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">that</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">scope</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ES</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">modules.</span></span>
<span class="line"><span style="color:#FFCB6B;">Instead</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rename</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">changelog.config.js</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">end</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.cjs,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">change</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">the</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">requiring</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">code</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">use</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dynamic</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">import</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">which</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">is</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">available</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">all</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">CommonJS</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">modules,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">or</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">change</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">type</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">module</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">type</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">commonjs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.../package.json</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">treat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">all</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.js</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">files</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">CommonJS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">using</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.mjs</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">all</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ES</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">modules</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">instead</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="解决方法-1" tabindex="-1">解决方法 <a class="header-anchor" href="#解决方法-1" aria-hidden="true">#</a></h3><p>将 <code>changelog.config.js</code> 改为 <code>changelog.config.cjs</code></p>`,11),e=[p];function t(C,c,r,D,y,A){return o(),a("div",null,e)}const d=s(l,[["render",t]]);export{i as __pageData,d as default};
