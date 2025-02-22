import { defineConfig } from 'vitepress';
import pkg from '../../lerna.json';
import sideBarData from '../sideBarData.json';
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'OhMyLive2D',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  description: 'A VitePress Site',
  appearance: 'dark',
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh',
      dir: '/',
      title: 'OhMyLive2D',
      description: '一个开箱即用的 Javascript 工具库'
    }
  },

  lastUpdated: true,
  themeConfig: {
    footer: {
      message: 'Released under the MIT License.',
      copyright: `<div>
      <div>
      Copyright © 2023-present Hacxy
      </div>
      <a href="https://beian.miit.gov.cn/">鄂ICP备2021019656号</a>
      </div>`
    },
    logo: {
      dark: '/logo-white.png',
      light: '/logo-black.png'
    },
    sidebar: {
      '/options/': sideBarData,
      '/guide': [
        { text: '快速入门', link: '/guide/' },
        { text: '在vitepress中使用', link: '/guide/vitepress' },
        { text: '在vuepress中使用', link: '/guide/vuepress' },
        { text: '在hexo中使用', link: '/guide/hexo' }
      ]
    },
    outline: {
      level: [2, 4],
      label: '本页目录'
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/oh-my-live2d/oh-my-live2d' }],
    nav: [
      {
        text: `v${pkg.version}`,
        link: '/'
      },
      {
        text: '配置',
        link: '/options/Options'
      },
      { text: '更新日志', link: '/CHANGELOG' }
    ],
    search: {
      provider: 'local',
      options: {
        _render(src, env, md) {
          const html = md.render(src, env);
          if (env.frontmatter?.search === false) return '';
          if (env.relativePath.startsWith('docs/modules')) return '';
          return html;
        },
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    }
  }
});
