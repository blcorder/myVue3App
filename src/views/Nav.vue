<script setup lang="ts">

import { reactive } from 'vue'
import Icon from './icon/Icon.vue'
import { menus } from './data/menu'

</script>


<template>
  <div class="nav-aside">
    <el-menu default-active="2" class="el-menu-vertical-demo" router>
      <template v-for="item in menus" :key="item">
        <el-sub-menu v-if="item.children" index="item.url">
          <template #title>
            <el-icon>
              <Icon :icon="item.icon" />
            </el-icon>
            <span>{{ item.name }}</span>
          </template>
          <el-menu-item :key="child" v-for="child in item.children" :index="child.url">
            <el-icon>
              <Icon :icon="child.icon" />
            </el-icon>
            {{ child.name }}
          </el-menu-item>
        </el-sub-menu>

        <el-menu-item v-else :index="item.url">
          <el-icon>
            <Icon :icon="item.icon" />
          </el-icon>
          {{ item.name }}
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>


<style scoped lang="less"></style>