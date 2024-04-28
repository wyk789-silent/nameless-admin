<template>
  <el-container class="layout-container-demo" style="height: 100vh">
      <sideBar />

    <el-container>
      <el-header class="border-bottom-1px" style="text-align: right; font-size: 12px">
        <headBar />
      </el-header>

      <el-main>
        <mainPage />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import sideBar from "./components/sideBar.vue";
import headBar from "./components/headBar.vue";
import mainPage from "./components/mainPage.vue";
</script>
