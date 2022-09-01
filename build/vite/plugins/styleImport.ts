/**
 * @description 按需引入组件库样式。
 * @link https://github.com/anncwb/vite-plugin-style-import
 */
import { VantResolve, createStyleImportPlugin } from 'vite-plugin-style-import'

export function configStyleImportPlugin() {
  return createStyleImportPlugin({
    resolves: [VantResolve()],
  })
}
