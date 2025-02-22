# 在 VuePress 中使用

你可以 VuePress 项目中使用官方插件。

## 安装/更新插件

```sh
npm install vuepress-plugin-oh-my-live2d
```

## 使用插件

在 `.vuepress/config.js` 中使用插件, 即使您在 js 中使用此插件也同样可以享受到它带来的智能提示.

```js
import { oml2dPlugin } from 'vuepress-plugin-oh-my-live2d';

export default defineUserConfig({
  // ... other configs
  plugins: [
    oml2dPlugin({
      // 在这里配置选项
      models: [
        {
          path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json',
          scale: 0.12,
          position: [-10, 50],
          stageStyle: {
            width: 350
          }
        }
      ]
    })

    //  ...other plugins
  ]
});
```

如需自定义配置, 请在[配置选项](../options/Options.md)中查阅详细配置内容.

## 案例

以下是 VuePress 的一些使用案例:

- [loclink.cn](https://loclink.cn)
