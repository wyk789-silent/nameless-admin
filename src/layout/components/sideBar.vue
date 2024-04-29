<template>
  <el-aside :width="isCollapse ? '64px' : '200px'">
    <div
      class="flex justify-center items-center pt-11px pb-12px border-bottom-1px border-right-1px"
    >
      <img src="../../assets/vue.svg" alt="Vue logo" />
      <span v-show="!isCollapse" class="ml-6px">nameless-Vue</span>
    </div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse-transition="false"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group>
          <template #title><span>Group One</span></template>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title><span>item four</span></template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <template #title>Navigator Two</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon><document /></el-icon>
        <template #title>Navigator Three</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script setup lang="ts">
// import { Message } from "@element-plus/icons-vue";
import { computed } from "vue";
import { useLayoutStore } from "@/hooks/layout/useLayout.ts";

import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";

const layoutSetting = useLayoutStore();
const isCollapse = computed(() => layoutSetting.isCollapse);

const handleOpen = () => {};
const handleClose = () => {};
</script>

<style scoped></style>
