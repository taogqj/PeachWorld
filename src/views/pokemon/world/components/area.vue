<template>
  <div class="flex py-20 justify-between items-baseline text-white">
    <div class="text-[80px] mb-text-40">地域细细看</div>
  </div>
  <div v-for="item in img" :class="['text-white', 'pb-20']" :key="item.id">
    <div class="text-[60px] pb-10 mb-text-30">{{ item.name }}</div>
    <div class="flex items-center mb-text-flex-col">
      <div class="w-2/5 mb-text-w-1">
        <div class="text-[40px] mb-text-20">地理</div>
        <div class="text-[20px] mb-text-12">{{ item.geography }}</div>
        <div class="text-[40px] mb-text-20 mt-6">御三家</div>
        <div class="flex mt-2">
          <div
            v-for="val in item.friends"
            :key="val"
            class="w-[60px] flex items-center flex-col mr-4"
          >
            <el-image
              :src="getUrl(val)"
              :zoom-rate="1.2"
              :max-scale="7"
              :min-scale="0.2"
              show-progress
              :initial-index="1"
              fit="fill"
              loading="lazy"
            />
            <div class="text-[15px] mb-text-12">{{ val.split("-").pop() }}</div>
          </div>
        </div>
      </div>
      <el-image
        class="mb-image max-h-[600px] w-3/5 mb-text-w-1 mb-text-mt-20"
        :src="item.url"
        :zoom-rate="1.2"
        :max-scale="7"
        :min-scale="0.2"
        show-progress
        :initial-index="1"
        :preview-src-list="[item.details]"
        fit="fill"
        loading="lazy"
      >
        <template #placeholder>
          <el-skeleton loading animated>
            <template #template>
              <el-skeleton-item class="mb-image" variant="image" />
            </template>
          </el-skeleton>
        </template>
      </el-image>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWorldStore } from "@/store/pokemon/world";
import { storeToRefs } from "pinia";
const { img } = storeToRefs(useWorldStore());

const getUrl = (val: string) => {
  return new URL(
    `/src/assets/images/pokemon/official/${val}.png`,
    import.meta.url
  ).href;
};
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

:deep(.el-skeleton__item) {
  height: 800px !important;
}

@media screen and (max-width: 768px) {
  .mb-text-40 {
    font-size: 40px;
  }

  .mb-text-30 {
    font-size: 30px;
  }

  .mb-text-20 {
    font-size: 20px;
  }

  .mb-text-12 {
    font-size: 12px;
  }

  .mb-image {
    height: 300px !important;
  }

  .mb-text-flex-col {
    flex-direction: column;
  }

  .mb-text-w-1 {
    width: 100%;
  }

  .mb-text-mt-20 {
    margin-top: 20px;
  }
}
</style>
