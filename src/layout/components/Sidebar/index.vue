<template>
  <div class="">
    <div class="logo-container">
      <el-avatar
        :size="logoHeight"
        shape="square"
        src=""
      />
      <h1 class="logo-title" v-if="$store.getters.sidebarOpened">
        <!-- imooc-admin -->
        个人前端技术展示
        <!-- {{ $t('msg.test') }} -->
      </h1>
    </div>
    <!-- <h1>占位</h1> -->
    <el-scrollbar>
      <sidebar-menu></sidebar-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import SidebarMenu from './SidebarMenu'
import {} from 'vue'
const logoHeight = 44
</script>

<style lang="scss" scoped>
.logo-container {
  // height: 44px;
  height: v-bind(logoHeight) + 'px';
  padding: 10px 0 22px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo-title {
    margin-left: 10px;
    color: #fff;
    font-weight: 600;
    line-height: 50px;
    font-size: 16px;
    white-space: nowrap;
  }
}
</style>
