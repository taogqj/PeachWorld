<template>
  <div class="main flex justify-center items-center bg-blue-400">
    <!-- 4 5 10 ✅11 ✅12 -->
    <svg
      width="400"
      height="400"
      xmlns="http://www.w3.org/2000/svg"
      class="mb-wh"
    >
      <filter id="heat">
        <feTurbulence
          id="heatwave"
          type="turbulence"
          baseFrequency="0.00"
          numOctaves="2"
          result="turbulence"
        />
        <feDisplacementMap
          in2="turbulence"
          in="SourceGraphic"
          scale="22"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
      <image
        id="img"
        ref="img"
        href="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
        height="100%"
        width="100%"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { gsap } from "gsap";

const img = ref<HTMLCanvasElement | null>(null);

const water = () => {
  onMounted(() => {
    img.value?.addEventListener("mouseover", () => {
      gsap.to("#heatwave", 2, {
        attr: {
          baseFrequency: "0.022  0.01",
        },
      });
    });
    img.value?.addEventListener("mouseleave", () => {
      gsap.to("#heatwave", 2, {
        attr: {
          baseFrequency: "0.00  0.00",
        },
      });
    });
  });
};

water();
</script>

<style lang="less" scoped>
#img {
  filter: url(#heat);
}

@media screen and (max-width: 768px) {
  .mb-wh {
    width: 300px;
    height: 300px;
  }
}
</style>
