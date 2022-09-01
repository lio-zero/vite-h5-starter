/**
 * @description Vue 的按需组件自动导入。
 * @link https://github.com/antfu/unplugin-vue-components
 */
import Components from 'unplugin-vue-components/vite'
import { VantResolver, VueUseComponentsResolver } from 'unplugin-vue-components/resolvers'

export function autoRegistryComponents() {
  return Components({
    extensions: ['vue'],
    deep: true,
    dts: 'types/components.d.ts',
    directoryAsNamespace: false,
    globalNamespaces: [],
    directives: true,
    include: [/\.vue$/, /\.vue\?vue/],
    resolvers: [
      VantResolver(),
      VueUseComponentsResolver(),
    ],
  })
}
