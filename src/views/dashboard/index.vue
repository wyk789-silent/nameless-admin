<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span style="font-weight: bold; color: #303133">Spurs-Admin 介绍</span>
      </div>
    </template>
    <div>
      <span style="font-weight: bold; color: #303133">Spurs-Admin</span> 基于
      Vue3.3、TypeScript、Vite3、Pinia、Element-Plus
      专注于表格，表单的企业级后台管理框架,取名
    </div>
    <el-button type="primary" @click="handlefetch">获取</el-button>
  </el-card>
</template>

<script setup lang="ts">
import service from "@/utils/request";

const handlefetch = () => {
  service
    .post("/data/list", { aaa: 123 })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>

<style scoped>
.box-card {
  width: 950px;
}
:deep(.el-link__inner) {
  font-size: 18px;
  line-height: 36px;
}
</style>
