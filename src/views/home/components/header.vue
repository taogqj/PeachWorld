<template>
  <div class="flex w-full relative">
    <router-link to="/main" :key="$route.fullPath" class="absolute z-1 left-4">
      <svg
        t="1741774481361"
        class="icon mt-3 cursor-pointer"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="14533"
        width="30"
        height="30"
        @click="handleClick"
      >
        <path
          d="M780.832 716.422c40.895-48.695 65.027-111.271 65.027-184.971 0-147.756-96.92-255.561-231.672-300.724C579.532 219.111 538.864 212.81 503.722 142c-25.027 77.004-81.254 75.232-110.942 83.495-143.56 39.956-231.195 152.031-231.195 305.956 0 81.248 29.305 148.993 78.09 199.505-63.968 11.337-111.432 40.228-111.432 40.228s70.898 88.487 174.712 106.477c103.812 17.99 193.906-0.512 201.229-41.323 0.236-1.313 0.379-2.633 0.44-3.959 3.889-0.008 7.757-0.077 11.615-0.181 14.241 38.521 102.033 55.261 202.502 37.378 105.261-18.737 177.148-110.888 177.148-110.888S846.737 727.955 780.832 716.422zM665.051 453.392c16.133 0 29.214 13.084 29.214 29.223 0 16.143-13.081 29.227-29.214 29.227-16.135 0-29.214-13.084-29.214-29.227C635.838 466.476 648.917 453.392 665.051 453.392zM528.755 793.074c-36.742 8.751-44.75-37.28-10.995-47.089C631 704.333 645.667 665.863 645.45 564.289c-0.07-32.659 50.205-38.501 49.98 0C708 754 555.181 783.336 528.755 793.074z"
          fill="#050202"
          p-id="14534"
        ></path>
      </svg>
    </router-link>

    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo w-full justify-center"
      mode="horizontal"
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
import { computed, ref, onMounted } from "vue";
import { useHomeStore } from "@/store/home/home";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const { changeActiveIndex } = useHomeStore();
const { activeIndex, noChildren, hasChildren } = storeToRefs(useHomeStore());

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
