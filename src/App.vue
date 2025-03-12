<template>
  <el-watermark :font="font" :content="text">
    <div :style="{ height: '100vh' }">
      <router-view />
    </div>
  </el-watermark>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from "vue";
import { useHomeStore } from "@/store/home/home";
import { storeToRefs } from "pinia";
const { isDark } = storeToRefs(useHomeStore());

const font = reactive({
  color: "rgba(255, 255, 255,.15)",
});

watch(
  isDark,
  (newVal) => {
    font.color = newVal ? "rgba(255, 255, 255, .15)" : "rgba(0, 0, 0, .15)";
  },
  {
    immediate: true,
  }
);

const text = ref("Peach Tao");
</script>

<style scoped></style>
