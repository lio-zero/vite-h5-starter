<script setup lang="ts" name="tabbar">
import type { TabbarType } from './typing'
const active = ref(0)
const tabbarData: TabbarType[] = reactive([
  {
    icon: 'wap-home-o',
    title: '主页',
    to: {
      name: 'Home',
    },
  },
  {
    icon: 'manager-o',
    title: '我的',
    to: {
      name: 'Me',
    },
  },
])
</script>

<template>
  <van-tabbar v-model="active" fixed :placeholder="true" :route="true">
    <van-tabbar-item v-for="(item, index) in tabbarData" :key="index" :icon="item.icon" :to="item.to">
      {{ item.title }}
    </van-tabbar-item>
  </van-tabbar>
</template>
