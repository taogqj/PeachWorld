<template>
  <div class="absolute" :style="position">
    <img :src="keeperImage" alt="" />
  </div>
</template>

<script setup lang="ts">
import keeperImage from "../../assets/images/keeper.png";
import { usePlayerStore } from "../../store/player";
import { computed, ref, onMounted, onUnmounted } from "vue";

const useMove = () => {
  const {
    movePlayerToLeft,
    movePlayerToRight,
    movePlayerToTop,
    movePlayerToBottom,
  } = usePlayerStore();

  const handleKeyUp = (e: KeyboardEvent) => {
    switch (e.code) {
      case "ArrowLeft":
        movePlayerToLeft();
        break;

      case "ArrowRight":
        movePlayerToRight();
        break;

      case "ArrowUp":
        movePlayerToTop();
        break;

      case "ArrowDown":
        movePlayerToBottom();
        break;

      default:
        break;
    }
  };

  onMounted(() => {
    window.addEventListener("keyup", handleKeyUp);
  });

  onUnmounted(() => {
    window.removeEventListener("keyup", handleKeyUp);
  });
};

const usePosition = () => {
  const { player } = usePlayerStore();
  const STEP = ref(32);
  const position = computed(() => {
    return {
      // 使用 STEP.value 来获取 Ref 包装的值
      left: player.x * STEP.value + "px",
      top: player.y * STEP.value + "px",
    };
  });

  return {
    position,
  };
};

useMove();
const { position } = usePosition();
</script>

<style scoped></style>
