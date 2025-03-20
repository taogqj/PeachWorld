<template>
  <div class="main h-auto px-15 bg-[#0a141e]">
    <div
      :style="style"
      class="h-full bg-center bg-no-repeat relative overflow-hidden main"
    >
      <Top />
      <Area />
    </div>
  </div>
</template>

<script setup lang="ts">
import Top from "./components/Top.vue";
import Area from "./components/Area.vue";
import wallImage from "@/assets/images/pokemon/list_bg.jpg";
import type { CSSProperties } from "vue";
import { onMounted } from "vue";
import { useWorldStore } from "@/store/pokemon/world";

const style: CSSProperties = {
  backgroundImage: `url(${wallImage})`,
  backgroundSize: "100% auto",
};

const getPokemonImgList = () => {
  const { fetchPokemonImg } = useWorldStore();
  onMounted(() => {
    fetchPokemonImg();
  });
};

getPokemonImgList();
</script>

<style scoped></style>
