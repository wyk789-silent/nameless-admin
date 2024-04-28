<template>
  <div class="h-full flex justify-between items-center">
    <el-button size="small" @click="toggleClick">
      <el-icon v-if="isCollapse" color="#3c3c3c" :size="20">
        <Expand />
      </el-icon>
      <el-icon v-else="!isCollapse" color="#3c3c3c" :size="20">
        <Fold />
      </el-icon>
    </el-button>

    <div>
      <el-dropdown>
        <el-icon style="margin-right: 8px; margin-top: 1px">
          <setting />
        </el-icon>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>View</el-dropdown-item>
            <el-dropdown-item>Add</el-dropdown-item>
            <el-dropdown-item>Delete</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <span>Tom</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Expand, Fold, Setting } from "@element-plus/icons-vue";
import { useLayoutStore } from "../../hooks/layout/useLayout.ts";
import { storeToRefs } from "pinia";

const layoutStore = useLayoutStore();
const { isCollapse } = storeToRefs(layoutStore);

const toggleClick = () => {
  layoutStore.changeCollapse();
};
</script>

<style scoped>
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>
