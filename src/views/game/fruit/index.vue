<template>
  <div ref="bg" class="main flex items-center justify-center">
    <div
      :ref="addToRef"
      :class="`card-${key} ${
        key === selected ? 'w-[550px] mb-w-200' : 'w-20'
      } h-96 cursor-pointer transition-all ease-in-out duration-[3000ms]`"
      v-for="(item, key) in cards"
      :key="key"
      @click="() => handleClick(key)"
    >
      <Card :card="item" :selected="selected" :index="key" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect, onUpdated } from "vue";
import { FaAppleWhole } from "vue3-icons/fa6";
import { GiCutLemon, GiStrawberry } from "vue3-icons/gi";
import { PiOrangeSliceLight } from "vue3-icons/pi";
import apple from "@/assets/images/fruit/apple.webp";
import lemon from "@/assets/images/fruit/lemon.webp";
import berry from "@/assets/images/fruit/berry.webp";
import orange from "@/assets/images/fruit/orange.webp";
import lemonbg from "@/assets/images/fruit/lemonbg.webp";
import Card from "./components/Card.vue";
import { gsap } from "gsap";

const cards = ref([
  {
    title: "APPLE",
    bgCardColor: "bg-[#CC1918]",
    bgColor: "#FF7070",
    textColor: "text-white",
    icon: FaAppleWhole,
    img: apple,
    bgImg: apple,
  },
  {
    title: "LEMON",
    bgCardColor: "bg-[#FDFF8F]",
    bgColor: "#F7E35B",
    textColor: "text-[#85822D]",
    icon: GiCutLemon,
    img: lemon,
    bgImg: lemonbg,
  },
  {
    title: "BERRY",
    bgCardColor: "bg-[#FF2557]",
    bgColor: "#FF6286",
    textColor: "text-white",
    icon: GiStrawberry,
    img: berry,
    bgImg: berry,
  },
  {
    title: "ORANGE",
    bgCardColor: "bg-[#FFBA36]",
    bgColor: "#F4A308",
    textColor: "text-white",
    icon: PiOrangeSliceLight,
    img: orange,
    bgImg: orange,
  },
]);
const selected = ref(0);
const cardRefs = ref<HTMLCanvasElement[]>([]);
const bg = ref<HTMLCanvasElement | null>(null);
let ctx: any;

const handleClick = (key: number) => {
  selected.value = key;
};

const addToRef = (el: any) => {
  if (el && !cardRefs.value.includes(el)) {
    cardRefs.value.push(el);
  }
};

const animationFuc = () => {
  ctx = gsap.context(() => {
    gsap.utils.toArray(cardRefs.value).forEach((_, index) => {
      if (`card-${index}` === `card-${selected.value}`) {
        gsap.to(bg.value, {
          backgroundColor: cards.value[index].bgColor,
          duration: 1,
          ease: "none",
        });
        gsap.to(".img", {
          top: "-100px",
          delay: 0.7,
          duration: 2,
          ease: "none",
        });
      }
    });
  });
};

watchEffect(
  () => {
    ctx && ctx.revert();
    animationFuc();
  },
  {
    flush: "post", //默认为pre
  }
);
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .mb-w-200 {
    width: 200px;
  }
}
</style>
