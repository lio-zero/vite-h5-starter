/**
 * @description 根据需要自动导入 API。
 * @link https://github.com/antfu/unplugin-auto-import
 */
import AutoImport from 'unplugin-auto-import/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

export function autoImportDeps() {
  return AutoImport({
    dts: 'types/auto-imports.d.ts',
    imports: [
      'vue',
      'pinia',
      'vue-router',
      '@vueuse/core',
    ],
    resolvers: [
      VantResolver(),
    ],
  })
}
