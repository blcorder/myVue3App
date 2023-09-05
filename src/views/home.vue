<script setup lang="ts">
    import Nav from './Nav.vue';
    import { RouterView } from 'vue-router';
</script>


<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <Nav/>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<style scoped lang="less">
.common-layout{
  width: 100%;
  height: 100%;
  .el-container{
    width: 100%;
    height: 100%;
  }
}
</style>