<template>
  <div class="flex py-20 justify-between items-baseline text-white mb-text">
    <div class="text-[80px]">宝可梦世界</div>
    <div class="text-[28px]">一个独立于现实世界的地方</div>
  </div>
  <el-carousel :interval="2000" type="card" height="400px" class="mb-carousel">
    <el-carousel-item v-for="item in img" :key="item.id">
      <el-image :src="item.url" fit="fill" :alt="item.id" class="w-full">
        <template #placeholder>
          <el-skeleton loading animated>
            <template #template>
              <el-skeleton-item class="mb-image" variant="image" />
            </template>
          </el-skeleton>
        </template>
      </el-image>
    </el-carousel-item>
  </el-carousel>
</template>

<script setup lang="ts">
import { useWorldStore } from "@/store/pokemon/world";
import { storeToRefs } from "pinia";
const { img } = storeToRefs(useWorldStore());
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

.mb-image {
  height: 400px;
}

@media screen and (max-width: 768px) {
  .mb-text {
    flex-direction: column;

    div:nth-child(1) {
      font-size: 40px;
    }

    div:nth-child(2) {
      font-size: 20px;
    }
  }

  .mb-carousel {
    height: 200px;

    :deep(.el-image) {
      height: 100% !important;
      width: 100% !important;
    }

    :deep(.el-carousel__container) {
      height: 200px !important;
    }

    .mb-image {
      height: 200px;
    }
  }
}
</style>
