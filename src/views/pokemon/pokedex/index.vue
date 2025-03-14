<template>
  <div class="main h-auto px-15 bg-[#0a141e]">
    <div
      :style="style"
      class="h-full bg-center bg-no-repeat relative overflow-hidden main"
    >
      <div :style="{ height: '2000px', width: '100%' }">213</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CSSProperties } from "vue";
import wallImage from "@/assets/images/pokemon/list_bg.jpg";
const style: CSSProperties = {
  backgroundImage: `url(${wallImage})`,
  backgroundSize: "100% auto",
};
</script>

<style scoped></style>
