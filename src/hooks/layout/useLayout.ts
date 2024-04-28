import { defineStore } from "pinia";
import { ref } from "vue";
export const useLayoutStore = defineStore("layoutSetting", () => {
  let isCollapse = ref(false);

  function changeCollapse() {
    isCollapse.value = !isCollapse.value;
  }

  return { isCollapse, changeCollapse };
});
