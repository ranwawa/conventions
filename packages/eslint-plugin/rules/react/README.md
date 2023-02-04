# react

## 强制在 JSX 属性中一致地使用双引号或单引号

Why?

> 统一代码规范，全使用双引号或全使用单引号

bad

```js
/*eslint jsx-quotes: ["error", "prefer-single"]*/
<a b="c" />
```

good

```js
/*eslint jsx-quotes: ["error", "prefer-single"]*/

<a b='c' />
<a b="'" />
```

## 防止 React 组件定义中缺少 displayName

Why?

> displayName 允许你命名你的组件。React 在调试消息时使用此名称。

bad

```js
var Hello = createReactClass({
  render: function () {
    return <div>Hello {this.props.name}</div>;
  },
});

const Hello = React.memo(({ a }) => {
  return <>{a}</>;
});

export default ({ a }) => {
  return <>{a}</>;
};
```

good

```js
var Hello = createReactClass({
  displayName: 'Hello',
  render: function () {
    return <div>Hello {this.props.name}</div>;
  },
});

const Hello = React.memo(function Hello({ a }) {
  return <>{a}</>;
});
```

## 禁止使用一些指定的 propTypes

Why?

> 此规则是一种格式化/记录偏好，不遵循它不会对您的代码质量产生负面影响。此规则鼓励更具体地记录其使用的道具类型

## 禁止 DOM 节点上的某些 props（此规则仅适用于 DOM 节点（例如 div）而不适用于组件（例如< Component/>））

Why?

> 使代码更规范，例如 forbid 的是 style 的话就禁止使用了内联样式

bad

```js
// [1, { "forbid": ["id"] }]
<div id="Joe" />
```

```js
// [1, { "forbid": ["style"] }]
<div style={{ color: 'red' }} />
```

good

```js
// [1, { "forbid": ["id"] }]
<Hello id="foo" />
```

```js
// [1, { "forbid": ["id"] }]
<Hello id={{ color: 'red' }} />
```

## 验证 jsx 中闭合括号的位置

Why?

> 使代码更规范，此规则检查所有 JSX 多行元素并验证右括号的位置。默认情况下，这个必须与开始标签对齐。

bad

```js
<Hello lastName="Smith" firstName="John" />;

<Hello lastName="Smith" firstName="John" />;
```

good

```js
<Hello firstName="John" lastName="Smith" />;

<Hello firstName="John" lastName="Smith" />;
```

## 验证 jsx 中的结束标签位置

Why?

> 使代码更规范，此规则检查所有带有子元素（非自闭合）的 JSX 多行元素并验证结束标记的位置。期望是结束标签与开始标签在其自己的行上对齐。

bad

```js
<Hello>marklar</Hello>
```

good

```js
<Hello>
  marklar
</Hello>

<Hello>marklar</Hello>
```

## 在 jsx 属性和表达式中强制要求或禁止大括号内的空格

Why?

> 旨在保持 JSX 属性内部的间距和子元素内部的表达式的一致性

options

> {"when": "always"}在花括号内强制使用空格
> {"when": "never"}大括号内不允许有空格（默认）

## 在 jsx 中强制执行事件处理函数的命名规范

Why?

> 确保用于处理事件的任何组件 prop 方法都带有正确的前缀。

bad

```js

<MyComponent handleChange={this.handleChange} />

<MyComponent onChange={this.componentChanged} />
```

good

```js
<MyComponent onChange={this.handleChange} />

<MyComponent onChange={this.props.onFoo} />
```

options

```js
"react/jsx-handler-names": [<enabled>, {
  "eventHandlerPrefix": <eventHandlerPrefix>,
  "eventHandlerPropPrefix": <eventHandlerPropPrefix>,
  "checkLocalVariables": <boolean>,
  "checkInlineFunction": <boolean>
}]
```

eventHandlerPrefix: 用作事件处理程序的组件方法的前缀。默认为 handle
eventHandlerPropPrefix: 用作事件处理程序的道具的前缀。默认为 on
checkLocalVariables：确定是否检查存储为局部变量的事件处理程序。默认为 false
checkInlineFunction：确定是否检查设置为内联函数的事件处理程序。默认为 false

## 验证 jsx 中的 props 缩进

Why?

> 规则旨在强制执行一致的缩进样式，统一代码规范，默认样式是 4 spaces.

bad

```js
// 2 spaces indentation
<Hello
  firstName="John"
/>

// no indentation
<Hello
firstName="John"
/>

// 1 tab indentation
<Hello
  firstName="John"
/>

```

good

```js
<Hello firstName="John" />
```

## 检测缺失 key 值

Why?

> 避免缺失 key 值，提高 diff 的同级比较的效率，避免原地复用带来的副作用，

bad

```js
[<Hello />, <Hello />, <Hello />];

data.map((x) => <Hello>{x}</Hello>);

<Hello {...{ key: id, id, caption }} />;
```

good

```js
[<Hello key="first" />, <Hello key="second" />, <Hello key="third" />];

data.map((x) => <Hello key={x.id}>{x}</Hello>);

<Hello key={id} {...{ id, caption }} />;
```

## 在 jsx 中限制单行上的 prop 的数量

Why?

> 检查所有 jsx 元素并验证每行的 prop 数量不超过允许的最大值。如果 prop 的开始和前一个道具的结束之间有换行符，则认为 prop 在新行中。，此规则是关闭的，并且在默认情况下，一行上的最多的 prop 是 1.

bad

```js
<Hello lastName="Smith" firstName="John" />;

<Hello
  foo={{
    bar,
  }}
  baz
/>;
```

good

```js
<Hello firstName="John" lastName="Smith" />;

<Hello {...this.props} firstName="John" lastName="Smith" />;
```

options

```js
"react/jsx-max-props-per-line": [<enabled>, { "maximum": <number>, "when": <string> }]

// OR

"react/jsx-max-props-per-line": [<enabled>, { "maximum": { "single": <number>, "multi": <number> } }]
```

maximum
单行允许的最大 prop 数。默认为 1
可以将最大值指定为对象{ single: 1, multi: 1 }，以指定单行和多行标签的最大允许 prop 数
when
仅当 maximum 指定为数字时才应用。

可能的值：

always（默认） - 始终检查每行的最大 prop 数
multiline- 仅当 jsx 标记跨越多行时检查每行的最大 prop 数

## 在 jsx 中禁止使用.bind()或箭头函数

Why?

> jsx 中的 bind 调用或箭头函数将在每个渲染上创建一个全新的函数。这对性能不利，因为如果将全新的函数作为 prop 传递给组件，该组件使用对 prop 的引用相等性检查来确定它是否应该更新，这可能会导致不必要的重新渲染

bad

```js
<Foo onClick={this._handleClick.bind(this)}></Foo>

<Foo onClick={() => console.log('Hello!')}></Foo>

function onClick() { console.log('Hello!'); }

<Foo onClick={onClick} />
```

good

```js
<Foo onClick={this._handleClick}></Foo>
```

options

```js
"react/jsx-no-bind": [<enabled>, {
  "ignoreDOMComponents": <boolean> || false,
  "ignoreRefs": <boolean> || false,
  "allowArrowFunctions": <boolean> || false,
  "allowFunctions": <boolean> || false,
  "allowBind": <boolean> || false
}]
```

## 防止 jsx 中的重复属性

Why?

> 创建具有重复 props 的 JSX 元素可能会导致应用程序出现意外行为

bad

```js
<Hello name="John" name="John" />
```

good

```js
<Hello firstname="John" lastname="Doe" />
```

options

```js
"react/jsx-no-duplicate-props": [<enabled>, { "ignoreCase": <boolean> }]
```

## 防止在 jsx 中使用字符串

Why?

> 强制保持一致性，减少语法突出显示问题

bad

```js
var Hello = <div>test</div>;
```

good

```js
var Hello = <div>{'test'}</div>;
```

options

```js
"react/jsx-no-literals": [<enabled>, {"noStrings": true, "allowedStrings": ["allowed"], "ignoreProps": false, "noAttributeStrings": true }]
```

支持的选项有：

noStrings（默认值 false：） - 不强制使用字符串作为子项，不管是包裹还是未包裹的
allowedStrings- 一组唯一的字符串值，否则会发出警告，但将被忽略。
ignoreProps（默认值：false）- 当设置为 true 时，规则忽略 prop 中使用的文字，不管是包裹还是未包裹的。
noAttributeStrings（默认值：false）-当设置为 true 时，不强制在属性中使用字符串

## 禁止使用在 jsx 中未声明的变量

Why?

> 此规则有助于定位因拼写错误或缺少组件而导致的潜在引用错误

bad

```js
<Hello name="John" />;
// will ignore Text in the global scope and warn
var Hello = React.createClass({
  render: function () {
    return <Text>Hello</Text>;
  },
});
module.exports = Hello;
```

good

```js
var Hello = require('./Hello');

<Hello name="John" />;
```

options

```js
"react/jsx-no-undef": [<enabled>, { "allowGlobals": <boolean> }]
```

支持的选项有：

allowGlobals:当设置为 true 检查定义的组件时，规则将考虑全局范围

## 为用户定义的 jsx 组件强制执行驼峰拼写法

Why?

> 为了统一编码风格

bad

```js
<Test_component />

<TEST_COMPONENT />
```

good

```js
<TestComponent />

<TestComponent>
  <div />
</TestComponent>
```

options

```js
"react/jsx-pascal-case": [<enabled>, { allowAllCaps: <allowAllCaps>, allowNamespace: <allowNamespace>, allowLeadingUnderscore: <allowLeadingUnderscore>, ignore: <ignore> }]
```

支持的选项有：

enabled：用于启用规则。0=关闭，1=警告，2=错误。默认为 0
allowAllCaps: 可选的布尔值设置为 true 允许组件名称全部大写（默认为 false）
allowLeadingUnderscore: 可选布尔值设置为 true 允许以下划线开头的组件名称（默认为 false）
allowNamespace: 可选布尔值设置为 true 忽略命名空间组件（默认为 false）
ignore：在验证期间要忽略的组件名称的可选字符串数组（支持 minimatch -style glob）

## 强制 propTypes 声明按字母排序

Why?

> 以便以后更容易找到必要的声明

bad

