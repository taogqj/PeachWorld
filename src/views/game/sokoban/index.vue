<template>
  <div class="h-full bg-black main">
    <Game />
  </div>
</template>

<script setup lang="ts">
import Game from "@/views/game/sokoban/components/Game.vue";
import { toogleDark } from "@/utils/toogleDark";

toogleDark();
</script>

<style scoped></style>
