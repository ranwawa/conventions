import{_ as s,c as a,o as n,a as l}from"./app.71c7e370.js";const D=JSON.parse('{"title":"@ranwawa/readmelint","description":"","frontmatter":{},"headers":[{"level":2,"title":"3.1 框架简介","slug":"_3-1-框架简介","link":"#_3-1-框架简介","children":[]},{"level":2,"title":"3.2 目录结构","slug":"_3-2-目录结构","link":"#_3-2-目录结构","children":[]}],"relativePath":"guide/readme/project.md","lastUpdated":1684066764000}'),t={name:"guide/readme/project.md"},e=l(`<h1 id="ranwawa-readmelint" tabindex="-1">@ranwawa/readmelint <a class="header-anchor" href="#ranwawa-readmelint" aria-hidden="true">#</a></h1><h2 id="_3-1-框架简介" tabindex="-1">3.1 框架简介 <a class="header-anchor" href="#_3-1-框架简介" aria-hidden="true">#</a></h2><table><thead><tr><th>分类</th><th>工具</th></tr></thead><tbody><tr><td>开发语言</td><td>typescript</td></tr><tr><td>配置文件识别工具</td><td>cosmiconfig</td></tr><tr><td>配置文件检测工具</td><td>ajv</td></tr><tr><td>markdown 语法转换工作</td><td>marked</td></tr><tr><td>日志工具</td><td>loglevel, chalk</td></tr><tr><td>包管理工具</td><td>pnpm, lerna</td></tr></tbody></table><h2 id="_3-2-目录结构" tabindex="-1">3.2 目录结构 <a class="header-anchor" href="#_3-2-目录结构" aria-hidden="true">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dist</span><span style="color:#A6ACCD;">            </span><span style="color:#676E95;font-style:italic;"># 打包后的目录</span></span>
<span class="line"><span style="color:#FFCB6B;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">src</span><span style="color:#A6ACCD;">             </span><span style="color:#676E95;font-style:italic;"># 源文件目录</span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bin.ts</span><span style="color:#A6ACCD;">      </span><span style="color:#676E95;font-style:italic;"># npm命令文件</span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config.ts</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;"># 配置文件相关函数</span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.ts</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 包入口文件</span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">linter.ts</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;"># 检测相关函数</span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">logger.ts</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;"># 日志相关函数</span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">meow.ts</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;"># 命令行相关配置</span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">└──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">util.ts</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;"># 工具函数</span></span>
<span class="line"><span style="color:#FFCB6B;">└──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">types</span><span style="color:#A6ACCD;">           </span><span style="color:#676E95;font-style:italic;"># ts类型</span></span>
<span class="line"></span></code></pre></div>`,5),o=[e];function p(r,c,C,i,y,d){return n(),a("div",null,o)}const h=s(t,[["render",p]]);export{D as __pageData,h as default};