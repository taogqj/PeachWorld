<template>
  <div>
    <el-watermark :font="font" :content="text">
      <Game />
    </el-watermark>
  </div>
</template>

<script setup lang="ts">
import Game from "@/components/game/Game.vue";
import { reactive, ref } from "vue";
const font = reactive({
  color: "rgba(0, 0, 0, .15)",
});

const text = ref("Peach Tao");
</script>

<style scoped></style>