```js
var Component = createReactClass({
  propTypes: {
    z: PropTypes.number,
    a: PropTypes.any,
    b: PropTypes.string
  },
...
});
```

good

```js
var Component = createReactClass({
  propTypes: {
    a: PropTypes.number,
    b: PropTypes.any,
    c: PropTypes.string
  },
...
});
```

options

```js
"react/sort-prop-types": [<enabled>, {
  "callbacksLast": <boolean>,
  "ignoreCase": <boolean>,
  "requiredFirst": <boolean>,
  "sortShapeProp": <boolean>,
  "noSortAlphabetically": <boolean>
}]
```

支持的选项有：
ignoreCase：当设置为 true 时，排序时忽略声明的大小写
callbacksLast：当设置为 true 时，以“on”开头的 propTypes 必须列在所有其他 props 之后
requiredFirst：当设置为 true 时，必须的 propTypes 必须列在所有其他 props 之前
sortShapeProp：当设置为 true 时，定义在 PropTypes.shap 中的 props 必须按照与顶级 props 相同的规则进行排序
noSortAlphabetically：当设置为 true 时，不强制按字母排序

## 强制 props 按字母排序

Why?

> 以便以后更容易找到必要的 props

bad

```js
<Hello lastName="Smith" firstName="John" />
```

good

```js
<Hello firstName="John" lastName="Smith" />;
<Hello tel={5555555} {...this.props} firstName="John" lastName="Smith" />;
```

options

```js
"react/jsx-sort-props": [<enabled>, {
  "callbacksLast": <boolean>,
  "shorthandFirst": <boolean>,
  "shorthandLast": <boolean>,
  "multiline": "ignore" | "first" | "last",
  "ignoreCase": <boolean>,
  "noSortAlphabetically": <boolean>,
  "reservedFirst": <boolean>|<array<string>>,
  "locale": "auto" | "any valid locale"
}]
```

支持的选项有：
ignoreCase：当设置为 true 时，排序时忽略 props 的大小写
callbacksLast：当设置为 true 时，callbacks 必须在所有其他 props 之后列出
shorthandLast：当设置为 true 时，短的 props 列在其他 props 之后（除非 callbacksLast 已设置），但仍依照字母排序
multiline
多行 props 的强制排序
ignore：排序时不会考虑多行 props
first: 多行 props 必须在所有其他 props 之前列出（除非 shorthandFirst 已设置），但仍然依照字母顺序
last: 多行 props 必须列在所有其他 props 之后（除非设置了 callbacksLast 或 shorthandLast），但仍然依照字母顺序

## 强制 defaultProps 声明按字母排序

Why?

> 以便以后更容易找到必要的声明

bad

```js
var Component = createReactClass({
...
  getDefaultProps: function() {
    return {
      z: "z",
      a: "a",
      b: "b"
    };
  },
...
});

class Component extends React.Component {
  ...
}
Component.defaultProps = {
  z: "z",
  a: "a",
  b: "b"
};
```

good

```js
var Component = createReactClass({
...
  getDefaultProps: function() {
    return {
      a: "a",
      b: "b",
      c: "c"
    };
  },
...
});

class Component extends React.Component {
  ...
}
Component.defaultProps = {
  a: "a",
  b: "b",
  c: "c"
};
```

options

```js
"react/jsx-sort-default-props": [<enabled>, {
  "ignoreCase": <boolean>,
}]
```

支持的选项有：
ignoreCase：当设置为 true 时，排序时忽略大小写

## 防止 React 被错误地标记为未使用

bad

```js
var React = require('react');
// nothing to do with React

/** @jsx Foo */
var React = require('react');
var Hello = <div>Hello {this.props.name}</div>;
```

good

```js
var React = require('react');
var Hello = <div>Hello {this.props.name}</div>;

/** @jsx Foo */
var Foo = require('foo');
var Hello = <div>Hello {this.props.name}</div>;
```

## 防止 jsx 中使用的变量被错误地标记为未使用

bad

```js
var Hello = require('./Hello');
```

good

```js
var Hello = require('./Hello');
<Hello name="John" />;
```

## 防止 react 被错误地标记为未使用

bad

```js
var React = require('react');
// nothing to do with React

/** @jsx Foo */
var React = require('react');
var Hello = <div>Hello {this.props.name}</div>;
```

good

```js
var React = require('react');
var Hello = <div>Hello {this.props.name}</div>;

/** @jsx Foo */
var Foo = require('foo');
var Hello = <div>Hello {this.props.name}</div>;
```

## 防止使用危险的 jsx 属性

why?

> React 中的危险属性是那些已知其行为是应用程序漏洞的常见来源的属性。属性名称清楚地表明它们是危险的，除非非常小心，否则应避免使用。

bad

```js
var React = require('react');
var Hello = <div dangerouslySetInnerHTML={{ __html: 'Hello World' }}></div>;
```

good

```js
var React = require('react');
var Hello = <div>Hello World</div>;
```

## 防止使用不推荐的方法

why?

> 防止使用不推荐的方法，避免用到废弃的方法

bad

```js
React.render(<MyComponent />, root);

React.unmountComponentAtNode(root);

React.findDOMNode(this.refs.foo);

React.renderToString(<MyComponent />);

React.renderToStaticMarkup(<MyComponent />);

React.createClass({ /* Class object */ });

const propTypes = {
  foo: PropTypes.bar,
};

//Any factories under React.DOM
React.DOM.div();

import React, { PropTypes } from 'react';

// old lifecycles (since React 16.9)
componentWillMount() { }
componentWillReceiveProps() { }
componentWillUpdate() { }
```

good

```js
ReactDOM.render(<MyComponent />, root);

// When [1, {"react": "0.13.0"}]
ReactDOM.findDOMNode(this.refs.foo);

import { PropTypes } from 'prop-types';

UNSAFE_componentWillMount() { }
UNSAFE_componentWillReceiveProps() { }
UNSAFE_componentWillUpdate() { }
```

## 防止在 componentDidMoun 中使用 setState

why?

> 在组件挂载后更新状态将触发第二次 render()调用，并可能导致属性/布局抖动

bad

```js
var Hello = createReactClass({
  componentDidMount: function () {
    this.setState({
      name: this.props.name.toUpperCase(),
    });
  },
  render: function () {
    return <div>Hello {this.state.name}</div>;
  },
});
```

good

```js
var Hello = createReactClass({
  componentDidMount: function () {
    this.onMount(function callback(newName) {
      this.setState({
        name: newName,
      });
    });
  },
  render: function () {
    return <div>Hello {this.state.name}</div>;
  },
});
```

options

```js
"react/no-did-mount-set-state": [<enabled>, <mode>]
```

## 防止在 componentDidUpdate 中使用 setState

why?

> 在组件挂载后更新状态将触发第二次 render()调用，并可能导致属性/布局抖动

bad

```js
var Hello = createReactClass({
  componentDidUpdate: function () {
    this.setState({
      name: this.props.name.toUpperCase(),
    });
  },
  render: function () {
    return <div>Hello {this.state.name}</div>;
  },
});
```

good

```js
var Hello = createReactClass({
  componentDidUpdate: function () {
    this.onUpdate(function callback(newName) {
      this.setState({
        name: newName,
      });
    });
  },
  render: function () {
    return <div>Hello {this.props.name}</div>;
  },
});
```

options

```js
"react/no-did-update-set-state": [<enabled>, <mode>]
```

## 防止在 componentWillUpdate 中使用 setState

why?

> 在 componentWillUpdate 步骤期间更新状态可能会导致组件状态不确定并且是不允许的

bad

```js
var Hello = createReactClass({
  componentWillUpdate: function () {
    this.setState({
      name: this.props.name.toUpperCase(),
    });
  },
  render: function () {
    return <div>Hello {this.state.name}</div>;
  },
});
```

good

```js
var Hello = createReactClass({
  componentWillUpdate: function () {
    this.prepareHandler(function callback(newName) {
      this.setState({
        name: newName,
      });
    });
  },
  render: function () {
    return <div>Hello {this.props.name}</div>;
  },
});
```

options

```js
"react/no-will-update-set-state": [<enabled>, <mode>]
```

## 防止 this.state 的直接改变

why?

> this.state 不能直接改变值，要用 this.setState()

bad

```js
var Hello = createReactClass({
  componentDidMount: function () {
    this.state.name = this.props.name.toUpperCase();
  },
  render: function () {
    return <div>Hello {this.state.name}</div>;
  },
});

class Hello extends React.Component {
  constructor(props) {
    super(props);

    // Assign at instance creation time, not on a callback
    doSomethingAsync(() => {
      this.state = 'bad';
    });
  }
}
```

good

```js
var Hello = createReactClass({
  componentDidMount: function() {
    this.setState({
      name: this.props.name.toUpperCase();
    });
  },
  render: function() {
    return <div>Hello {this.state.name}</div>;
  }
});

class Hello extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      foo: 'bar',
    }
  }
}
```

## 防止使用 isMounted

why?

> isMounted 是一种反模式，在使用 ES6 类时不可用，并且正在被正式弃用

bad

```js
var Hello = createReactClass({
  handleClick: function () {
    setTimeout(function () {
      if (this.isMounted()) {
        return;
      }
    });
  },
  render: function () {
    return <div onClick={this.handleClick.bind(this)}>Hello</div>;
  },
});
```

good

```js
var Hello = createReactClass({
  render: function () {
    return <div onClick={this.props.handleClick}>Hello</div>;
  },
});
```

## 防止每个文件定义多个组件

why?

> 每个文件只声明一个组件可以提高组件的可读性和可重用性

bad

```js
var Hello = createReactClass({
  render: function () {
    return <div>Hello {this.props.name}</div>;
  },
});

var HelloJohn = createReactClass({
  render: function () {
    return <Hello name="John" />;
  },
});
```

good

```js
var Hello = require('./components/Hello');

var HelloJohn = createReactClass({
  render: function () {
    return <Hello name="John" />;
  },
});
```

options

```js
"react/no-multi-comp": [<enabled>, { "ignoreStateless": <boolean> }]
```

ignoreStateless
当设置为 true 时，规则将忽略无状态组件并允许您在同一个文件中有多个无状态组件，或一个有状态组件和一些无状态组件

## 防止使用 setState

why?

