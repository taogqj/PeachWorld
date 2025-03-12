import { defineStore } from "pinia";
import { reactive } from "vue";

export const usePlayerStore = defineStore("player", {
  state: () => ({
    player: reactive({
      x: 1,
      y: 1,
    }),
  }),
  actions: {
    movePlayerToLeft() {
      if (this.player.x <= 1) return;
      this.player.x -= 1;
    },

    movePlayerToRight() {
      if (this.player.x >= 8) return;
      this.player.x += 1;
    },

    movePlayerToTop() {
      if (this.player.y <= 1) return;
      this.player.y -= 1;
    },

    movePlayerToBottom() {
      if (this.player.y >= 8) return;
      this.player.y += 1;
    },
  },
});
