/**
 * @description 在 index.html 中最小化和使用 ejs 模板语法的插件。
 * @link https://github.com/anncwb/vite-plugin-html
 */
import type { PluginOption } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'

export function configHtmlPlugin(env: ViteEnv, isBuild: boolean) {
  const { VITE_GLOB_APP_TITLE } = env

  const htmlPlugin: PluginOption[] = createHtmlPlugin({
    minify: isBuild,
    inject: {
      // 将数据注入 ejs 模板
      data: {
        title: VITE_GLOB_APP_TITLE,
      },
    },
  })

  return htmlPlugin
}
