import { defineStore } from "pinia";
import { GiKey } from "vue3-icons/gi";
import { CgPokemon } from "vue3-icons/cg";

export const useHomeStore = defineStore("home", {
  state: () => ({
    isDark: false,
    activeIndex: "main",
    menu: [
      {
        name: "main",
        path: "/main",
        label: "主页",
        icon: "house",
        url: "Main",
      },
      {
        name: "pokemon",
        label: "宝可梦",
        icon: CgPokemon,
        children: [
          {
            name: "world",
            path: "/pokemon/world",
            label: "世界观",
            icon: "MapLocation",
            url: "World",
          },
          {
            name: "pokedex",
            path: "/pokemon/pokedex",
            label: "图鉴",
            icon: "Iphone",
            url: "Pokedex",
          },
        ],
      },
      {
        name: "cruise",
        label: "胜地巡游",
        icon: "Guide",
        children: [
          {
            name: "fatal",
            path: "/game/sokoban",
            label: "致命游戏",
            icon: GiKey,
            url: "Fatal",
          },
        ],
      },
      {
        name: "fish",
        label: "摸鱼",
        icon: "ToiletPaper",
        children: [
          {
            name: "wall",
            path: "/game/sokoban",
            label: "鬼打墙",
            icon: "Grid",
            url: "Wall",
          },
          {
            name: "water",
            path: "/game/water",
            label: "水波纹",
            icon: "MoonNight",
            url: "Water",
          },
          {
            name: "fruit",
            path: "/game/fruit",
            label: "水果",
            icon: "Watermelon",
            url: "Fruit",
          },
        ],
      },
    ],
  }),

  getters: {
    noChildren: (state) => {
      return state.menu.filter((item) => !item.children);
    },
    hasChildren: (state) => {
      return state.menu.filter((item) => item.children);
    },
  },

  actions: {
    toggleDark(val: boolean) {
      this.isDark = val;
    },
    changeActiveIndex(val: string) {
      this.activeIndex = val;
    },
  },
});
