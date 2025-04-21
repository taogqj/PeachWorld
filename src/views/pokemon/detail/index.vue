<template>
    <div>
        <div>User ID: {{ userId }}</div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();
const userId = route.params.userId;
</script>

<style scoped>

</style>