> 当使用将应用程序状态与 UI 组件（例如 Flux）分离的架构时，可能需要禁止使用本地组件状态。此规则在只读应用程序（不使用表单）中特别有用，因为在这种情况下本地组件状态很少需要。

bad

```js
var Hello = createReactClass({
  getInitialState: function () {
    return {
      name: this.props.name,
    };
  },
  handleClick: function () {
    this.setState({
      name: this.props.name.toUpperCase(),
    });
  },
  render: function () {
    return (
      <div onClick={this.handleClick.bind(this)}>Hello {this.state.name}</div>
    );
  },
});
```

good

```js
var Hello = createReactClass({
  render: function () {
    return <div onClick={this.props.handleClick}>Hello {this.props.name}</div>;
  },
});
```

## 防止使用字符串引用

why?

> 目前，React 支持两种方式来引用组件。第一种方式，提供一个字符串标识符，现在在官方文档中被认为是遗留的。文档现在更喜欢第二种方法——通过 this 在引用回调中设置对象的属性来引用组件
> bad

```js
var Hello = createReactClass({
  render: function () {
    return <div ref="hello">Hello, world.</div>;
  },
});

var Hello = createReactClass({
  componentDidMount: function () {
    var component = this.refs.hello;
    // ...do something with component
  },
  render: function () {
    return <div ref="hello">Hello, world.</div>;
  },
});
```

good

```js
var Hello = createReactClass({
  componentDidMount: function () {
    var component = this.hello;
    // ...do something with component
  },
  render() {
    return (
      <div
        ref={(c) => {
          this.hello = c;
        }}
      >
        Hello, world.
      </div>
    );
  },
});
```

options

```js
"react/no-string-refs": [<enabled>, {"noTemplateLiterals": <boolean>}]
```

## 防止使用未知的 DOM 属性

why?

> 在 JSX 中，所有 DOM 属性和属性都应该采用驼峰式格式，以与标准 JavaScript 样式保持一致
> bad

```js
var React = require('react');

var Hello = <div class="hello">Hello World</div>;
```

good

```js
var React = require('react');

var Hello = <div className="hello">Hello World</div>;
```

options

```js
react/no-unknown-property": [<enabled>, { ignore: <ignore> }]
```

enabled：用于启用规则。0=关闭，1=警告，2=错误。默认为 0
ignore：在验证期间要忽略的属性和属性名称的可选数组

## 为 React 组件强制执行 ES5 或 ES6 类

why?

> 统一规范，是用 es5 还是 es6 的类，es6 类是默认模式
> bad

```js
var Hello = createReactClass({
  render: function () {
    return <div>Hello {this.props.name}</div>;
  },
});
```

good

```js
class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}
```

options

```js
"react/prefer-es6-class": [<enabled>, <mode>]
```

always 模式：将为 React 组件强制执行 ES6 类
never 模式：将为 React 组件强制执行 ES5 类

## 强制将无状态 React 组件编写为纯函数

why?

> 无状态功能组件比基于类的组件更简单，react 针对纯函数组件做了更多性能优化.包含以下元素的组件就**不是**纯函数组件

- 使用了 displayName, propTypes, contextTypes, defaultProps, render 以外的类接口,比如生命周期钩子
- 使用了 this.props 和 this.context
- 使用了 ref 特性
- 使用了装饰器
- render 函数返回了 jsx 以外的内容

bad

```jsx
const Hello = createReactClass({
  render: function () {
    return <div>Hello {this.props.name}</div>;
  },
});
```

good

```jsx
const Foo = function (props, context) {
  const { location } = context.router;

  return <div>{props.foo}</div>;
};

class Foo extends React.Component {
  render() {
    if (!this.props.foo) {
      return null;
    }
    return <div>{this.props.foo}</div>;
  }
}
```

参考

