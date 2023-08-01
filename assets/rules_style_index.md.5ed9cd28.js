import{_ as l,c as e,o as i,a}from"./app.71c7e370.js";const p=JSON.parse('{"title":"样式代码","description":"","frontmatter":{},"headers":[{"level":2,"title":"grammar(语法)","slug":"grammar-语法","link":"#grammar-语法","children":[]},{"level":2,"title":"methodology(最佳实践)","slug":"methodology-最佳实践","link":"#methodology-最佳实践","children":[]},{"level":2,"title":"naming(命名风格)","slug":"naming-命名风格","link":"#naming-命名风格","children":[]},{"level":2,"title":"style(格式化)","slug":"style-格式化","link":"#style-格式化","children":[]}],"relativePath":"rules/style/index.md","lastUpdated":1676798319000}'),n={name:"rules/style/index.md"},o=a('<h1 id="样式代码" tabindex="-1">样式代码 <a class="header-anchor" href="#样式代码" aria-hidden="true">#</a></h1><h2 id="grammar-语法" tabindex="-1">grammar(语法) <a class="header-anchor" href="#grammar-语法" aria-hidden="true">#</a></h2><ul><li><a href="./grammar/annotation-no-unknown">annotation-no-unknown</a><ul><li>禁止出现未知的权重标记</li></ul></li><li><a href="./grammar/at-rule-no-unknown">at-rule-no-unknown</a><ul><li>禁止出现未知道的@规则</li></ul></li><li><a href="./grammar/color-no-invalid-hex">color-no-invalid-hex</a><ul><li>禁止非法的 16 进制颜色</li></ul></li><li><a href="./grammar/custom-property-no-missing-var-function">custom-property-no-missing-var-function</a><ul><li>必须使用 var 包裹自定义变量</li></ul></li><li><a href="./grammar/function-linear-gradient-no-nonstandard-direction">function-linear-gradient-no-nonstandard-direction</a><ul><li>禁止出现非法的渐变方向值</li></ul></li><li><a href="./grammar/function-no-unknown">function-no-unknown</a><ul><li>禁止使用非法的函数</li></ul></li><li><a href="./grammar/media-feature-name-no-unknown">media-feature-name-no-unknown</a><ul><li>禁止非法的媒体类型属性</li></ul></li><li><a href="./grammar/named-grid-areas-no-invalid">named-grid-areas-no-invalid</a><ul><li>必须使用正确的命名栅格区域</li></ul></li><li><a href="./grammar/no-invalid-double-slash-comments">no-invalid-double-slash-comments</a><ul><li>禁止使用单行注释</li></ul></li><li><a href="./grammar/no-irregular-whitespace">no-irregular-whitespace</a><ul><li>禁止出现非法空格</li></ul></li><li><a href="./grammar/property-no-unknown">property-no-unknown</a><ul><li>禁止非法的属性名</li></ul></li><li><a href="./grammar/selector-pseudo-class-no-unknown">selector-pseudo-class-no-unknown</a><ul><li>禁止使用非法的伪类选择器</li></ul></li><li><a href="./grammar/selector-pseudo-element-no-unknown">selector-pseudo-element-no-unknown</a><ul><li>禁止非法的伪节点选择器</li></ul></li><li><a href="./grammar/selector-type-no-unknown">selector-type-no-unknown</a><ul><li>禁止使用非法的标签选择器</li></ul></li><li><a href="./grammar/string-no-newline">string-no-newline</a><ul><li>必须使用转义字符换行</li></ul></li></ul><h2 id="methodology-最佳实践" tabindex="-1">methodology(最佳实践) <a class="header-anchor" href="#methodology-最佳实践" aria-hidden="true">#</a></h2><ul><li><a href="./methodology/declaration-block-no-duplicate-custom-properties">declaration-block-no-duplicate-custom-properties</a><ul><li>禁止声明重复的自定义变量</li></ul></li><li><a href="./methodology/declaration-block-no-duplicate-properties">declaration-block-no-duplicate-properties</a><ul><li>禁止声明使用重复的属性</li></ul></li><li><a href="./methodology/declaration-block-no-shorthand-property-overrides">declaration-block-no-shorthand-property-overrides</a><ul><li>禁止简写属性覆盖完整属性</li></ul></li><li><a href="./methodology/font-family-no-duplicate-names">font-family-no-duplicate-names</a><ul><li>禁止出现重复的字体</li></ul></li><li><a href="./methodology/font-family-no-missing-generic-family-keyword">font-family-no-missing-generic-family-keyword</a><ul><li>必须包含通用字体</li></ul></li><li><a href="./methodology/keyframe-block-no-duplicate-selectors">keyframe-block-no-duplicate-selectors</a><ul><li>禁止出现重复的桢</li></ul></li><li><a href="./methodology/keyframe-declaration-no-important">keyframe-declaration-no-important</a><ul><li>禁止在桢中使用 important 标记</li></ul></li><li><a href="./methodology/no-descending-specificity">no-descending-specificity</a><ul><li>禁止低权重选择器出现在高权重选择器后面</li></ul></li><li><a href="./methodology/no-duplicate-at-import-rules">no-duplicate-at-import-rules</a><ul><li>禁止引入重复的外部样式</li></ul></li><li><a href="./methodology/no-duplicate-selectors">no-duplicate-selectors</a><ul><li>禁止使用重复的选择器</li></ul></li></ul><h2 id="naming-命名风格" tabindex="-1">naming(命名风格) <a class="header-anchor" href="#naming-命名风格" aria-hidden="true">#</a></h2><ul><li><a href="./naming/alpha-value-notation">alpha-value-notation</a><ul><li>必须使用数字表示百分比</li></ul></li><li><a href="./naming/at-rule-name-case">at-rule-name-case</a><ul><li>@规则必须使用小写字母</li></ul></li><li><a href="./naming/at-rule-no-vendor-prefix">at-rule-no-vendor-prefix</a><ul><li>禁止在@规则前加浏览器前缀</li></ul></li><li><a href="./naming/color-function-notation">color-function-notation</a><ul><li>必须使用空格作为颜色函数的分隔符</li></ul></li><li><a href="./naming/color-hex-length">color-hex-length</a><ul><li>必须使用简写形式表达 16 进制颜色</li></ul></li><li><a href="./naming/custom-media-pattern">custom-media-pattern</a><ul><li>必须使用烤串风格命令自定义媒体名</li></ul></li><li><a href="./naming/custom-property-pattern">custom-property-pattern</a><ul><li>必须使用烤串风格命名自定义属性</li></ul></li><li><a href="./naming/declaration-block-no-redundant-longhand-properties">declaration-block-no-redundant-longhand-properties</a><ul><li>必须使用简写</li></ul></li><li><a href="./naming/elector-not-notatio">elector-not-notatio</a><ul><li>禁止使用链式的:not 选择器</li></ul></li><li><a href="./naming/function-name-case">function-name-case</a><ul><li>必须使用小写形式的函数</li></ul></li><li><a href="./naming/hue-degree-notation">hue-degree-notation</a><ul><li>必须使用<code>deg</code>表示颜色度数</li></ul></li><li><a href="./naming/import-notation">import-notation</a><ul><li>必须使用字符串形式引入外部资源</li></ul></li><li><a href="./naming/keyframe-selector-notation">keyframe-selector-notation</a><ul><li>必须使用百分比表示动画帧选择器</li></ul></li><li><a href="./naming/keyframes-name-pattern">keyframes-name-pattern</a><ul><li>必须使用小写烤串风格命名动画名</li></ul></li><li><a href="./naming/length-zero-no-unit">length-zero-no-unit</a><ul><li>禁止给 0 值带上单位</li></ul></li><li><a href="./naming/media-feature-name-no-vendor-prefix">media-feature-name-no-vendor-prefix</a><ul><li>禁止在媒体特性前添加浏览器前缀</li></ul></li><li><a href="./naming/number-max-precision">number-max-precision</a><ul><li>禁止小数值超过 2 位数</li></ul></li><li><a href="./naming/property-no-vendor-prefix">property-no-vendor-prefix</a><ul><li>禁止在属性名前加浏览器前缀</li></ul></li><li><a href="./naming/selector-id-pattern">selector-id-pattern</a><ul><li>必须使用小写烤串命名 ID 选择器</li></ul></li><li><a href="./naming/selector-no-vendor-prefix">selector-no-vendor-prefix</a><ul><li>禁止在选择器前使用浏览器前缀</li></ul></li><li><a href="./naming/selector-pseudo-element-colon-notation">selector-pseudo-element-colon-notation</a><ul><li>必须使用两个<code>:</code>标识伪类和伪节点</li></ul></li><li><a href="./naming/selector-type-case">selector-type-case</a><ul><li>必须使用小写瓢节点选择器</li></ul></li><li><a href="./naming/shorthand-property-no-redundant-values">shorthand-property-no-redundant-values</a><ul><li>禁止使用多余的简写属性</li></ul></li><li><a href="./naming/unit-case">unit-case</a><ul><li>必须使用小写标注单位</li></ul></li><li><a href="./naming/value-keyword-case">value-keyword-case</a><ul><li>禁止使用大写标注属性值</li></ul></li></ul><h2 id="style-格式化" tabindex="-1">style(格式化) <a class="header-anchor" href="#style-格式化" aria-hidden="true">#</a></h2><ul><li><a href="./style/at-rule-empty-line-before">at-rule-empty-line-before</a><ul><li>必须在@规则前换行</li></ul></li><li><a href="./style/block-no-empty">block-no-empty</a><ul><li>禁止使用空的样式块</li></ul></li><li><a href="./style/comment-empty-line-before">comment-empty-line-before</a><ul><li>必须在注释前面换行</li></ul></li><li><a href="./style/comment-no-empty">comment-no-empty</a><ul><li>禁止出现空的注释</li></ul></li><li><a href="./style/comment-whitespace-inside">comment-whitespace-inside</a><ul><li>必须在注释符号里面添加一个空格</li></ul></li><li><a href="./style/custom-property-empty-line-before">custom-property-empty-line-before</a><ul><li>必须在自定义属性前换行</li></ul></li><li><a href="./style/font-family-name-quotes">font-family-name-quotes</a><ul><li>必须在字体两边加上引号</li></ul></li><li><a href="./style/function-calc-no-unspaced-operator">function-calc-no-unspaced-operator</a><ul><li>必须在操作符两侧添加空格</li></ul></li><li><a href="./style/function-url-quotes">function-url-quotes</a><ul><li>必须使用引号将 url 函数参数包起来</li></ul></li><li><a href="./style/no-empty-source">no-empty-source</a><ul><li>禁止出现空的样式文件</li></ul></li><li><a href="./style/no-extra-semicolons">no-extra-semicolons</a><ul><li>禁止出现多余的分号</li></ul></li></ul>',9),r=[o];function t(u,m,s,c,d,h){return i(),e("div",null,r)}const g=l(n,[["render",t]]);export{p as __pageData,g as default};