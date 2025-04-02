<template>
  <el-container class="h-full overflow-auto">
    <el-header class="w-full fixed z-10 !px-0"><Header /></el-header>
    <el-main :class="`!p-0 ${!isHyaline ? 'mt-15' : null} main`">
      <router-view
    /></el-main>
    <el-footer :class="isHyaline ? 'text-white bg-black' : null"
      ><Footer
    /></el-footer>
  </el-container>
</template>

<script setup lang="ts">
import { watch } from "vue";
import { useRoute } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { useHomeStore } from "@/store/home/home";
import { toogleDark } from "@/utils/toogleDark";
import { storeToRefs } from "pinia";
const { isHyaline } = storeToRefs(useHomeStore());

const changeHyaline = () => {
  const { toggleHyaline } = useHomeStore();
  const route = useRoute();
  watch(
    () => route.path,
    (newPath) => {
      if (newPath === "/main") {
        toggleHyaline(true);
      } else {
        toggleHyaline(false);
      }
    },
    { immediate: true }
  );
};

changeHyaline();
toogleDark();
</script>

<style scoped>
:deep(.el-footer) {
  padding: 0px !important;
}
</style>
