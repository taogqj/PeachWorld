<template>
  <div class="flex w-full relative">
    <router-link
      to="/main"
      :key="$route.fullPath"
      class="absolute z-1 left-4 h-[30px] w-[30px]"
    >
      <GiPeach
        :class="`mt-3 cursor-pointer h-[30px] w-[30px] ${
          isHyaline ? 'text-white' : null
        }`"
        @click="handleClick"
      />
    </router-link>

    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo w-full justify-center"
      mode="horizontal"
      :background-color="isHyaline ? 'rgba(0, 0, 0, 0.1)' : null"
      :text-color="isHyaline ? '#fff' : null"
      @select="handleSelect"
    >
      <el-menu-item
        v-for="item in noChildren"
        :index="item.name"
        :key="item.name"
        @click="
          () => {
            $router.push(item.path);
          }
        "
      >
        <component :is="item.icon" class="size-4 mr-2"></component>
        {{ item.label }}
      </el-menu-item>
      <el-sub-menu
        v-for="item in hasChildren"
        :index="item.name"
        :key="item.name"
      >
        <template #title>
          <component :is="item.icon" class="size-4 mr-2"></component>
          {{ item.label }}
        </template>
        <el-menu-item
          v-for="child in item.children"
          :index="child.name"
          :key="child.name"
          @click="
            () => {
              $router.push(child.path);
            }
          "
        >
          <component :is="child.icon" class="size-4 mr-2"></component>
          {{ child.label }}</el-menu-item
        >
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useHomeStore } from "@/store/home/home";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { GiPeach } from "vue3-icons/gi";

const { changeActiveIndex } = useHomeStore();
const { activeIndex, noChildren, hasChildren, isHyaline } = storeToRefs(
  useHomeStore()
);

onMounted(() => {
  const index = sessionStorage.getItem("activeIndex") || null;
  if (!index) {
    const router = useRouter();
    router.push("/main");
  } else {
    changeActiveIndex(sessionStorage.getItem("activeIndex") || "main");
  }
});

const handleSelect = (key: string) => {
  sessionStorage.setItem("activeIndex", key);
  changeActiveIndex(key);
};

const handleClick = () => {
  sessionStorage.removeItem("activeIndex");
  changeActiveIndex("main");
};
</script>

<style scoped></style>
