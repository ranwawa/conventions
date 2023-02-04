# 媒体元素必须有字幕

why?

> 为媒体提供字幕对于聋人用户来说至关重要。字幕应该是对话、音效、相关音乐提示和其他相关音频信息的转录或翻译。这不仅对可访问性很重要，而且在媒体不可用的情况下对所有用户也很有用（类似于 alt 无法加载图像时图像上的文本）

## bad

```jsx
<audio {...props} />
<video {...props} />
```

## good

```jsx
<audio><track kind="captions" {...props} /></audio>
<video><track kind="captions" {...props} /></video>
<video muted {...props} ></video>
```

## 参考:

- [mouse-events-have-key-events](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/mouse-events-have-key-events)
