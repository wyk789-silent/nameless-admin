//解决import vue文件红色波浪线问题
declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, "", any>;
  export default component;
}
