<template>
  <div
    v-if="index === selected"
    class="absolute w-screen main top-0 left-0 flex justify-between mt-15"
  >
    <div class="flex flex-col justify-around">
      <img class="w-40 rotate-12" :src="card.bgImg" alt="" />
      <img class="w-72 rotate-45" :src="card.bgImg" alt="" />
    </div>
    <div class="flex flex-col justify-around">
      <img class="w-36 rotate-[-90deg]" :src="card.bgImg" alt="" />
      <img class="w-64 rotate-90" :src="card.bgImg" alt="" />
    </div>
  </div>
  <div class="h-full relative">
    <div
      :class="`h-full rounded-xl flex items-center justify-center ${card.bgCardColor} z-9 relative`"
    >
      <span class="text-white text-[1.5rem] absolute top-5 left-5">
        <component
          :is="card.icon"
          :color="`${card.title === 'LEMON' ? 'black' : null}`"
        ></component>
      </span>
      <h1
        :class="`${card.textColor} ${
          index === selected
            ? 'rotate-0 text-[8rem] mb-text-2-rem'
            : ' rotate-90 text-[2rem]'
        }  font-bold transition-all ease-in-out duration-[3000ms]`"
      >
        {{ card.title }}
      </h1>
    </div>
    <img
      :src="card.img"
      :class="`img 
      ${selected === index ? 'opacity-100' : 'opacity-0'}
      z-1 
       w-60 absolute top-0`"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from "vue";

const props = defineProps({
  card: {
    type: Object,
    default: () => ({}),
  },
  selected: {
    type: Number,
    default: 0,
  },
  index: {
    type: Number,
    default: 0,
  },
});

const { card } = toRefs(props);
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .mb-text-2-rem {
    font-size: 2rem;
  }
}
</style>
