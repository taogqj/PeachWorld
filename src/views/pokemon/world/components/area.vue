<template>
  <div class="flex py-20 justify-between items-baseline text-white">
    <div class="text-[80px] mb-text">地域细细看</div>
  </div>
  <div v-for="(item, i) in img" class="text-white pb-20" :key="i">
    <div class="text-[80px] pb-10 mb-text">{{ item.name }}</div>
    <el-image
      class="mb-image"
      :style="{ width: '100vw', height: '800px' }"
      :src="item.url"
      :zoom-rate="1.2"
      :max-scale="7"
      :min-scale="0.2"
      show-progress
      :initial-index="1"
      :preview-src-list="[item.url]"
      fit="fill"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useWorldStore } from "@/store/pokemon/world";
import { storeToRefs } from "pinia";
const { fetchPokemonImg } = useWorldStore();
const { img } = storeToRefs(useWorldStore());

onMounted(() => {
  fetchPokemonImg();
});
</script>

<style lang="less" scoped>
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

:deep(.el-carousel__indicators) {
  display: none !important;
}

@media screen and (max-width: 768px) {
  .mb-text {
    font-size: 40px;
  }

  .mb-image {
    height: 300px !important;
  }
}
</style>
