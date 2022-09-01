import { defineStore } from 'pinia'

interface AppState {
  cachedViews: any
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    cachedViews: '',
  }),
  getters: {
    getCachedViews(): any {
      return this.cachedViews
    },
  },
  actions: {},
})
