<template>
  <el-container class="h-full">
    <el-header><Header /></el-header>
    <el-main class="!p-0"> <router-view /></el-main>
  </el-container>
</template>

<script setup lang="ts">
import Header from "./components/header.vue";
</script>

<style scoped></style>
