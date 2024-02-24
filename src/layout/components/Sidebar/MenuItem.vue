<template>
  <i
    v-if="icon && icon.includes('el-icon')"
    class="sub-el-icon"
    :class="icon"
  ></i>
  <svg-icon v-else :icon="icon"></svg-icon>
  <!-- title是路由表router的title，根据路由表title转化为国际化内容，展示到侧边栏上。 -->
  <span>{{ generateTitle(title) }}</span>
</template>

<script setup>
import { generateTitle } from '@/utils/i18n'
import { defineProps } from 'vue'
defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped></style>
