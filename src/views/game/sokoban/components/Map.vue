<template>
  <div class="relative z-10">
    <div v-for="(col, i) in map" :key="i" class="flex">
      <div v-for="(row, j) in map[i]" :key="j">
        <template v-if="map[i][j] === MapEnum.Wall">
          <img :src="wallImage" alt="" />
        </template>
        <template v-if="map[i][j] === MapEnum.Land">
          <img :src="floorImage" alt="" />
        </template>
      </div>
    </div>
    <Player />
  </div>
</template>

<script setup lang="ts">
import Player from "./Player.vue";
import floorImage from "@/assets/images/floor.png";
import wallImage from "@/assets/images/wall.png";
import { useMapStore } from "@/store/game/sokoban/map";
import { MapEnum } from "@/constant/base";

const { map } = useMapStore();
</script>

<style scoped></style>
