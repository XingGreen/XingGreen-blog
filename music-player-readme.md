# 音乐播放器使用说明

## 音乐文件放置路径

请将您的音乐文件放置在以下目录中：
```
f:\XingGreen-blog\public\music\
```

## 默认音乐文件

播放器默认加载的音乐文件是：
```
f:\XingGreen-blog\public\music\default.mp3
```

请确保您将音乐文件命名为 `default.mp3` 并放置在上述目录中，否则播放器将无法正常加载音乐。

## 支持的音乐格式

播放器支持以下音乐格式：
- MP3 (.mp3)
- WAV (.wav)
- OGG (.ogg)
- AAC (.aac)

如果您需要使用其他格式的音乐文件，请修改 `src/components/MusicPlayer.astro` 文件中的音频元素：

```html
<audio id="music-player" loop>
  <source src="/music/default.mp3" type="audio/mpeg">
  您的浏览器不支持音频播放功能。
</audio>
```

将 `type` 属性值改为对应的 MIME 类型，例如 `audio/ogg` 用于 OGG 格式。

## 歌词功能

当前歌词功能使用的是静态文本。如果您需要实现歌词同步功能，请准备 LRC 格式的歌词文件，并修改 `src/components/MusicPlayer.astro` 中的歌词解析和同步逻辑。

## 播放列表功能

当前播放列表只包含一首默认歌曲。如果您需要添加更多歌曲，请修改 `src/components/MusicPlayer.astro` 中的播放列表数据结构和相关逻辑。

## 浏览器兼容性

音乐播放器支持所有现代浏览器：
- Chrome (推荐)
- Firefox
- Safari
- Edge

请确保您的浏览器支持 HTML5 Audio API。