- [react/prefer-stateless-function](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md)
- [medium](https://medium.com/technofunnel/working-with-react-pure-components-166ded26ae48)

## 使用 jsx 时防止缺少 React

why?

> 使用 JSX 时，a 标签扩展为 React.createElement("a"). 因此，React 变量必须在范围内
> bad

```js
var Hello = <div>Hello {this.props.name}</div>;

/** @jsx Foo.bar */
var React = require('react');
var Hello = <div>Hello {this.props.name}</div>;
```

good

```js
import React from 'react';
var Hello = <div>Hello {this.props.name}</div>;

var React = require('react');
var Hello = <div>Hello {this.props.name}</div>;

/** @jsx Foo.bar */
var Foo = require('foo');
var Hello = <div>Hello {this.props.name}</div>;
```

## 强制 ES5 或 ES6 类在渲染函数中返回值

why?

> 在组件中编写 render 方法时，很容易忘记返回 JSX 内容。return 如果缺少该语句，此规则将发出警告
> bad

```js
var Hello = createReactClass({
  render() {
    <div>Hello</div>;
  },
});

class Hello extends React.Component {
  render() {
    <div>Hello</div>;
  }
}
```

good

```js
var Hello = createReactClass({
  render() {
    return <div>Hello</div>;
  },
});

class Hello extends React.Component {
  render() {
    return <div>Hello</div>;
  }
}
```

## 防止没有子组件的额外结束标签

why?

> 没有子组件的组件可以自行关闭，以避免不必要的额外结束标记。
> bad

```js
var HelloJohn = <Hello name="John"></Hello>;

var HelloJohnCompound = <Hello.Compound name="John"></Hello.Compound>;
```

good

```js
var contentContainer = <div className="content"></div>;

var intentionalSpace = <div> </div>;

var HelloJohn = <Hello name="John" />;

var HelloJohnCompound = <Hello.Compound name="John" />;

var Profile = (
  <Hello name="John">
    <img src="picture.png" />
  </Hello>
);

var ProfileCompound = (
  <Hello.Compound name="John">
    <img src="picture.png" />
  </Hello.Compound>
);

var HelloSpace = <Hello> </Hello>;
```

options

```js
"react/self-closing-comp": ["error", {
  "component": true,
  "html": true
}]
```

component：当设置为 true 时，自定义组件标签应该是自闭合的
html：当设置为 true 时，html 组件标签应该是自闭合的

## 强制执行组件方法顺序

why?

> 在创建 React 组件时，始终遵循相同的方法顺序组织会更方便，以帮助您轻松找到生命周期方法、事件处理程序等

rules

> 1.静态方法和属性 2.生命周期方法：displayName, propTypes, contextTypes, childContextTypes, mixins, statics, defaultProps, constructor, getDefaultProps, getInitialState, state, getChildContext, componentWillMount, componentDidMount, componentWillReceiveProps, shouldComponentUpdate, componentWillUpdate, componentDidUpdate, componentWillUnmount（按此顺序）。 3.自定义方法
> 4.render 方法

bad

```js
var Hello = createReactClass({
  render: function () {
    return <div>Hello</div>;
  },
  displayName: 'Hello',
});
```

good

```js
var Hello = createReactClass({
  displayName: 'Hello',
  render: function () {
    return <div>Hello</div>;
  },
});
```

options

```js
"react/sort-comp": [<enabled>, { order: <order>, groups: <groups> }]
```

enabled：用于启用规则。0=关闭，1=警告，2=错误。默认为 0。
order: 可选的验证方法数组。
groups：方法组的可选对象。

默认配置是：

```js
{
  order: [
    'static-methods',
    'lifecycle',
    'everything-else',
    'render'
  ],
  groups: {
    lifecycle: [
      'displayName',
      'propTypes',
      'contextTypes',
      'childContextTypes',
      'mixins',
      'statics',
      'defaultProps',
      'constructor',
      'getDefaultProps',
      'getInitialState',
      'state',
      'getChildContext',
      'componentWillMount',
      'componentDidMount',
      'componentWillReceiveProps',
      'shouldComponentUpdate',
      'componentWillUpdate',
      'componentDidUpdate',
      'componentWillUnmount'
    ]
  }
}
```

static-methods 是指静态类方法的特殊关键字。
lifecycle 指的是 中 lifecycle 定义的组 groups。
everything-else 是一个特殊的组，它匹配所有不匹配任何其他组的方法。
render 指的是 render 方法。
type-annotations. 默认情况下未指定该组，但可用于强制流注解定位。
getters 默认情况下未指定此组，但可用于强制类 getter 定位。
setters 默认情况下未指定此组，但可用于强制类设置器定位。
instance-variables 默认情况下未指定该组，但可用于强制所有其他实例变量定位。
instance-methods 默认情况下未指定该组，但可用于强制所有其他实例方法定位。

## 防止多行 JSX 周围缺少括号

why?

> 将多行 JSX 包裹在括号中可以提高可读性和/或便利性

parens 使用 or 时，以下模式被视为警告 parens-new-line：

```js
var Hello = createReactClass({
  render: function () {
    return (
      <div>
        <p>Hello {this.props.name}</p>
      </div>
    );
  },
});

var Hello = createReactClass({
  render: function () {
    return (
      <div>
        <p>Hello {this.props.name}</p>
      </div>
    );
  },
});
```

以下模式不被视为警告：

```js
var singleLineJSX = <p>Hello</p>;

var Hello = createReactClass({
  render: function () {
    return (
      <div>
        <p>Hello {this.props.name}</p>
      </div>
    );
  },
});
```

declaration

以下模式在配置时被视为警告{declaration: "parens"}。

```js
var hello = (
  <div>
    <p>Hello</p>
  </div>
);
```

以下模式在配置时不被视为警告{declaration: "parens"}

```js
var hello = (
  <div>
    <p>Hello</p>
  </div>
);

var hello = (
  <div>
    <p>Hello</p>
  </div>
);
```

以下模式在配置时被视为警告{declaration: "parens-new-line"}

```js
var hello = (
  <div>
    <p>Hello</p>
  </div>
);

var hello = (
  <div>
    <p>Hello</p>
  </div>
);
```

以下模式在配置时不被视为警告{declaration: "parens-new-line"}。

```js
var hello = (
  <div>
    <p>Hello</p>
  </div>
);
```

## 当元素是多行时需要在 jsx 的第一个 prop 是在新的一行

why?

> 确保第一个属性的正确位置

rules

该规则检查所有 JSX 元素的第一个属性是否正确放置。有可能的配置：

> always：第一个属性应始终放在新行上。
> never: 第一个属性不应该放在新的一行，例如应该总是和组件开始标签在同一行。
> multiline：当 JSX 标签占用多行时，第一个属性应始终放在新行上。
> multiline-multiprop：如果 JSX 标记占用多行并且有多个属性，则应始终将第一个属性放在新行上。这就是默认值。

options

```js
"react/jsx-first-prop-new-line": `"always" | "never" | "multiline" | "multiline-multiprop"`
```

## 在 jsx 中强制等号周围有空格

why?

> 此规则强制 JSX 属性中等号周围空格的一致性，统一代码规范

rules

> "always"在等号周围强制使用空格
> "never"等号周围不允许有空格（默认）。

options

```js
"react/jsx-first-prop-new-line": `"always" | "never" | "multiline" | "multiline-multiprop"`
```

## 强制 jsx 缩进（此时设置的是缩进 2 spaces indentation）

why?

> 此规则旨在强制执行一致的缩进样式，默认样式是 4 spaces，统一代码规范

good

```js
// 2 spaces indentation
<App>
  <Hello />
</App>

// no indentation
<App>
<Hello />
</App>

// 1 tab indentation
<App>
  <Hello />
</App>
```

options

```js
"react/jsx-indent": [<enabled>, 'tab'|<number>, {checkAttributes: <boolean>, indentLogicalExpressions: <boolean>}]
```

## 防止使用不安全的 target='\_blank'

why?

> 此规则旨在通过要求 rel='noreferrer noopener'外部链接以及可选的任何动态生成的链接来防止用户生成的链接创建安全漏洞

rules

> {"enforceDynamicLinks": "always"}如果 href 是动态链接，则强制执行规则（默认）
> {"enforceDynamicLinks": "never"}如果 href 是动态链接，则不执行规则

bad

```js
var Hello = <a target="_blank" href="http://example.com/"></a>;
var Hello = <a target="_blank" href={dynamicLink}></a>;
```

good

```js
var Hello = <p target="_blank"></p>;
var Hello = (
  <a target="_blank" rel="noopener noreferrer" href="http://example.com"></a>
);
var Hello = <a target="_blank" href="relative/path/in/the/host"></a>;
var Hello = <a target="_blank" href="/absolute/path/in/the/host"></a>;
var Hello = <a></a>;
```

## 必须在.jsx/.tsx 文件中编写 jsx 语法

why?

> 正常情况下编译器只会对.jsx/.tsx 后缀的文件应用 jsx 编译,如果把 jsx 内容写到.js/.ts 文件中,不仅可能会编译失败,也会降低可维护性.请把包含 jsx 语法的文件后缀修改成.jsx 或.tsx

bad

```js
// MyComponent.js
function MyComponent() {
  return <div />;
}
```

good

```jsx
// MyComponent.jsx
function MyComponent() {
  return <div />;
}
```

## 防止注释作为文本节点插入

why?

> 此规则防止注释字符串（例如以 or 开头/\*）作为文本节点意外注入 JSX 语句中。

bad

```js
var Hello = createReactClass({
  render: function () {
    return <div>// empty div</div>;
  },
});

var Hello = createReactClass({
  render: function () {
    return <div>/* empty div */</div>;
  },
});
```

good

```js
var Hello = createReactClass({
  displayName: 'Hello',
  render: function() {
    return <div>{/* empty div */}</div>;
  }
});

var Hello = createReactClass({
  displayName: 'Hello',
  render: function() {
    return <div /* empty div */></div>;
  }
});

var Hello = createReactClass({
  displayName: 'Hello',
  render: function() {
    return <div className={'foo' /* temp class */}</div>;
  }
});
```

## 防止使用 ReactDOM.render 的返回值

why?

> ReactDOM.render()当前返回对根 ReactComponent 实例的引用。然而，使用这个返回值是遗留的，应该避免，因为未来版本的 React 在某些情况下可能会异步渲染组件。如果您需要对根 ReactComponent 实例的引用，首选的解决方案是将回调引用附加到根元素

bad

```js
const inst = ReactDOM.render(<App />, document.body);
doSomethingWithInst(inst);
```

good

```js
ReactDOM.render(<App ref={doSomethingWithInst} />, document.body);

ReactDOM.render(<App />, document.body, doSomethingWithInst);
```

## 强制 React 组件具有 shouldComponentUpdate 方法

why?

> 此规则可防止您在未声明 shouldComponentUpdate 方法的情况下创建 React 组件

bad

```js
class YourComponent extends React.Component {}

createReactClass({});
```

good

```js
class YourComponent extends React.Component {
  shouldComponentUpdate() {
    return false;
  }
}

createReactClass({
  shouldComponentUpdate: function () {
    return false;
  },
});

createReactClass({
  mixins: [PureRenderMixin],
});
```

options

```js
react/require-optimization": [<enabled>, { allowDecorators: [<allowDecorator>] }]
```

enabled：用于启用规则。0=关闭，1=警告，2=错误。默认为 0。
allowDecorators：可选的装饰器名称数组以允许验证。

## 防止使用 findDOMNode

why?

> Facebook 最终会弃用 findDOMNode 它，因为它会阻止未来对 React 的某些改进

bad

```js
class MyComponent extends Component {
  componentDidMount() {
    findDOMNode(this).scrollIntoView();
  }
  render() {
    return <div />;
  }
}
```

good

```js
class MyComponent extends Component {
  componentDidMount() {
    this.node.scrollIntoView();
  }
  render() {
    return <div ref={(node) => (this.node = node)} />;
  }
}
```

## 禁止组件上的某些 props

why?

> 为了统一代码规范，此规则检查所有 JSX 元素并验证组件上没有使用禁止的 props,此规则仅适用于组件而不适用于 DOM

bad

```js
<Hello className='foo' />

<Hello style={{color: 'red'}} />
```

good

```js
<Hello name='Joe' />

<div className='foo' />

<div style={{color: 'red'}} />

```

options

```js
"react/forbid-component-props": [<enabled>, { "forbid": [<string>|<object>] }]
```

forbid
指定禁止使用的道具名称的数组。此选项的默认值为['className', 'style']。每个数组元素可以是带有属性名称的字符串，也可以是指定属性名称的对象、可选的自定义消息和组件白名单：

```js
{
  "propName": "someProp",
  "allowedFor": [SomeComponent, AnotherComponent],
  "message": "Avoid using someProp"
}
```

## 防止使用 findDOMNode

why?

> Facebook 最终会弃用 findDOMNode 它，因为它会阻止未来对 React 的某些改进

bad

```js
class MyComponent extends Component {
  componentDidMount() {
    findDOMNode(this).scrollIntoView();
  }
  render() {
    return <div />;
  }
}
```

good

```js
class MyComponent extends Component {
  componentDidMount() {
    this.node.scrollIntoView();
  }
  render() {
    return <div ref={(node) => (this.node = node)} />;
  }
}
```

## 防止子项和 props.dangerouslySetInnerHTML 之间出现问题

why?

> 此规则有助于防止同时使用 children 和 dangerouslySetInnerHTML 属性引起的问题

bad

```js
<div dangerouslySetInnerHTML={{ __html: "HTML" }}>
  Children
</div>

<Hello dangerouslySetInnerHTML={{ __html: "HTML" }}>
  Children
</Hello>

React.createElement("div", { dangerouslySetInnerHTML: { __html: "HTML" } }, "Children");

React.createElement("Hello", { dangerouslySetInnerHTML: { __html: "HTML" } }, "Children");
```

good

```js
<div dangerouslySetInnerHTML={{ __html: "HTML" }} />

<Hello dangerouslySetInnerHTML={{ __html: "HTML" }} />

<div>
  Children
</div>

<Hello>
  Children
</Hello>

React.createElement("div", { dangerouslySetInnerHTML: { __html: "HTML" } });

React.createElement("Hello", { dangerouslySetInnerHTML: { __html: "HTML" } });

React.createElement("div", {}, "Children");

React.createElement("Hello", {}, "Children");

```

## 防止定义未使用的 propTypes

why?

> 避免代码冗余浪费性能

bad

```js
class Hello extends React.Component {
  render() {
    return <div>Hello Bob</div>;
  }
}

Hello.propTypes = {
  name: PropTypes.string,
};

type Props = {
  firstname: string,
  middlename: string, // middlename is never used by the Hello component
  lastname: string,
};

class Hello extends React.Component<Props> {
  render() {
    return (
      <div>
        Hello {this.props.firstname} {this.props.lastname}
      </div>
    );
  }
}
```

good

```js
class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

Hello.propTypes = {
  name: PropTypes.string,
};
```

options

```js
"react/no-unused-prop-types": [<enabled>, { ignore: <ignore>, customValidators: <customValidator>, skipShapeProps: <skipShapeProps> }]
```

## 将样式 prop 值强制为对象或一个对象的变量

why?

> 避免代码冗余浪费性能

bad

```js
<div style="color: 'red'" />

<div style={true} />

<Hello style={true} />

const styles = true;
<div style={styles} />
```

good

```js
<div style={{ color: "red" }} />

<Hello style={{ color: "red" }} />

const styles = { color: "red" };
<div style={styles} />
```

options

```js
"react/style-prop-object": [<enabled>, {
  "allow": [<string>]
}]
```

allow
允许在其样式属性中具有非对象值的元素列表。默认值为[]

## 防止无效字符出现在标记中

why?

> 防止您可能认为是 jsx 转义字符的字符被意外地作为文本节点注入 jsx 语句中

bad

```js
<div> > </div>
```

good

```js
<div> &gt; </div>

<div> {'>'} </div>
```

options

```js
"react/no-unescaped-entities": [<enabled>, { "forbid": Array<string> }]
```

## 防止将子项作为 props 传递

why?

> 使用 jsx 时，子项应该嵌套在开始和结束标记之间。不使用 jsx 时，应将子项作为附加参数传递给 React.createElement.

bad

```js
<div children='Children' />

<MyComponent children={<AnotherComponent />} />
<MyComponent children={['Child 1', 'Child 2']} />

React.createElement("div", { children: 'Children' })
```

good

```js
<div>Children</div>

<MyComponent>Children</MyComponent>

<MyComponent>
  <span>Child 1</span>
  <span>Child 2</span>
</MyComponent>

React.createElement("div", {}, 'Children')
React.createElement("div", 'Child 1', 'Child 2')
```

options

```js
"react/no-children-prop": [<enabled>, {
  "allowFunctions": <boolean> || false
}]
```

## 验证 JSX 开始括号和结束括号中的空格

why?

> 为了统一代码写法，此规则检查 JSX 语法元素内部和周围的空格

options

```js
{
  "closingSlash": "never",
  "beforeSelfClosing": "always",
  "afterOpening": "never",
  "beforeClosing": "allow"
}
```

## 禁止使用数组索引做为循环的标记

why?

> 比如将元素添加到数组开头的情况下，除了第 1 个元素需要沉渲染,其他节点根本不需要沉浸,但是因为所有节点的 index 都发生了改变,所以所有节点都会全部重新渲染一次,请使用惟一标志做为 key

bad

```jsx
things.map((thing, index) => <Hello key={index} />);
```

good

```jsx
things.map((thing) => <Hello key={thing.id} />);
```

参考:

- [react/no-array-index-key](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md)

## [已禁用]必须给可选的 props 属性设置默认值

why?

> 如果可选的属性值没有默认值,代码中直接调用可能会抛出未定义的异常.这样设置会在去时进行默认值赋值,有利于提高代码稳定性.请通过默认值或者 defaultProp 进行设置,现在通过 ts 可以做到很好的类型检测,这个功能存在意义不大

bad

```jsx
function MyStatelessComponent({ bar }) {
  return <div>{bar}</div>;
}

MyStatelessComponent.propTypes = {
  bar: PropTypes.string,
};
```

good

```jsx
function MyStatelessComponent({ bar }) {
  return <div>{bar}</div>;
}

MyStatelessComponent.propTypes = {
  bar: PropTypes.string,
};

MyStatelessComponent.defaultProp = {
  bar: 'bar',
};
```

参考

- [react/rules/require-default-props](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-default-props.md)

## 禁止使用未导出的 propTypes

why?

> 为了确保明确导出导入,此规则禁止使用其他组件的 prop 类型，除非它们被显式导入/导出

bad

```js
import SomeComponent from './SomeComponent';
SomeComponent.propTypes;

var { propTypes } = SomeComponent;

SomeComponent['propTypes'];
```

good

```js
import SomeComponent, {
  propTypes as someComponentPropTypes,
} from './SomeComponent';
```

options

```js
"react/forbid-foreign-prop-types": [<enabled>, { "allowInPropTypes": [<boolean>] }]
```

allowInPropTypes:如果设置为 true ，则该规则不会在 propTypes 声明中对外部 propTypes 使用发出警告

## 防止 void DOM 元素接收子元素

why?

> 有一些 HTML 元素只能自动关闭（例如 img, br, hr）,没有子元素。这些统称为 void DOM 元素

bad

```js
<br>Children</br>
<br children='Children' />
<br dangerouslySetInnerHTML={{ __html: 'HTML' }} />
React.createElement('br', undefined, 'Children')
React.createElement('br', { children: 'Children' })
React.createElement('br', { dangerouslySetInnerHTML: { __html: 'HTML' } })
```

good

```js
<div>Children</div>
<div children='Children' />
<div dangerouslySetInnerHTML={{ __html: 'HTML' }} />
React.createElement('div', undefined, 'Children')
React.createElement('div', { children: 'Children' })
React.createElement('div', { dangerouslySetInnerHTML: { __html: 'HTML' } })
```

## 强制所有 defaultProps 有一个对应的非必需 PropType

why?

> 该规则旨在确保每个 defaultProp 都有非必需的 PropType 声明。

bad

```js
function MyStatelessComponent({ foo, bar }) {
  return (
    <div>
      {foo}
      {bar}
    </div>
  );
}

MyStatelessComponent.propTypes = {
  foo: React.PropTypes.string.isRequired,
  bar: React.PropTypes.string,
};

MyStatelessComponent.defaultProps = {
  foo: 'foo',
};
```

```js
var Greeting = React.createClass({
  render: function () {
    return (
      <div>
        Hello {this.props.foo} {this.props.bar}
      </div>
    );
  },

  propTypes: {
    foo: React.PropTypes.string,
    bar: React.PropTypes.string,
  },

  getDefaultProps: function () {
    return {
      baz: 'baz',
    };
  },
});
```

good

```js
function MyStatelessComponent({ foo, bar }) {
  return (
    <div>
      {foo}
      {bar}
    </div>
  );
}

MyStatelessComponent.propTypes = {
  foo: React.PropTypes.string,
  bar: React.PropTypes.string.isRequired,
};
```

```js
function MyStatelessComponent({ foo, bar }) {
  return (
    <div>
      {foo}
      {bar}
    </div>
  );
}

MyStatelessComponent.propTypes = {
  foo: React.PropTypes.string.isRequired,
  bar: React.PropTypes.string,
};

MyStatelessComponent.defaultProps = {
  bar: 'some default',
};
```

options

```js
"default-props-match-prop-types": [<enabled>, { "allowRequiredDefaults": <boolean> }]
```

allowRequiredDefaults:当设置为 true 时，规则将忽略 defaultProps 时 isRequired propTypes

## 扩展 React.PureComponent 时防止使用 shouldComponentUpdate

why?

> 如果在定义扩展 React.PureComponent 的组件里面写了 shouldComponentUpdate，虽然 shouldComponentUpdate 会生效，但扩展 PureComponent 变得毫无意义

bad

```js
class Foo extends React.PureComponent {
  shouldComponentUpdate() {
    // do check
  }

  render() {
    return <div>Radical!</div>
  }
```

good

```js
class Foo extends React.Component {
  shouldComponentUpdate() {
    // do check
  }

  render() {
    return <div>Radical!</div>;
  }
}
```

## 防止定义未使用的 state

why?

> 如果您在状态上定义了一个属性，但它没有在任何地方使用，则会警告您，防止代码冗余。
> bad

```js
class MyComponent extends React.Component {
  state = { foo: 0 };
  render() {
    return <SomeComponent />;
  }
}
```

good

```js
class MyComponent extends React.Component {
  state = { foo: 0 };
  render() {
    return <SomeComponent foo={this.state.foo} />;
  }
}
```

## 强制布尔 props 命名一致

why?

> 为统一代码规范，允许您为需要布尔值的 props 强制执行一致的命名模式
> bad

```js
var Hello = createReactClass({
  propTypes: {
    enabled: PropTypes.bool
  },
  render: function() { return <div />; };
});
```

good

```js
var Hello = createReactClass({
  propTypes: {
    isEnabled: PropTypes.bool
  },
  render: function() { return <div />; };
});
```

## 防止常见的大小写错误

why?

> 确保在声明静态类属性和生命周期方法时没有出现大小写错误
> bad

```js
class MyComponent extends React.Component {
  static PropTypes = {};
}
```

good

```js
class MyComponent extends React.Component {
  static propTypes = {};
}
```

## 在 JSX props 中/或子项中强制使用大括号或禁止使用不必要的大括号

why?

> 统一代码规范

options

```js
"react/jsx-curly-brace-presence": [<enabled>, { "props": <string>, "children": <string>, "propElementValues": <string> }]
```

## 每行一个 JSX 元素

why?

> 为统一代码规范，此选项将 JSX 中的每一行都限制为一个表达式

bad

```js
<App><Hello /></App>

<App><Hello />
</App>
```

good

```js
<App>
  <Hello />
</App>

<App>
  <Hello>
  </Hello>
</App>
```

## 必须使用 props、state 和 context 的解构赋值

why?

> 统一写法，统一代码规范.在入口处统一解构赋值,有利于减少代码量,避免后期步骤的函数提取运行增加的性能消耗.请使用解析赋值语法.

bad

```js
const MyComponent = (props) => {
  return <div id={props.id} />;
};

const Foo = class extends React.PureComponent {
  render() {
    return <div>{this.context.foo}</div>;
  }
};
```

good

```js
const MyComponent = ({ id }) => {
  return <div id={id} />;
};

const Foo = class extends React.PureComponent {
  render() {
    const { title } = this.context;
    return <div>{title}</div>;
  }
};
```

## 必须在 setState 的回调中使用 state

why?

> 如果直接在 setState 中使用 state,在两个更新动作同时执行时可能无法拿到最新值从而引起 bug,所以必须在回调中获取之前的 state 状态值

bad

```js
function increment() {
  this.setState({ value: this.state.value + 1 });
}
```

good

```js
function increment() {
  this.setState((prevState) => ({ value: prevState.value + 1 }));
}
```

参考

- [no-access-state-in-setstate](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md)

## 防止使用 button 元素没有显式属性的元素 type

why?

> HTML 元素 type 属性的默认值通常不是所需的行为，并且可能导致意外的页面重新加载。该规则对所有元素强制执行显式属性，并检查其值是否符合规范

bad

```js
var Hello = <button>Hello</button>;
var Hello = <button type="foo">Hello</button>;
```

good

```js
var Hello = <span>Hello</span>;
var Hello = <span type="foo">Hello</span>;
var Hello = <button type="button">Hello</button>;
var Hello = <button type="submit">Hello</button>;
var Hello = <button type="reset">Hello</button>;
```

## 防止 this 在无状态功能组件中使用

why?

> 使用无状态功能组件 (SFC) 时，props/context 的访问方式与类组件或 create-react-class 格式不同。props 和 context 都作为单独的参数传递给组件，this 指向的不是当前组件

bad

```js
function Foo(props) {
  return <div>{this.props.bar}</div>;
}
```

good

```js
function Foo(props) {
  return <div>{props.bar}</div>;
}
```

## 验证 JSX 最大深度

why?

> 此选项验证 JSX 的特定深度

bad

```js
// [2, { "max": 1 }]
<App>
  <Foo>
    <Bar />
  </Foo>
</App>

// [2, { "max": 1 }]
const foobar = <Foo><Bar /></Foo>;
<App>
  {foobar}
</App>

// [2, { "max": 2 }]
<App>
  <Foo>
    <Bar>
      <Baz />
    </Bar>
  </Foo>
</App>
```

good

```js
// [2, { "max": 1 }]
<App>
  <Hello />
</App>

// [2,{ "max": 2 }]
<App>
  <Foo>
    <Bar />
  </Foo>
</App>

// [2, { "max": 3 }]
<App>
  <Foo>
    <Bar>
      <Baz />
    </Bar>
  </Foo>
</App>
```

options

```js
"react/jsx-no-depth": [<enabled>, { "max": <number> }]
```

max:该参数可以是深度计数的正数

## 禁止内联 JSX props 之间有多个空格

why?

> 强制在同一行中的两个 JSX 属性或 JSX 标记名称和第一个 JSX 属性之间有一个空格,统一代码规范

bad

```js
<App  spacy />

<App too  spacy />
```

good

```js
<App cozy />

<App very cozy />
```

## 防止使用 UNSAFE\_方法

why?

> 某些遗留的生命周期方法在异步 React 应用程序中使用是不安全的，并且在严格模式下会导致警告。这些也恰好是在 React 社区中引起最大混乱的生命周期

bad

```js
class Foo extends React.Component {
  UNSAFE_componentWillMount() {}
  UNSAFE_componentWillReceiveProps() {}
  UNSAFE_componentWillUpdate() {}
}
```

good

```js
class Foo extends Bar {
  UNSAFE_componentWillMount() {}
  UNSAFE_componentWillReceiveProps() {}
  UNSAFE_componentWillUpdate() {}
}
```

## 强制执行 React 片段的简写或标准形式

why?

> 为了简写语法,默认是 syntax 模式

bad

```js
<React.Fragment>
  <Foo />
</React.Fragment>
```

good

```js
<><Foo /></>

<React.Fragment key="key"><Foo /></React.Fragment>
```

options

```js
"react/jsx-fragments": [<enabled>, <mode>]
```

## 在 JSX 属性和表达式中的花括号中强制换行

why?

> 为统一代码样式规范，此规则在 jsx 大括号表达式的大括号内强制执行一致的换行符
> bad

```js
<div>
  { foo
  }
</div>

<div>
  {
    foo }
</div>

<div>
  { foo &&
    foo.bar
  }
</div>
```

good

```js
<div>
  { foo }
</div>

<div>
  {
    foo
  }
</div>
```

options

```js
{
  multiline: "consistent" | "forbid" | "require", // default to 'consistent'
  singleline: "consistent" | "forbid" | "require", // default to 'consistent'
}
```

选项 multiline 在花括号内的 jsx 表达式占据多行时生效。

选项 singleline 在花括号内的 jsx 表达式占一行时生效。

consistent 强制两个花括号直接在其中有一个换行符，或者不存在换行符。
forbid 不允许在花括号内直接换行。
require 强制在 curlies 中直接存在换行符。
或字符串选项：

consistent（默认）是{ multiline: "consistent", singleline: "consistent" }.
never 是一个别名{ multiline: "forbid", singleline: "forbid" }

## 强制状态初始化样式

why?

> 为统一代码样式规范，此规则在 jsx 大括号表达式的大括号内强制执行一致的换行符
> bad

```js
class Foo extends React.Component {
  state = { bar: 0 };
  render() {
    return <div>Foo</div>;
  }
}
```

good

```js
class Foo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bar: 0 };
  }
  render() {
    return <div>Foo</div>;
  }
}
```

options

```js
"react/state-in-constructor": [<enabled>, <mode>]
```

always 模式:将强制状态初始化样式在构造函数中。这是默认模式
never 模式:将强制状态初始化样式使用类属性

## 必须将 props 属性类型检查及默认值放在类函数外

why?

> defaultProps 和 propTypes 主要是运行时的参数类型检测,和实际业务代码没有太大关系.为统一代码写法规范,请将其移到类外面

bad

```jsx
class MyComponent extends React.Component {
  static defaultProps = {
    /*...*/
  };
  static propTypes = {
    /*...*/
  };
}
```

good

```jsx
class MyComponent extends React.Component {
  /*...*/
}
MyComponent.defaultProps = {
  /*...*/
};
MyComponent.propTypes = {
  /*...*/
};
```

参考

- [static-property-placement](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md)

## 禁止 JSX props 传播

why?

> 强制任何 JSX 属性都没有传播，有利于可维护性
> bad

```js
<App {...props} />
<MyCustomComponent {...props} some_other_prop={some_other_prop} />
<img {...props} />
```

good

```js
const {src, alt} = props;
const {one_prop, two_prop} = otherProps;
<MyCustomComponent one_prop={one_prop} two_prop={two_prop} />
<img src={src} alt={alt} />
```

## 强制 props 是只读的

why?

> 强制任何 JSX 属性都没有传播，有利于可维护性
> bad

```js
type Props = {
  name: string,
};
class Hello extends React.Component<Props> {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

function Hello(props: { -name: string }) {
  return <div>Hello {props.name}</div>;
}

const Hello = (props: {| name: string |}) => <div>Hello {props.name}</div>;
```

good

```js
type Props = {
  +name: string,
};
class Hello extends React.Component<Props> {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

function Hello(props: { +name: string }) {
  return <div>Hello {props.name}</div>;
}

const Hello = (props: {| +name: string |}) => <div>Hello {props.name}</div>;
```

## 防止使用 javascript:URL

why?

> 任何以 javascript: scheme 开头的 URL 都会记录一个警告。React 将该模式视为危险的攻击面
> bad

```js
<a href="javascript:"></a>
<a href="javascript:void(0)"></a>
<a href="j\n\n\na\rv\tascript:"></a>
```

good

```js
<Foo href="javascript:"></Foo>
<a href={"javascript:"}></a>
```

## 禁止不必要的 fragments

why?

> 避免代码冗余
> bad

```js
<>{foo}</>

<><Foo /></>

<p><>foo</></p>

<></>

<Fragment>foo</Fragment>

<React.Fragment>foo</React.Fragment>

<section>
  <>
    <div />
    <div />
  </>
</section>

{showFullName ? <>{fullName}</> : <>{firstName}</>}
```

good

```js
{foo}

<Foo />

<>
  <Foo />
  <Bar />
</>

<>foo {bar}</>

<> {foo}</>

const cat = <>meow</>

<SomeComponent>
  <>
    <div />
    <div />
  </>
</SomeComponent>

<Fragment key={item.id}>{item.value}</Fragment>

{showFullName ? fullName : firstName}
```

## 防止相邻的内联元素不被空格分隔

why?

> 当以无样式方式查看时，未由空格分隔的相邻内联元素会相互碰撞，这通常是不可取的
> bad

```js
<div><a></a><a></a></div>
<div><a></a><span></span></div>
```

good

```js
<div><div></div><div></div></div>
<div><a></a> <a></a></div>
```

## 必须使用箭头函数声明函数式组件

why?

> 统一风格.避免函数声明,函数表达式,箭头函数混用导致的混乱

bad

```jsx
// 函数表达式
const Component = function (props) {
  return <div />;
};

// 函数声明
const Component = function name(props) {
  return <div />;
};
```

good

```js
const Component = (props) => {
  return <div />;
};
```

参考:

- [react/function-component-definition](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md)

## 在 jsx 元素和表达式之后强制空行

why?

> 这是一个风格规则，旨在通过在相邻 JSX 元素和表达式之间强制空行来使 JSX 代码更具可读性
> bad

```js
div>
  <Button>{data.label}</Button>
  <List />
</div>
```

good

```js
<div>
  <Button>{data.label}</Button>

  <List />

  <Button>
    <IconPreview />
    Button 2<span></span>
  </Button>

  {showSomething === true && <Something />}

  <Button>Button 3</Button>

  {showSomethingElse === true ? <SomethingElse /> : <ErrorMessage />}
</div>
```

## 防止 react contexts 采用不稳定的值

why?

> 此规则防止将不稳定的值（即对象标识）用作 的值 Context.Provide，避免导致不必要的重新渲染影响性能
> bad

```js
return <SomeContext.Provider value={{ foo: 'bar' }}>...</SomeContext.Provider>;
```

good

```js
const foo = useMemo(() => {
  foo: 'bar';
}, []);
return <SomeContext.Provider value={foo}>...</SomeContext.Provider>;
```

## 防止在组件内部创建不稳定的组件

why?

> 在没有记忆的组件内创建组件会导致组件不稳定。嵌套组件及其所有子组件在每次重新渲染期间都会重新创建。给定嵌套组件的有状态子组件将在每次重新渲染时丢失其状态
> bad

```js
function Component() {
  function UnstableNestedComponent() {
    return <div />;
  }

  return (
    <div>
      <UnstableNestedComponent />
    </div>
  );
}
```

good

```js
function OutsideDefinedComponent(props) {
  return <div />;
}

function Component() {
  return (
    <div>
      <OutsideDefinedComponent />
    </div>
  );
}
```

## 强制在 React 元素中不使用命名空间

why?

> 强制在 React 元素中不存在命名空间，例如 with svg:circle，因为它们在 React 中不受支持
> bad

```js
<ns:TestComponent />

<Ns:TestComponent />
```

good

```js
<TestComponent />

<testComponent />
```

## 偏好精确的 proptype 定义

why?

> 推荐选项以确保在编写组件时仅使用精确的 prop 定义。这为 PropTypes 或 Flow 类型推荐了解决方案
> bad

```js
type Props = {
  foo: string,
};
function Component(props: Props) {
  return <div />;
}
```

```js
class Component extends React.Component {
  render() {
    return <div />;
  }
}
Component.propTypes = {
  foo: PropTypes.string,
};
```

good

```js
type Props = {|
  foo: string,
|};
function Component(props: Props) {
  return <div />;
}
```

```js
import exact from 'prop-types-exact';
class Component extends React.Component {
  render() {
    return <div />;
  }
}
Component.propTypes = exact({
  foo: PropTypes.string,
});
```

## 生命周期方法应该是原型上的方法，而不是类字段

why?

> 生命周期方法不需要使用箭头函数。这使得事情更难测试，从概念上讲性能较低（尽管在实践中，性能不会受到影响，因为大多数引擎都会有效地优化），并且可能会破坏热重载模式
> bad

```js
class Hello extends React.Component {
  render = () => {
    return <div />;
  };
}

var AnotherHello = createReactClass({
  render: () => {
    return <div />;
  },
});
```

good

```js
class Hello extends React.Component {
  render() {
    return <div />;
  }
}

var AnotherHello = createReactClass({
  render() {
    return <div />;
  },
});
```

## 防止使用无效属性

why?

> 为了帮助在阅读代码时最大程度地减少混淆，每个属性只应具有适当的值

## 防止声明组件类的未使用方法

why?

> 防止代码冗余
> bad

```js
class Foo extends React.Component {
  handleClick() {}
  render() {
    return null;
  }
}
```

good

```js
class Foo extends React.Component {
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  action() {}
  componentDidMount() {
    this.action();
  }
  render() {
    return null;
  }
}
```

## 确保 useState hook 值和 setter 变量的解构和对称命名

why?

> 此规则检查从调用中解构的 value 和 setter 变量是否 React.useState()对称命名
> bad

```js
import React from 'react';
export default function useColor() {
  // useState call is not destructured into value + setter pair
  const useStateResult = React.useState();
  return useStateResult;
}
```

good

```js
import React from 'react';
export default function useColor() {
  // useState call is destructured into value + setter pair whose identifiers
  // follow the [thing, setThing] naming convention
  const [color, setColor] = React.useState();
  return [color, setColor];
}
```

## 在 iframe 元素上强制执行 sandbox 属性

why?

> 为 iframe 中的内容启用了一组额外的限制
> bad

```js
var React = require('react');

var Frame = () => (
  <div>
    <iframe></iframe>
    {React.createElement('iframe')}
  </div>
);
```

good

```js
var React = require('react');

var Frame = <iframe sandbox="allow-popups" />;
var Frame = () => (
  <div>
    <iframe sandbox="allow-popups"></iframe>
    {React.createElement('iframe', { sandbox: 'allow-popups' })}
  </div>
);
```

## 防止呈现有问题的泄漏值

why?

> 此规则旨在防止呈现危险的泄漏值，因为它们可能导致意外值到达最终 DOM 甚至使您的渲染方法崩溃
> bad

```js
const Component = ({ count, title }) => {
  return <div>{count && title}</div>;
};
```

good

```js
const Component = ({ elements }) => {
  return <div>{elements}</div>;
};
```

## 强制要求所有需要替代文本的元素都具有有意义的信息以传递回最终用户

why?

> 这是屏幕阅读器用户可访问性的关键组成部分，以便他们了解页面上内容的用途
> bad

```js
<img src="foo" />
<img {...props} />
<img {...props} alt /> // Has no value
<img {...props} alt={undefined} /> // Has no value
<img {...props} alt={`${undefined}`} /> // Has no value
<img src="foo" role="presentation" /> // Avoid ARIA if it can be achieved without
<img src="foo" role="none" /> // Avoid ARIA if it can be achieved without
```

good

```js
<img src="foo" alt="Foo eating a sandwich." />
<img src="foo" alt={"Foo eating a sandwich."} />
<img src="foo" alt={altText} />
<img src="foo" alt={`${person} smiling`} />
<img src="foo" alt="" />
```

## 强制锚点包含内容

why?

> bad

```js
<img src="foo" />
<img {...props} />
<img {...props} alt /> // Has no value
<img {...props} alt={undefined} /> // Has no value
<img {...props} alt={`${undefined}`} /> // Has no value
<img src="foo" role="presentation" /> // Avoid ARIA if it can be achieved without
<img src="foo" role="none" /> // Avoid ARIA if it can be achieved without
```

good

```js
<img src="foo" alt="Foo eating a sandwich." />
<img src="foo" alt={"Foo eating a sandwich."} />
<img src="foo" alt={altText} />
<img src="foo" alt={`${person} smiling`} />
<img src="foo" alt="" />
```

## 确保 a 标签是有效的

why?

> 使用锚点作为按钮很容易造成混乱，而不需要相对复杂的 ARIA 和 CSS 实现，这些实现仅用于创建 HTML 已经提供的元素并且浏览器已经完全可访问地实现

bad

```js
<a onClick={foo} />
<a href="#" onClick={foo} />
<a href={"#"} onClick={foo} />
<a href={`#`} onClick={foo} />
<a href="javascript:void(0)" onClick={foo} />
<a href={"javascript:void(0)"} onClick={foo} />
<a href={`javascript:void(0)`} onClick={foo} />
```

good

```js
<a href="https://github.com" />
<a href="#section" />
<a href="foo" />
<a href="/foo/bar" />
<a href={someValidPath} />
<a href="https://github.com" onClick={foo} />
<a href="#section" onClick={foo} />
<a href="foo" onClick={foo} />
<a href="/foo/bar" onClick={foo} />
<a href={someValidPath} onClick={foo} />
```

## aria-activedescendant 元素必须有大于 0 的 tabIndex

why?

> 因为一个元素 aria-activedescendant 是 通过 tab 键聚焦的，所以它必须要有一个固有大于 0 的 tabIndex

bad

```js
<div aria-activedescendant={someID} />
<div aria-activedescendant={someID} tabIndex={-1} />
<div aria-activedescendant={someID} tabIndex="-1" />
<input aria-activedescendant={someID} tabIndex={-1} />
```

good

```js
<CustomComponent />
<CustomComponent aria-activedescendant={someID} />
<CustomComponent aria-activedescendant={someID} tabIndex={0} />
<CustomComponent aria-activedescendant={someID} tabIndex={-1} />
```

## 强制所有的 aria-\* props 都是有效的

why?

> 元素不能使用无效的 ARIA 属性。如果它找到未在 WAI-ARIA States and Properties spec 中列出 aria-\*属性，这将失败

bad

```js
<!-- Bad: Labeled using incorrectly spelled aria-labeledby -->
<div id="address_label">Enter your address</div>
<input aria-labeledby="address_label">
```

good

```js
<!-- Good: Labeled using correctly spelled aria-labelledby -->
<div id="address_label">Enter your address</div>
<input aria-labelledby="address_label">
```

## ARIA 状态和属性值必须有效

bad

```js
<!-- Bad: the aria-hidden state is of type true/false -->
<span aria-hidden="yes">foo</span>
```

good

```js
<!-- Good: the aria-hidden state is of type true/false -->
<span aria-hidden="true">foo</span>
```

## 具有 ARIA 角色的元素必须使用有效的非抽象 ARIA 角色

bad

```js
<div role="datepicker"></div> <!-- Bad: "datepicker" is not an ARIA role -->
<div role="range"></div>      <!-- Bad: "range" is an _abstract_ ARIA role -->
<div role=""></div>           <!-- Bad: An empty ARIA role is not allowed -->
<Foo role={role}></Foo>       <!-- Bad: ignoreNonDOM is set to false or not set -->
```

good

```js
<div role="button"></div>     <!-- Good: "button" is a valid ARIA role -->
<div role={role}></div>       <!-- Good: role is a variable & cannot be determined until runtime. -->
<div></div>                   <!-- Good: No ARIA role -->
<Foo role={role}></Foo>       <!-- Good: ignoreNonDOM is set to true -->
```

## 强制某些元素不支持支持 ARIA 角色、状态和属性

why?

> 某些保留的 DOM 元素不支持 ARIA 角色、状态和属性。这通常是因为它们不可见，例如 meta, html, script, style。此规则强制这些 DOM 元素不包含 roleand/oraria-\*道具

bad

```js
<!-- Bad: the meta element should not be given any ARIA attributes -->
<meta charset="UTF-8" aria-hidden="false" />
```

good

```js
<!-- Good: the meta element should not be given any ARIA attributes -->
<meta charset="UTF-8" />
```

## 确保 autocomplete 属性正确并适合与其一起使用的表单字段。

bad

```js
<!-- Bad: the autocomplete attribute has an invalid value -->
<input type="text" autocomplete="incorrect" />

<!-- Bad: the autocomplete attribute is on an inappropriate input element -->
<input type="email" autocomplete="url" />

<!-- Bad: MyInput is listed in inputComponents -->
<MyInput autocomplete="incorrect" />
```

good

```js
<!-- Good: the autocomplete attribute is used according to the HTML specification -->
<input type="text" autocomplete="name" />

<!-- Good: MyInput is not listed in inputComponents -->
<MyInput autocomplete="incorrect" />
```

options

```js
{
    "rules": {
        "jsx-a11y/autocomplete-valid": [ 2, {
            "inputComponents": ["Input", "FormField"]
        }],
    }
}
```

## 必须把 onClick 和 onKeyUp, onKeyDown, onKeyPres 和 一起使用

why?

> 没法使用鼠标的残障用户触发不了点击事件,屏幕阅读器也识别不了点击事件。所以要将键盘事件和点击事件一起用.交互式元素和隐藏元素除外

TODO: 有哪些交互式元素

bad

```js
<div onClick={() => {}} />
```

good

```js
<div onClick={() => {}} onKeyDown={this.handleKeyDown} />
<div onClick={() => {}} onKeyUp={this.handleKeyUp} />
<div onClick={() => {}} onKeyPress={this.handleKeyPress} />

// 交互式元素
<button onClick={() => {}} />

// 手动标记的隐藏元素
<div onClick{() => {}} aria-hidden="true" />
```

参考

- [jsx-a11y/click-events-have-key-events.md](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/click-events-have-key-events.md)

## 强制控件（交互式元素）具有文本标签

why?

> 用于解释按钮的用处

bad

```js
<button type="button" class="icon-save" />
```

good

```js
<button type="button" aria-label="Save" class="icon-save" />
```

## 强制标题元素（h1、h2 等）具有内容并且屏幕阅读器可以访问该内容

why?

> 屏幕阅读器会提醒用户注意标题标签的存在。如果标题为空或无法访问文本，这可能会使用户感到困惑，甚至阻止他们访问页面结构上的信息。

bad

```js
<h1 />
<h1><TextWrapper aria-hidden />
```

good

```js
<h1>Heading Content!</h1>
<h1><TextWrapper /><h1>
<h1 dangerouslySetInnerHTML={{ __html: 'foo' }} />
```

## 元素必须有 lang 属性

why?

> 配置屏幕阅读器时，用户选择默认语言。如果未指定网页的语言，屏幕阅读器将采用用户设置的默认语言。对于说多种语言并以一种以上语言访问网站的用户来说，语言设置成为一个问题。必须指定一种语言并确保其有效，这样网站文本才能正确发音。

bad

```js
<html>
```

good

```js
<html lang="en">
<html lang="en-US">
<html lang={language}>
```

## iframe 元素必须具有唯一的标题属性以向用户指示其内容

why?

> 屏幕阅读器用户依靠框架标题来描述 frame. 如果标记不包含属性，则快速浏览 frame 和元素对于该技术的用户来说变得困难和混乱

bad

```js
<iframe />
<iframe {...props} />
<iframe title="" />
<iframe title={''} />
<iframe title={``} />
<iframe title={undefined} />
<iframe title={false} />
<iframe title={true} />
<iframe title={42} />
```

good

```js
<iframe title="This is a unique title" />
<iframe title={uniqueTitle} />
```

## 强制 img alt 属性不包含单词 image、picture 或 photo

why?

> 屏幕阅读器已经将 img 元素宣布为图像。无需使用诸如 image、photo 和/或 picture 之类的词

bad

```js
<img src="foo" alt="Photo of foo being weird." />
<img src="bar" alt="Image of me at a bar!" />
<img src="baz" alt="Picture of baz fixing a bug." />
```

good

```js
<img src="foo" alt="Foo eating a sandwich." />
<img src="bar" aria-hidden alt="Picture of me taking a photo of an image" /> // Will pass because it is hidden.
<img src="baz" alt={`Baz taking a ${photo}`} /> // This is valid since photo is a variable name.
```

## 必须在可交互式标签上进行键盘导航

why?

> 可交互式标签比如 a,button 应该在没有鼠标的情况下也能使用.自定义的可交互标签不支持 tab 聚焦,请手动添加 tabIndex 属性进行聚焦.

bad

```js
<span onclick="submitForm();" role="button">
  Submit
</span>
```

good

```js
// 添加tabIndex进行聚焦
<span onclick="submitForm();" role="button" tabIndex="0">Submit</span>

// href属性的a标签本身可以用tab聚焦
<a href="javascript:void(0);" onClick="doSomething();">Click ALL the things!</a>

// button标签本身可以用tab聚焦
<button onClick="doSomething();">Click the button :)</button>
```

参考

- [jsx-a11y/interactive-supports-focus](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/interactive-supports-focus.md)

## 强制 label 标签具有文本标签和关联的控件

why?

> 此规则检查任何 label 标签（或将输出 label 标签的指定自定义组件）是否 (1) 包装 input 元素（或将输出标签的指定自定义组件 input）或 (2) 具有 htmlFor 属性并且 label 标签具有文本内容。

bad

```js
<input type="text" />
<label>Surname</label>
```

good

```js
<label>
  <input type="text" />
  Surname
