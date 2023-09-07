<script setup lang="ts">
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import { reactive } from 'vue'

interface Imenus {
  name: string,
  url: string,
  icon?: any
}
const items: Imenus[] = [
  { name: "菜单一", url: '/Menu1', icon: Setting },
  { name: "菜单二", url: '/Menu2', icon: Document },
  { name: "菜单三", url: '/Menu3', icon: Location }
]
const menus = reactive(items)
</script>


<template>
  <div class="nav-aside">
    <el-menu default-active="2" class="el-menu-vertical-demo" router>
      <el-menu-item :key="item" v-for="item in menus" :index="item.url">
        <el-icon>
          <component :is="item.icon" />
        </el-icon>
        {{ item.name }}
      </el-menu-item>
    </el-menu>
  </div>
</template>


<style scoped lang="less"></style>