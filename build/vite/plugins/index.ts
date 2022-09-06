/**
 * @name createVitePlugins
 * @description 封装 plugins 数组统一调用
 */
import type { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import { autoRegistryComponents } from './component'
import { autoImportDeps } from './autoImport'
import { configVisualizerConfig } from './visualizer'
import { configCompressPlugin } from './compress'
import { configRestartPlugin } from './restart'
import { configStyleImportPlugin } from './styleImport'
import { configHtmlPlugin } from './html'

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const {
    VITE_LEGACY,
    VITE_BUILD_COMPRESS,
    VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE,
  } = viteEnv

  const vitePlugins: (PluginOption | PluginOption[])[] = [
    // vue 支持
    vue(),
    // JSX 支持
    vueJsx(),
    // 自动按需引入组件
    autoRegistryComponents(),
    // 自动按需引入依赖
    autoImportDeps(),
    // setup name 属性
    vueSetupExtend(),
    // 监听配置文件改动重启
    configRestartPlugin(),
  ]

  // @vitejs/plugin-legacy
  // https://github.com/vitejs/vite/tree/main/packages/plugin-legacy
  VITE_LEGACY && isBuild && vitePlugins.push(legacy())

  // vite-plugin-html
  vitePlugins.push(configHtmlPlugin(viteEnv, isBuild))

  // rollup-plugin-visualizer
  vitePlugins.push(configVisualizerConfig())

  // vite-plugin-style-import
  vitePlugins.push(configStyleImportPlugin())

  // vite-plugin-vue-setup-extend
  vitePlugins.push(vueSetupExtend())

  if (isBuild) {
    // 开启 .gz 压缩
    vitePlugins.push(configCompressPlugin(VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE))
  }

  return vitePlugins
}