</label>
```

## 元素上的 lang 属性必须具有有效值

why?

> HTML 文档中指定的语言必须是有效语言之一，以确保屏幕阅读器用户可以正确发音。

bad

```js
<html>
<html lang="foo">
```

good

```js
<html lang="en">
<html lang="en-US">
```

## 媒体元素必须有字幕

why?

> 为媒体提供字幕对于聋人用户来说至关重要。字幕应该是对话、音效、相关音乐提示和其他相关音频信息的转录或翻译。这不仅对可访问性很重要，而且在媒体不可用的情况下对所有用户也很有用（类似于 alt 无法加载图像时图像上的文本）

bad

```js
<audio {...props} />
<video {...props} />
```

good

```js
<audio><track kind="captions" {...props} /></audio>
<video><track kind="captions" {...props} /></video>
<video muted {...props} ></video>
```

## 强制 onmouseover/onmouseout 伴随着 onfocus/onblur

why?

> 键盘编码对于无法使用鼠标的身体残疾用户、AT 兼容性和屏幕阅读器用户非常重要

bad

```js
<div onMouseOver={ () => void 0 } />
<div onMouseOut={ () => void 0 } />
<div onMouseOver={ () => void 0 } {...otherProps} />
<div onMouseOut={ () => void 0 } {...otherProps} />
```

good

```js
<div onMouseOver={ () => void 0 } onFocus={ () => void 0 } />
<div onMouseOut={ () => void 0 } onBlur={ () => void 0 } />
<div onMouseOver={ () => void 0 } onFocus={ () => void 0 } {...otherProps} />
<div onMouseOut={ () => void 0 } onBlur={ () => void 0 } {...otherProps} />
```

## 在元素上强制没有 accessKey 属性

why?

> 访问键是 HTML 属性，允许 Web 开发人员将键盘快捷键分配给元素。屏幕阅读器和纯键盘用户使用的键盘快捷键和键盘命令之间的不一致会造成可访问性复杂性，因此为避免复杂性，不应使用访问键

bad

```js
<div accessKey="h" />
```

good

```js
<div />
```

## 强制在元素上不使用 autoFocus

why?

> 自动对焦元素可能会导致有视力和无视力用户的可用性问题，等等

bad

```js
<div accessKey="h" />
```

good

```js
<div autoFocus />
<div autoFocus="true" />
<div autoFocus="false" />
<div autoFocus={undefined} />
```

## 强制不使用分散注意力的元素

why?

> 分散视觉注意力的元素可能会导致视障用户出现可访问性问题。此类元素很可能已被弃用，应避免使用

bad

```js
<marquee />
<blink />
```

good

```js
<div />
```

## 非交互元素不支持事件处理程序（鼠标和键处理程序）

bad

```js
<li onClick={() => void 0} />
<div onClick={() => void 0} role="listitem" />
```

good

```js
<div onClick={() => void 0} role="button" />
<div onClick={() => void 0} role="presentation" />
<input type="text" onClick={() => void 0} /> // Interactive element does not require role.
<button onClick={() => void 0} className="foo" /> // button is interactive.
<div onClick={() => void 0} role="button" aria-hidden /> // This is hidden from screenreader.
<Input onClick={() => void 0} type="hidden" /> // This is a higher-level DOM component
```

## 不必为无序列表中的项目添加 tabindex

why?

> Tab 键导航应仅限于页面上可以交互的元素。因此，不必为无序列表中的项目添加 tabindex，例如，通过辅助技术使它们可导航。这些应用程序已经提供了基于页面 HTML 的页面遍历机制。一般来说，我们应该尽量减少页面标签环的大小，而不是增加它

bad

```js
<div tabIndex="0" />
<div role="article" tabIndex="0" />
<article tabIndex="0" />
<article tabIndex={0} />
```

good

```js
<div />
<MyButton tabIndex={0} />
<button />
<button tabIndex="0" />
<button tabIndex={0} />
<div />
<div tabIndex="-1" />
<div role="button" tabIndex="0" />
<div role="article" tabIndex="-1" />
<article tabIndex="-1" />
```

## 确保 html 元素上没有指定的冗余角色

why?

> 一些 HTML 元素具有由浏览器实现的本机语义。这包括默认/隐式 ARIA 角色。设置与其默认/隐式角色匹配的 ARIA 角色是多余的，因为它已经由浏览器设置。

bad

```js
<button role="button" />
<img role="img" src="foo.jpg" />
```

good

```js
<div />
<button role="presentation" />
<MyComponent role="main" />
```

## 禁止在静态标签上绑定用户事件

Why?

> 静态标签没有语义,对残障人士和屏蔽阅读器非常不友好.请在交互式标签上绑定事件,或者手动给静态标签添加可访问属性,这样屏幕阅读器就能够识别出来.

bad

```js
<div onClick={() => {}} />
```

good

```jsx
// 交互式标签
<button onClick={() => {}} className="foo" />
<input type="text" onClick={() => {}} />

