<script setup lang="ts">
    import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
// const handleOpen = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)
// }
// const handleClose = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)
// }
</script>


<template>
  <div class="nav-aside">
    <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        router
      >
      <el-menu-item index="/Menu1">
                <el-icon><Setting /></el-icon>
                菜单一
            </el-menu-item>
            <el-menu-item index="/Menu2">
                <el-icon><Document /></el-icon>
                菜单二
            </el-menu-item>
            <el-menu-item index="/Menu3">
                <el-icon><Location /></el-icon>
                菜单三
            </el-menu-item>
      </el-menu>
  </div>
</template>


<style scoped lang="less">
</style>