import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/layout/index.vue";

export const constantRouter = [
  {
    path: "/", //默认首页
    redirect: "/dashboard",
    hidden: true,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    meta: {
      title: "首页",
      icon: "House",
    },
    component: Layout,
    children: [
      {
        path: "/dashboard",
        component: () => import("@/views/dashboard/index.vue"),
        name: "Dashboard",
        meta: { title: "首页", icon: "dashboard", affix: true },
      },
      {
        path: "/system/menuManagement",
        component: () => import("@/views/system/menuManagement/index.vue"),
        name: "MenuManagement",
        meta: { title: "系统管理", icon: "sitting", affix: true },
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登录",
    },
    component: () => import("@/views/user/login/index.vue"),
    hidden: true,
  },
  {
    path: "/:pathMatch(.*)*", // 此写法解决动态路由页面刷新的 warning 警告
    component: () => import("@/views/user/error-page/404.vue"),
    hidden: true,
  },
];

// 创建动态路由入口
export const asyncRoutes = [];

const router = createRouter({
  routes: constantRouter,
  history: createWebHistory(),
});

export default router;