// 可访问性属性
<div className="foo" onClick={() => {}} role="button" />
```

参考:

- [no-static-element-interactions](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-static-element-interactions.md)

## 具有 ARIA 角色的元素必须具有该角色所需的所有属性

bad

```js
<!-- Bad: the checkbox role requires the aria-checked state -->
<span role="checkbox" aria-labelledby="foo" tabindex="0"></span>
```

good

```js
<!-- Good: the checkbox role requires the aria-checked state -->
<span role="checkbox" aria-checked="false" aria-labelledby="foo" tabindex="0"></span>
```

## 强制定义具有显式或隐式角色的元素仅包含 aria-\*受其支持的属性 role

why?

> 许多 ARIA 属性（状态和属性）只能用于具有特定角色的元素。一些元素具有隐含的角色，例如< a href="#" />，将解析为 role="link"。

bad

```js
<!-- Bad: the radio role does not support the aria-required property -->
<ul role="radiogroup" aria-labelledby="foo">
    <li aria-required tabIndex="-1" role="radio" aria-checked="false">Rainbow Trout</li>
    <li aria-required tabIndex="-1" role="radio" aria-checked="false">Brook Trout</li>
    <li aria-required tabIndex="0" role="radio" aria-checked="true">Lake Trout</li>
</ul>
```

good

```js
<!-- Good: the radiogroup role does support the aria-required property -->
<ul role="radiogroup" aria-required aria-labelledby="foo">
    <li tabIndex="-1" role="radio" aria-checked="false">Rainbow Trout</li>
    <li tabIndex="-1" role="radio" aria-checked="false">Brook Trout</li>
    <li tabIndex="0" role="radio" aria-checked="true">Lake Trout</li>
</ul>
```

## scope 属性应仅用于< th>元素

why?

> scope 属性应该在表上正确使用，如果正确使用该 scope 属性，则屏幕阅读器用户可以更轻松地进行表格导航。使用不当，scope 会使表格导航变得更加困难和效率低下

bad

```js
<div scope />
```

good

```js
<th scope="col" />
<th scope={scope} />
```

## 强制 tabIndex 值不大于零

why?

> 避免使用正 tabIndex 属性值以使页面流与键盘 Tab 键顺序同步

bad

```js
<span tabIndex="0">foo</span>
<span tabIndex="-1">bar</span>
<span tabIndex={0}>baz</span>
```

good

```js
<th scope="col" />
<th scope={scope} />
```

## 强制 tabIndex 值不大于零

why?

> 避免使用正 tabIndex 属性值以使页面流与键盘 Tab 键顺序同步

bad

```js
<span tabIndex="0">foo</span>
<span tabIndex="-1">bar</span>
<span tabIndex={0}>baz</span>
```

good

```js
<th scope="col" />
<th scope={scope} />
```
