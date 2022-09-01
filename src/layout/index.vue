<script setup lang="ts" name="Layout">
import Tabbar from './Tabbar.vue'
import { useAppStore } from '@/store/modules/app'
const appStore = useAppStore()

const keepAliveRoutes = computed(() => appStore.getCachedViews)
</script>

<template>
  <div class="app-wrapper">
    <div class="app-wrapper__content">
      <router-view v-slot="{ Component }">
        <keep-alive :include="keepAliveRoutes">
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
    <footer class="app-wrapper__footer">
      <Tabbar />
    </footer>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.app-wrapper__footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
